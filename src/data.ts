import { CNHOption, FaqItem, LicenseCategory } from './types';

export const CNH_SERVICES: CNHOption[] = [
  {
    id: 'PRIMEIRA_CNH',
    title: 'Primeira Habilitação',
    description: 'Comece do zero com facilidade. Processo simplificado e otimizado.',
    badge: 'Mais Procurado',
    estimatedDays: '15-20 dias úteis'
  },
  {
    id: 'ADICAO_CATEGORIA',
    title: 'Adição de Categoria',
    description: 'Adicione moto (A), carro (B) ou categorias profissionais (C/D/E).',
    badge: 'Rápido',
    estimatedDays: '10-15 dias úteis'
  },
  {
    id: 'RENOVACAO',
    title: 'Renovação Eficiente',
    description: 'Sua CNH prestes a vencer ou vencida renovada sem filas.',
    badge: 'Sem Burocracia',
    estimatedDays: '3-5 dias úteis'
  },
  {
    id: 'REGULARIZACAO',
    title: 'CNH Suspensa ou Bloqueada',
    description: 'Recupere seu direito de dirigir de forma oficial e regularizada.',
    badge: 'Garantido',
    estimatedDays: '12-18 dias úteis'
  }
];

export const LICENSE_CATEGORIES: { id: LicenseCategory; label: string; desc: string }[] = [
  { id: 'A', label: 'Categoria A', desc: 'Motos' },
  { id: 'B', label: 'Categoria B', desc: 'Carros e utilitários leves' },
  { id: 'AB', label: 'Categoria A+B', desc: 'Carro e Moto — Habilitação completa' },
  { id: 'C', label: 'Categoria C', desc: 'Caminhões e veículos de carga' },
  { id: 'D', label: 'Categoria D', desc: 'Micro-ônibus, vans e ônibus' },
  { id: 'E', label: 'Categoria E', desc: 'Veículos com reboque articulado / carretas' }
];

export const SYSTEM_STEPS = [
  {
    number: '01',
    title: 'Triagem Online',
    desc: 'Selecione o serviço aqui no site e nos envie os dados iniciais do seu processo.'
  },
  {
    number: '02',
    title: 'Agendamento Prioritário',
    desc: 'Agendamos os seus exames médico e psicotécnico na clínica parceira mais próxima.'
  },
  {
    number: '03',
    title: 'Processamento DETRAN',
    desc: 'Seu processo é anexado diretamente no sistema oficial do DETRAN de forma garantida.'
  },
  {
    number: '04',
    title: 'Emissão da CNH Digital',
    desc: 'Pronto! Em poucos dias sua CNH Digital fica disponível no aplicativo oficial CDT.'
  }
];

export const FAQ_QUESTIONS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como o processo é realizado de forma tão rápida?',
    answer: 'Trabalhamos em parceria com despachantes credenciados e clínicas homologadas de trânsito, o que agiliza a liberação das taxas, triagem de documentos e o processamento sistêmico junto ao banco de dados do DETRAN.'
  },
  {
    id: 'faq-2',
    question: 'Quais as garantias que tenho ao realizar o processo?',
    answer: 'Todo o processo é registrado diretamente no seu CPF no sistema nacional de trânsito. Você poderá acompanhar cada passo diretamente através do aplicativo oficial do Governo Federal (Carteira Digital de Trânsito) ou pelo site oficial do DETRAN do seu estado.'
  },
  {
    id: 'faq-3',
    question: 'Eu preciso realizar as provas e exames presenciais?',
    answer: 'Sim! Os exames clínicos (médico e psicotécnico) são itens de segurança nacional obrigatórios por lei e devem ser realizados em clínicas homologadas que nós agendamos para sua máxima conveniência.'
  },
  {
    id: 'faq-4',
    question: 'O pagamento é seguro? Como funciona?',
    answer: 'Nossa equipe detalha todas as taxas oficiais de emissão e nossos honorários. O acerto de valores é transparente, acordado previamente e você recebe todas as garantias legais e de satisfação.'
  },
  {
    id: 'faq-5',
    question: 'E se eu tiver minha CNH suspensa ou com pontos?',
    answer: 'Oferecemos o serviço de regularização facilitada (Defesa e Recurso). Através do acompanhamento oficial, conseguimos reverter e regularizar o seu prontuário direto no sistema do Detran para que você possa voltar a dirigir legalmente.'
  }
];

export const BRAZIL_STATES = [
  { code: 'SP', name: 'São Paulo' },
  { code: 'RJ', name: 'Rio de Janeiro' },
  { code: 'MG', name: 'Minas Gerais' },
  { code: 'PR', name: 'Paraná' },
  { code: 'RS', name: 'Rio Grande do Sul' },
  { code: 'SC', name: 'Santa Catarina' },
  { code: 'BA', name: 'Bahia' },
  { code: 'PE', name: 'Pernambuco' },
  { code: 'DF', name: 'Distrito Federal' },
  { code: 'GO', name: 'Goiás' },
  { code: 'CE', name: 'Ceará' },
  { code: 'ES', name: 'Espírito Santo' }
];

export const OUTHER_STATES = [
  ...BRAZIL_STATES,
  { code: 'AC', name: 'Acre' },
  { code: 'AL', name: 'Alagoas' },
  { code: 'AM', name: 'Amazonas' },
  { code: 'AP', name: 'Amapá' },
  { code: 'MA', name: 'Maranhão' },
  { code: 'MS', name: 'Mato Grosso do Sul' },
  { code: 'MT', name: 'Mato Grosso' },
  { code: 'PA', name: 'Pará' },
  { code: 'PB', name: 'Paraíba' },
  { code: 'PI', name: 'Piauí' },
  { code: 'RN', name: 'Rio Grande do Norte' },
  { code: 'RO', name: 'Rondônia' },
  { code: 'RR', name: 'Roraima' },
  { code: 'SE', name: 'Sergipe' },
  { code: 'TO', name: 'Tocantins' }
].sort((a, b) => a.name.localeCompare(b.name));
