'use client';

import { useState } from 'react';
import {
    Scale,
    PiggyBank,
    Briefcase,
    Boxes,
    Factory,
    Gem,
    FileText,
    HandCoins,
    Users,
    BarChart,
    Banknote,
    Building,
    CheckCircle,
    X
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ModuleDetail {
    name: string;
    icon: React.ReactNode;
    features: string[];
    description?: string;
}

const modulesData: ModuleDetail[] = [
    {
        name: 'Contabilidad',
        icon: <Scale className="w-6 h-6" />,
        features: [
            'Catálogo de Cuentas',
            'Centros de Costos',
            'Presupuesto',
            'Razones Financieras',
            'Anexos',
            'Estados Financieros'
        ]
    },
    {
        name: 'Activos Fijos',
        icon: <Building className="w-6 h-6" />,
        features: [
            'Clasificación de Activos',
            'Ubicaciones',
            'Toma Física',
            'Depreciación',
            'Movimiento de Activos (Salidas, Leasing, Mejoras, Otros)'
        ]
    },
    {
        name: 'Cuentas por Pagar',
        icon: <Banknote className="w-6 h-6" />,
        features: [
            'Proveedores',
            'Registro de Movimientos',
            'Pagos por Lote'
        ]
    },
    {
        name: 'Banco y Conciliación',
        icon: <PiggyBank className="w-6 h-6" />,
        features: [
            'Proceso de Pago a través de Cheques y Transferencias',
            'Traspaso de Fondos entre Cuentas',
            'Conciliaciones',
            'Depósitos – NC – ND'
        ]
    },
    {
        name: 'Caja Menuda',
        icon: <Briefcase className="w-6 h-6" />,
        features: [
            'Manejo de Anticipo',
            'Registro de Gastos',
            'Reembolso de la caja'
        ]
    },
    {
        name: 'Compras',
        icon: <HandCoins className="w-6 h-6" />,
        features: [
            'Código de Artículos de Proveedor',
            'Pre-Solicitudes',
            'Solicitudes',
            'Cotizaciones',
            'Adjudicación',
            'Registro de la compra con interfaz a inventario y Activos Fijos'
        ]
    },
    {
        name: 'Inventario',
        icon: <Boxes className="w-6 h-6" />,
        features: [
            'Tráfico: Liquidación de las compras con su proceso de packing',
            'Traslados',
            'Consumo Interno',
            'Toma Física',
            'Devoluciones a proveedores',
            'Ajustes de inventario',
            'Características de WMS',
            'Asignación de actividades a los bodegueros',
            'Sucursales – Bodegas - Ubicaciones'
        ]
    },
    {
        name: 'Manufactura',
        icon: <Factory className="w-6 h-6" />,
        features: [
            'Definición de Procesos',
            'Formulación',
            'Solicitudes de producción',
            'Planificación',
            'Manejo de órdenes'
        ]
    },
    {
        name: 'Control de Calidad',
        icon: <Gem className="w-6 h-6" />,
        features: [
            'Definición de muestro',
            'Registro de muestro del proceso productivo',
            'Gráficos de Control'
        ]
    },
    {
        name: 'Facturación Electrónica',
        icon: <FileText className="w-6 h-6" />,
        features: [
            'Interfaz con los PAC',
            'Definición de Variables',
            'Configuración',
            'Consultas'
        ]
    },
    {
        name: 'Facturación',
        icon: <FileText className="w-6 h-6" />,
        features: [
            'Vendedores',
            'Cajas',
            'Precios',
            'Promociones',
            'Formas de Pago',
            'Cotizaciones',
            'Pedidos',
            'Pre-facturas',
            'Facturas',
            'Devoluciones'
        ]
    },
    {
        name: 'Cuentas por Cobrar - Caja',
        icon: <HandCoins className="w-6 h-6" />,
        features: [
            'Clientes',
            'Registro de Movimientos NC – ND - Recibos',
            'Aplicación de Saldos a favor',
            'Apertura de Caja',
            'Cierre de Caja'
        ]
    },
    {
        name: 'Planilla',
        icon: <Users className="w-6 h-6" />,
        features: [
            'Configuración',
            'Manejo de Cartas y Formularios',
            'Planilla Regular',
            'Planilla Especial',
            'XIII',
            'Vacaciones',
            'Liquidaciones',
            'Preelaborada',
            'Anexo 03',
            'Fondo de Cesantía'
        ]
    },
    {
        name: 'Reportes y Dashboards',
        icon: <BarChart className="w-6 h-6" />,
        features: [
            'Categorización',
            'Creación y Edición de reporte',
            'Permisos',
            'Consulta de Reportes'
        ]
    },
    {
        name: 'Carga de datos',
        icon: <FileText className="w-6 h-6" />,
        features: [
            'Carga de Parámetros',
            'Carga de Saldo',
            'Traspaso de datos entre compañía'
        ]
    },
    {
        name: 'Globales',
        icon: <Building className="w-6 h-6" />,
        features: [
            'Impuestos',
            'Bancos',
            'Tipos',
            'Grupos',
            'Razones',
            'Otros'
        ]
    },
    {
        name: 'Portal',
        icon: <Briefcase className="w-6 h-6" />,
        features: [
            'Pedidos',
            'Estados de Cuentas',
            'Estadísticas de compra'
        ]
    },
    {
        name: 'Mensajería',
        icon: <FileText className="w-6 h-6" />,
        features: [
            'Configuración de grupos',
            'Bitácora',
            'Manejo de Chat Interno de la organización'
        ]
    },
    {
        name: 'Actividades',
        icon: <CheckCircle className="w-6 h-6" />,
        features: [
            'Creación y Asignación de tareas'
        ]
    },
    {
        name: 'Sala de Mando',
        icon: <BarChart className="w-6 h-6" />,
        features: [
            'Consultas de diferentes auxiliares en una sola pantalla'
        ]
    },
];

export default function IntegratedModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleDetail | null>(null);

    return (
        <section id="modules" className="py-20 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Módulos Integrados para una Gestión 360°</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Una suite completa de herramientas para gestionar cada aspecto de su operación desde una única plataforma.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto text-left">
                    {modulesData.map((module) => (
                        <div
                            key={module.name}
                            onClick={() => module.features.length > 0 && setSelectedModule(module)}
                            className={`flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group ${module.features.length === 0 ? 'opacity-70 cursor-default hover:translate-y-0 hover:shadow-sm' : ''}`}
                        >
                            <div className="text-primary p-2 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors">
                                {module.icon}
                            </div>
                            <span className="font-medium text-foreground">{module.name}</span>
                        </div>
                    ))}
                </div>

                <Dialog open={!!selectedModule} onOpenChange={(open) => !open && setSelectedModule(null)}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    {selectedModule?.icon}
                                </div>
                                <DialogTitle className="text-2xl font-bold text-foreground">{selectedModule?.name}</DialogTitle>
                            </div>
                            <DialogDescription className="text-base">
                                Características y funcionalidades principales del módulo.
                            </DialogDescription>
                        </DialogHeader>

                        <ScrollArea className="max-h-[60vh] pr-4">
                            <ul className="space-y-3 mt-2">
                                {selectedModule?.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground/80 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
