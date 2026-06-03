/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  ChevronDown, 
  MapPin, 
  User, 
  Sliders, 
  BookmarkCheck,
  Send,
  Sparkles,
  HelpCircle,
  FileText,
  BadgeAlert
} from 'lucide-react';

import { CNH_SERVICES, LICENSE_CATEGORIES, SYSTEM_STEPS, FAQ_QUESTIONS, OUTHER_STATES } from './data';
import { CNHServiceType, LicenseCategory } from './types';

export default function App() {
  const adminPhone = '5566996690633';

  // Form selections and lead state
  const [name, setName] = useState<string>('');
  const [selectedService, setSelectedService] = useState<CNHServiceType>('PRIMEIRA_CNH');
  const [selectedCategory, setSelectedCategory] = useState<LicenseCategory>('B');
  const [selectedState, setSelectedState] = useState<string>('SP');


  // Success indicator for testing redirect
  const [hasRedirected, setHasRedirected] = useState<boolean>(false);

  // Build the pre-filled WhatsApp message URL
  const buildWhatsAppUrl = () => {
    const serviceDetail = CNH_SERVICES.find(s => s.id === selectedService);
    const categoryDetail = LICENSE_CATEGORIES.find(c => c.id === selectedCategory);
    const stateName = OUTHER_STATES.find(s => s.code === selectedState)?.name || selectedState;
    
    let formattedMessage = '';
    if (name.trim()) {
      formattedMessage += `Olá! Meu nome é *${name.trim()}*.\n\n`;
    } else {
      formattedMessage += `Olá! `;
    }
    
    formattedMessage += `Gostaria de iniciar o processo para emitir a minha CNH com recebimento acelerado de forma totalmente garantida:\n\n`;
    formattedMessage += `📌 *Serviço:* ${serviceDetail?.title}\n`;
    
    if (selectedService !== 'RENOVACAO' && selectedService !== 'REGULARIZACAO') {
      formattedMessage += `🚘 *Categoria:* ${categoryDetail?.label} (${categoryDetail?.desc})\n`;
    }
    
    formattedMessage += `📍 *Estado (DETRAN):* ${stateName} (${selectedState})\n\n`;
    formattedMessage += `Fiquei sabendo que o procedimento é garantido e tudo é registrado diretamente dentro do DETRAN. Como podemos prosseguir com o pagamento e documentação?`;
    
    const encodedText = encodeURIComponent(formattedMessage);
    return `https://api.whatsapp.com/send?phone=${adminPhone}&text=${encodedText}`;
  };

  const handleWhatsAppAction = () => {
    const url = buildWhatsAppUrl();
    setHasRedirected(true);
    // Open in a new tab
    window.open(url, '_blank', 'noreferrer,noopener');
    setTimeout(() => {
      setHasRedirected(false);
    }, 4000);
  };

  // Dynamic preview text for state rendering inside applet
  const serviceDetail = CNH_SERVICES.find(s => s.id === selectedService);
  const categoryDetail = LICENSE_CATEGORIES.find(c => c.id === selectedCategory);
  const stateLabel = OUTHER_STATES.find(s => s.code === selectedState)?.name || selectedState;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col justify-between">
      
      {/* Top Admin / Status Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 flex justify-center items-center border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span>Landing Page Ativa • Detran Integrado {selectedState}</span>
        </div>
      </div>

      {/* Main Elegant Header */}
      <header className="bg-white border-b border-slate-200/80 shadow-sm sticky top-0 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#002f5c] text-[#ffc107] p-2 rounded-lg shadow-md flex items-center justify-center font-bold text-lg font-display tracking-tight">
              A
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 block leading-tight">
                CNH RÁPIDA
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-amber-600 block">
                ASSESSORIA EXECUTIVA
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              CONTRAN &amp; DETRAN 100% Legitimado
            </span>
            <span className="text-slate-300">|</span>
            <div className="text-right">
              <span className="text-xs text-slate-400 block font-normal">Suporte prioritário pelo</span>
              <span className="font-semibold text-slate-800 text-xs flex items-center gap-1 justify-end font-mono">
                <Phone className="w-3 h-3 text-emerald-500 fill-emerald-500" /> WhatsApp Ativo
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-0">

        {/* Hero & Interactive Section */}
        <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-slate-50 py-10 md:py-16 overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Copy Side (7 Columns in Large) */}
              <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6">
                
                {/* Micro badge */}
                <div className="inline-flex items-center gap-1.5 self-start bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full mb-6 border border-amber-200">
                  <Sparkles className="w-3 h-3 text-amber-700 animate-spin-slow" />
                  <span>CARTA ADQUIRIDA SEM BUROCRACIA</span>
                </div>

                {/* Direct High Impact Heading */}
                <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-5xl tracking-tight text-slate-950 leading-[1.15] mb-5">
                  Tire sua CNH <span className="text-[#002f5c] border-b-4 border-amber-400">sem mais delongas</span> e tudo dentro do DETRAN!
                </h1>

                {/* Clear, direct, high-trust text */}
                <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                  Esqueça a lentidão, processos travados e filas quilométricas. Criamos um sistema de assessoria executiva de trânsito para entregar sua habilitação oficial com rapidez absoluta.
                </p>

                {/* Three Core Statements requested by the user */}
                <div className="space-y-4 mb-8">
                  {/* Item 1: Tudo dentro do detran */}
                  <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-sky-50 text-sky-800 p-2.5 rounded-lg shrink-0 h-11 w-11 flex items-center justify-center font-bold">
                      🏢
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">100% dentro das normas do DETRAN</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Procedimento com clínicas médicas credenciadas, cadastros sistêmicos e exames totalmente homologados pelo governo nacional.</p>
                    </div>
                  </div>

                  {/* Item 2: Recebimento rápido */}
                  <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg shrink-0 h-11 w-11 flex items-center justify-center font-bold">
                      ⚡
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">Recebimento extremamente rápido</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Otimizamos o andamento dos registros no banco de dados oficial. Emissão acelerada direto no seu app Carteira Digital de Trânsito.</p>
                    </div>
                  </div>

                  {/* Item 3: Procedimento garantido */}
                  <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-amber-50 text-amber-800 p-2.5 rounded-lg shrink-0 h-11 w-11 flex items-center justify-center font-bold">
                      🛡️
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">Procedimento garantido de ponta a ponta</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Suporte por escrito, assessoria jurídica de trânsito, sem taxas escondidas e com foco absoluto na entrega da sua habilitação.</p>
                    </div>
                  </div>
                </div>

                {/* Dynamic Counter of active submissions */}
                <div className="flex items-center gap-3 pt-2 text-slate-500 text-xs">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 bg-slate-300 rounded-full border-2 border-white flex items-center justify-center font-bold text-[9px] text-slate-700">R</div>
                    <div className="w-7 h-7 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center font-bold text-[9px] text-slate-900">M</div>
                    <div className="w-7 h-7 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center font-bold text-[9px] text-white">G</div>
                  </div>
                  <span>Mais de <strong>1.480 motoristas habilitados</strong> de forma ágil este ano.</span>
                </div>
              </div>


              {/* Interactive Form Side (5 Columns in Large) */}
              <div className="lg:col-span-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#002f5c]"></div>
                
                <div className="mb-5">
                  <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-1.5">
                    <Sliders className="w-5 h-5 text-[#002f5c]" />
                    Simule seu Pedido Abaixo
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Preencha os campos para personalizar seu contato com informações exatas no nosso WhatsApp.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Seu Nome Completo (Opcional):
                    </label>
                    <input 
                      type="text"
                      id="input-lead-name"
                      placeholder="Ex: Carlos Silva de Souza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#002f5c] focus:ring-1 focus:ring-[#002f5c] transition-all"
                    />
                  </div>

                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#002f5c]" />
                      Serviço Desejado:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {CNH_SERVICES.map((serv) => (
                        <button
                          key={serv.id}
                          id={`btn-service-${serv.id}`}
                          onClick={() => setSelectedService(serv.id)}
                          className={`p-2.5 text-left rounded-lg border text-xs transition-all flex flex-col justify-between cursor-pointer group ${
                            selectedService === serv.id 
                              ? 'border-[#002f5c] bg-slate-900 text-white shadow-sm' 
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-bold flex items-center justify-between w-full">
                            {serv.title.split(' ')[0]} {serv.title.split(' ')[1] || ''}
                            {selectedService === serv.id && (
                              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                            )}
                          </span>
                          <span className={`text-[9px] mt-1 hidden xs:block ${selectedService === serv.id ? 'text-slate-300' : 'text-slate-400'}`}>
                            Prazos: {serv.estimatedDays}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* State / DETRAN Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      Estado Emissor (DETRAN de Origem):
                    </label>
                    <select
                      id="select-lead-state"
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#002f5c] transition-all"
                    >
                      {OUTHER_STATES.map((st) => (
                        <option key={st.code} value={st.code}>
                          DETRAN {st.name} ({st.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Render LicenseCategory selection if service needs category */}
                  {selectedService !== 'RENOVACAO' && selectedService !== 'REGULARIZACAO' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-slate-100 pt-3.5"
                    >
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Categoria Pretendida:
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {LICENSE_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            id={`btn-cat-${cat.id}`}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`p-1.5 text-center rounded-md border text-xs font-mono font-bold transition-all cursor-pointer ${
                              selectedCategory === cat.id
                                ? 'bg-amber-100 border-amber-500 text-amber-950 font-extrabold shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                            title={cat.desc}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1.5 font-sans italic">
                        Selecionado: {categoryDetail?.desc}
                      </p>
                    </motion.div>
                  )}

                  {/* Interactive Pre-rendered Message Preview - HIGH ENGAGEMENT GIMMICK */}
                  <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 mt-4 relative">
                    <span className="absolute -top-2 left-4 px-2 py-0.5 bg-emerald-600 text-[9px] text-white rounded font-bold uppercase tracking-wider">
                      Prévia do Envio
                    </span>
                    <div className="text-slate-600 text-xs leading-relaxed font-mono mt-1 pt-1 break-words">
                      <span className="text-slate-400 text-[10px] block mb-1">💬 Sua mensagem personalizada no Whatsapp:</span>
                      <p className="bg-white/80 p-2 rounded border border-emerald-100/60 text-[10px]">
                        Olá! {name.trim() ? <>Meu nome é <strong>{name.trim()}</strong>. </> : ''}
                        Gostaria de iniciar o processo para emitir a minha CNH com recebimento acelerado... de forma garantida: 
                        📌 <strong>{serviceDetail?.title}</strong>
                        {selectedService !== 'RENOVACAO' && selectedService !== 'REGULARIZACAO' && (
                          <>&nbsp;🚘 <strong>{categoryDetail?.label}</strong></>
                        )}
                        &nbsp;📍 <strong>DETRAN {selectedState}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Primary CTA Button: "(WHATSAPP) CHAMAR AGORA!" */}
                  <div className="pt-2">
                    <button
                      id="btn-whatsapp-cta"
                      onClick={handleWhatsAppAction}
                      className="w-full relative py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] hover:shadow-emerald-600/30 cursor-pointer active:scale-95 group"
                    >
                      {/* Pulse Ring effect to grab eyes */}
                      <span className="absolute -left-1 -right-1 -top-1 -bottom-1 rounded-xl bg-emerald-400/20 animate-pulse-ring pointer-events-none"></span>
                      
                      <Phone className="w-5 h-5 fill-white" />
                      <span className="font-display tracking-tight text-sm md:text-base font-extrabold uppercase">
                        (WHATSAPP) CHAMAR AGORA!
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Fale conosco agora! Procedimento verificado. Preencha e clique para abrir no app seguro.
                    </p>
                  </div>

                  {/* Success notification overlay simulator without breaking the app flow */}
                  {hasRedirected && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-slate-900 text-emerald-400 text-xs p-3 rounded-lg text-center font-semibold mt-2 border border-slate-800 flex items-center justify-center gap-2"
                    >
                      <BookmarkCheck className="w-4 h-4 text-emerald-400 animate-bounce" />
                      Redirecionando com segurança para o WhatsApp...
                    </motion.div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Informative Step-by-Step section showing officialness of process */}
        <section className="bg-white py-12 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-[#002f5c] bg-blue-50 px-3 py-1 rounded-full">
                fluxo oficial de andamento
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-950 mt-3">
                Como funciona o seu procedimento acelerado?
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                O trâmite respeita rigorosamente o Código de Trânsito Brasileiro. Nós cuidamos da assessoria para acelerar a parte burocrática junto ao órgão público.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {SYSTEM_STEPS.map((step, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-5 border border-slate-200/60 relative hover:shadow-md transition-shadow">
                  <span className="absolute -top-4 left-5 bg-[#002f5c] text-[#ffc107] font-mono font-bold text-sm px-2.5 py-1 rounded-md shadow-sm">
                    {step.number}
                  </span>
                  <h4 className="font-bold text-slate-950 text-sm md:text-base mt-2 mb-1.5">{step.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick legal/government warning to guarantee compliance */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-center sm:text-left">
                <span className="font-bold text-xs text-slate-900 block">Aviso de Conformidade Legal</span>
                <p className="text-[11px] text-slate-500 mt-1 max-w-4xl">
                  Diferente de falsificações irregulares, nossa assessoria executiva garante segurança e legitimidade absoluta. Exames de saúde física, testes psicotécnicos de aptidão e cadastramento biométrico são exigências obrigatórias e legais conduzidas por clínicas homologadas correspondentes no seu estado. Sua CNH é expedida em formato físico tradicional e disponibilizada oficialmente no aplicativo governamental <strong>Carteira Digital de Trânsito (CDT)</strong> sob seu CPF.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Cards Section */}
        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="grid grid-cols- md:grid-cols-3 gap-6">
              {/* Card 1: Rapidez */}
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 mb-4 text-lg">
                  ⚡
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">
                  Recebimento Rápido Garantido
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sem delongas. O sistema de priorização processual de documentação reduz significativamente a burocracia governamental, pulando etapas lentas das autoescolas convencionais.
                </p>
              </div>

              {/* Card 2: Dentro do Detran */}
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 text-sky-600 mb-4 text-lg">
                  🏢
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">
                  Tudo Registrado no DETRAN
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Prontuários inseridos diretamente na base de dados do Renach (Registro Nacional de Condutores Habilitados), possibilitando consulta oficial por aplicativo a qualquer momento.
                </p>
              </div>

              {/* Card 3: Garantido ou Reembolsado */}
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50 text-amber-600 mb-4 text-lg">
                  🛡️
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2">
                  Procedimento Garantido
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Oferecemos assessores jurídicos especializados e despachantes qualificados. O andamento do processo está garantido sob termo de prestação de serviço individual.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* Mini Contact CTA Ribbon */}
        <section className="bg-[#002f5c] text-white py-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-20 -translate-y-10">
            <span className="text-[120px] font-extrabold uppercase select-none tracking-tighter">DETRAN</span>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="font-display font-bold text-xl md:text-2xl text-yellow-400 leading-tight">
              Tudo pronto para obter o seu direito de dirigir de forma rápida?
            </h3>
            <p className="text-slate-200 text-xs md:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
              Diga adeus à burocracia improdutiva. Processo assertivo, garantido e oficial. Toque no botão principal para iniciar agora mesmo!
            </p>
            
            <div className="mt-6 flex flex-col xs:flex-row gap-3 justify-center items-center">
              <button
                onClick={handleWhatsAppAction}
                className="w-full xs:w-auto bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/20 transition-all cursor-pointer hover:scale-105"
              >
                <Phone className="w-4 h-4 fill-white" />
                (WHATSAPP) SOLICITAR AGORA!
              </button>
              <a 
                href="#input-lead-name"
                className="text-xs text-amber-200 hover:text-white underline font-semibold cursor-pointer py-2 px-3 hover:bg-white/5 rounded transition-all"
              >
                Voltar e Simular Valores do Formulário
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Trustful footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-800">
            
            <div className="flex items-center gap-2.5">
              <div className="bg-slate-800 text-amber-400 p-1.5 rounded text-sm font-bold">
                CR
              </div>
              <div>
                <span className="font-display font-bold text-slate-200 text-sm tracking-tight block">
                  CNH RÁPIDA
                </span>
                <span className="text-[9px] text-slate-500 tracking-wider">
                  Assessoria de Trânsito Homologada
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-[11px]">
              <span className="bg-slate-800 hover:text-slate-200 px-3 py-1 rounded transition-colors select-none text-[10px]">
                CONTRAN Resolução 147
              </span>
              <span className="bg-slate-800 hover:text-slate-200 px-3 py-1 rounded transition-colors select-none text-[10px]">
                LGPD Segura • Seus dados protegidos
              </span>
              <span className="bg-slate-800 hover:text-slate-200 px-3 py-1 rounded transition-colors select-none text-[10px]">
                Assessoria Nacional
              </span>
            </div>

          </div>

          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} CNH Rápida Assessoria Executiva de Trânsito e Despachantes Credenciados. Todos os direitos reservados.
            </p>
            <p className="text-center md:text-right max-w-sm">
              Isenção de responsabilidade: Este portal é um serviço de assessoria privada facultativo destinado a consultoria burocrática rápida. Nós não substituímos as obrigações finais de exames do órgão de trânsito público estadual regulador.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp para Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-md border-t border-slate-200/80 z-50 md:hidden flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col pl-2">
          <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Atendimento Rápido</span>
          <span className="text-xs font-bold text-slate-800">Tire suas dúvidas</span>
        </div>
        <button
          onClick={handleWhatsAppAction}
          className="flex-1 ml-4 py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all text-xs uppercase tracking-wider"
        >
          <Phone className="w-4 h-4 fill-white" />
          Chame Agora
        </button>
      </div>

    </div>
  );
}
