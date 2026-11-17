import {
  Fingerprint,
  ScanFace,
  CreditCard,
  KeyRound,
  ShieldCheck,
  CarFront,
  Lock,
  Video,
  Wrench,
  Settings,
  PackageCheck,
  Building2,
  Building,
  Briefcase,
  Factory,
  HeartPulse,
  GraduationCap,
  Dumbbell,
  Home,
  Radio,
  ParkingSquare,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  // Solutions
  'biometria': Fingerprint,
  'reconhecimento-facial': ScanFace,
  'cartao-e-tag-rfid': CreditCard,
  'senha-e-teclado': KeyRound,
  'catracas': ShieldCheck,
  'cancelas-e-acesso-veicular': CarFront,
  'fechaduras-eletromagneticas': Lock,
  'interfone-e-video-porteiro': Video,
  'fechadura-eletronica': KeyRound,
  'tag-veicular': Radio,

  // Services
  'instalacao-e-projeto': Wrench,
  'manutencao': Settings,
  'manutencao-de-catracas': Settings,
  'locacao': PackageCheck,

  // Segments
  'condominios-residenciais': Building2,
  'condominios-comerciais': Building,
  'empresas-e-escritorios': Briefcase,
  'industrias': Factory,
  'clinicas-e-hospitais': HeartPulse,
  'escolas-e-universidades': GraduationCap,
  'academias': Dumbbell,
  'estacionamentos': ParkingSquare,
  'residencias': Home,
};

export function getCatalogIcon(slug: string): LucideIcon {
  return ICON_MAP[slug] || ShieldCheck;
}
