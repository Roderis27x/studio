"use client"

import * as React from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar as CalendarIcon, Clock, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DateTimePickerProps {
  value?: Date
  onChange?: (date: Date) => void
  disabled?: (date: Date) => boolean
  placeholder?: string
}

export function DatePicker({
  value,
  onChange,
  disabled,
  placeholder = "Selecciona fecha y hora",
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [step, setStep] = React.useState<'date' | 'time'>('date') // 'date' o 'time'
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value)
  const [hour, setHour] = React.useState(value?.getHours() || 9)
  const [minute, setMinute] = React.useState(value?.getMinutes() || 0)
  const [period, setPeriod] = React.useState<'AM' | 'PM'>(value && value.getHours() >= 12 ? 'PM' : 'AM')

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      setStep('time')
    }
  }

  const handleHourChange = (newHour: number) => {
    if (newHour >= 1 && newHour <= 12) {
      setHour(newHour)
    }
  }

  const handleMinuteChange = (newMinute: number) => {
    if (newMinute >= 0 && newMinute < 60) {
      setMinute(newMinute)
    }
  }

  const handlePeriodChange = (newPeriod: 'AM' | 'PM') => {
    setPeriod(newPeriod)
  }

  const handleConfirmTime = () => {
    if (selectedDate) {
      const newDate = new Date(selectedDate)
      let hours24 = hour
      if (period === 'PM' && hour !== 12) {
        hours24 = hour + 12
      } else if (period === 'AM' && hour === 12) {
        hours24 = 0
      }
      newDate.setHours(hours24, minute, 0, 0)
      onChange?.(newDate)
      setOpen(false)
      setStep('date')
    }
  }

  const handleBackToDate = () => {
    setStep('date')
  }

  const convert24To12 = (hours24: number) => {
    if (hours24 === 0) return { hour: 12, period: 'AM' as const }
    if (hours24 < 12) return { hour: hours24, period: 'AM' as const }
    if (hours24 === 12) return { hour: 12, period: 'PM' as const }
    return { hour: hours24 - 12, period: 'PM' as const }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal rounded-full",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value 
            ? `${format(value, "PPP", { locale: es })} - ${value.getHours().toString().padStart(2, '0')}:${value.getMinutes().toString().padStart(2, '0')}` 
            : placeholder
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {step === 'date' ? (
          // PASO 1: Seleccionar Fecha
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-3 text-slate-700">Selecciona una fecha</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={disabled}
              initialFocus
            />
          </div>
        ) : (
          // PASO 2: Seleccionar Hora
          <div className="w-80 space-y-4 p-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackToDate}
                className="p-1 hover:bg-slate-100 rounded-md transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h3 className="text-sm font-semibold text-slate-700">Selecciona la hora</h3>
            </div>

            <div className="flex items-center justify-center gap-1 py-8">
              {/* Selector de Hora */}
              <div className="flex flex-col items-center gap-2">
                <label className="text-xs font-medium text-slate-500">Hora</label>
                <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => handleHourChange(hour === 1 ? 12 : hour - 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded transition-colors"
                  >
                    ▲
                  </button>
                </div>
                <div className="text-3xl font-bold text-slate-900 w-16 text-center">
                  {hour.toString().padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => handleHourChange(hour === 12 ? 1 : hour + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded transition-colors"
                  >
                    ▼
                  </button>
                </div>
              </div>

              <div className="text-3xl font-bold text-slate-300 mx-2">:</div>

              {/* Selector de Minutos */}
              <div className="flex flex-col items-center gap-2">
                <label className="text-xs font-medium text-slate-500">Minutos</label>
                <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => handleMinuteChange(minute === 0 ? 55 : minute - 5)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded transition-colors text-sm"
                  >
                    ▲
                  </button>
                </div>
                <div className="text-3xl font-bold text-slate-900 w-16 text-center">
                  {minute.toString().padStart(2, '0')}
                </div>
                <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => handleMinuteChange(minute === 55 ? 0 : minute + 5)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 rounded transition-colors text-sm"
                  >
                    ▼
                  </button>
                </div>
              </div>

              {/* Selector de Período (AM/PM) */}
              <div className="flex flex-col items-center gap-2 ml-2">
                <label className="text-xs font-medium text-slate-500">Período</label>
                <button
                  onClick={() => handlePeriodChange(period === 'AM' ? 'PM' : 'AM')}
                  className={cn(
                    "w-14 h-12 rounded-lg font-bold text-lg transition-colors",
                    period === 'AM'
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  )}
                >
                  {period}
                </button>
                <button
                  onClick={() => handlePeriodChange(period === 'PM' ? 'AM' : 'PM')}
                  className={cn(
                    "w-14 h-12 rounded-lg font-bold text-lg transition-colors",
                    period === 'PM'
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  )}
                >
                  {period === 'AM' ? 'PM' : 'AM'}
                </button>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                onClick={handleBackToDate}
                className="flex-1"
              >
                Atrás
              </Button>
              <Button
                onClick={handleConfirmTime}
                className="flex-1"
              >
                Confirmar
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
