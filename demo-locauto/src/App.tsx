import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dati per i grafici
  const performanceData = [
    {
      name: 'Tasso di Conversione',
      'Canali Tradizionali': 100,
      'E23 Travel Media': 127,
    },
    {
      name: 'Valore Medio Prenotazione',
      'Canali Tradizionali': 100,
      'E23 Travel Media': 118,
    },
  ];

  const coverageData = [
    { phase: "Connetti", point: "Email di conferma prenotazione", coverage: 88.3 },
    { phase: "Connetti", point: "Aree riservate compagnie aeree", coverage: 92.6 },
    { phase: "Connetti", point: "Carte d'imbarco digitali", coverage: 64.1 },
    { phase: "Convinci", point: "Pubblicità su schienali/riviste", coverage: 99.7 },
    { phase: "Convinci", point: "Carte d'imbarco con incentivi", coverage: 92.6 },
    { phase: "Converti", point: "Pubblicità digitale schienali", coverage: 99.7 },
    { phase: "Converti", point: "App mobili (notifiche push)", coverage: 79.1 },
  ];

  const journeyStages = [
    { name: 'Pianificazione', traditional: 80, e23: 20 },
    { name: 'Post-Prenotazione Volo', traditional: 25, e23: 95 },
    { name: 'Durante il Volo', traditional: 10, e23: 90 },
    { name: 'Atterraggio', traditional: 30, e23: 85 },
    { name: 'Post-Viaggio', traditional: 70, e23: 30 },
  ];

  const getPhaseColor = (phase: unknown) => {
    switch(phase) {
      case 'Connetti': return '#4299e1';
      case 'Convinci': return '#48bb78';
      case 'Converti': return '#ed8936';
      default: return '#a0aec0';
    }
  };

  // Componenti per le diverse sezioni
  const HomeSection = () => (
    <div className="py-4 sm:py-6 lg:py-8">
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Strategia E23 per l'espansione di Locauto nel mercato europeo</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
          Sfrutta una finestra di opportunità strategica per intercettare viaggiatori nel momento decisivo post-prenotazione volo
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-600">+27%</h3>
          <p className="text-sm sm:text-base text-gray-700">Incremento del tasso di conversione rispetto ai canali tradizionali</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-green-600">+18%</h3>
          <p className="text-sm sm:text-base text-gray-700">Aumento del valore medio delle prenotazioni</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-orange-600">0%</h3>
          <p className="text-sm sm:text-base text-gray-700">Cannibalizzazione dei canali esistenti</p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Approccio Sequenziale in 3 Fasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex-1 p-3 sm:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-700 mb-2">1. Connetti</h3>
            <p className="text-sm sm:text-base text-gray-700">Engagement post-prenotazione volo quando il viaggiatore è altamente ricettivo</p>
          </div>
          
          <div className="flex-1 p-3 sm:p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-700 mb-2">2. Convinci</h3>
            <p className="text-sm sm:text-base text-gray-700">Engagement durante il volo in un ambiente con ridotta concorrenza informativa</p>
          </div>
          
          <div className="flex-1 p-3 sm:p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-700 mb-2">3. Converti</h3>
            <p className="text-sm sm:text-base text-gray-700">Azione immediata all'arrivo quando convenienza e immediatezza sono fattori critici</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Performance Comparativa</h2>
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis 
                domain={[0, 150]}
                label={{ 
                  value: 'Indice (Base = 100)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fontSize: 12 }
                }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip formatter={(value) => [`${value}%`, '']} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="Canali Tradizionali" fill="#8884d8" name="Canali Tradizionali (base = 100)" />
              <Bar dataKey="E23 Travel Media" fill="#82ca9d" name="E23 Travel Media" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const OpportunitySection = () => (
    <div className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Opportunità di Mercato</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Analisi del contesto competitivo</h2>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-700">
          L'attuale panorama del noleggio auto in Europa è caratterizzato da un'elevata competitività. Locauto ha stabilito una presenza significativa attraverso partnership strategiche con le principali OTA (Online Travel Agencies), motori di metasearch e broker specializzati.
        </p>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-700">
          Questi canali tradizionali hanno permesso all'azienda di raggiungere clienti durante la fase di pianificazione e confronto delle opzioni di viaggio.
        </p>
      </div>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Identificazione della lacuna strategica</h2>
        <p className="mb-3 sm:mb-6 text-sm sm:text-base text-gray-700">
          La nostra analisi ha identificato un'opportunità significativa nel ciclo decisionale del cliente: il momento immediatamente successivo alla prenotazione del volo rappresenta una finestra cruciale attualmente non presidiata.
        </p>
        <p className="mb-4 sm:mb-8 text-sm sm:text-base text-gray-700">
          In questa fase, i viaggiatori sono particolarmente ricettivi ai servizi complementari, come il noleggio auto, ma i canali di marketing tradizionali non riescono ad intercettarli efficacemente.
        </p>
        
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Copertura dei canali per fase del customer journey</h3>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={journeyStages}
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis 
                label={{ 
                  value: 'Copertura (%)', 
                  angle: -90, 
                  position: 'insideLeft', 
                  style: { fontSize: 12 } 
                }} 
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="traditional" stroke="#8884d8" name="Canali Tradizionali" />
              <Line type="monotone" dataKey="e23" stroke="#82ca9d" name="E23 Travel Media" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 text-center">
          Il grafico mostra come E23 eccelle nelle fasi centrali del journey, complementando i canali tradizionali
        </p>
      </div>
    </div>
  );

  const MethodologySection = () => (
    <div className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Metodologia E23</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Approccio sequenziale basato sui punti di contatto critici</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          La strategia E23 si sviluppa attraverso tre fasi distinte, ciascuna progettata per coinvolgere il cliente in momenti decisivi del percorso di viaggio, garantendo zero sovrapposizioni con i canali di marketing esistenti.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="p-3 sm:p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2">1. Fase "Connetti"</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">Engagement post-prenotazione volo</p>
            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
              <li>Email di conferma prenotazione</li>
              <li>Aree riservate compagnie aeree</li>
              <li>Carte d'imbarco digitali</li>
            </ul>
          </div>
          
          <div className="p-3 sm:p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">2. Fase "Convinci"</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">Engagement durante il volo</p>
            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
              <li>Sistemi intrattenimento in volo</li>
              <li>Pubblicità su schienali e riviste</li>
              <li>Carte d'imbarco con incentivi</li>
            </ul>
          </div>
          
          <div className="p-3 sm:p-4 bg-orange-50 rounded-lg">
            <h3 className="font-bold text-orange-700 mb-2">3. Fase "Converti"</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">Azione immediata all'arrivo</p>
            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
              <li>Pubblicità digitale su schienali</li>
              <li>App mobili con notifiche push</li>
              <li>Display OOH in aeroporto</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">Tassi di Copertura per Punti di Contatto</h2>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[320px] w-full h-[400px] sm:h-[450px] md:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={coverageData}
                layout="vertical"
                margin={{
                  top: 20,
                  right: 30,
                  left: 100,
                  bottom: 30,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  domain={[0, 100]} 
                  label={{ 
                    value: 'Tasso di Copertura (%)', 
                    position: 'insideBottom', 
                    offset: -15,
                    style: { fontSize: 12 } 
                  }}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  type="category" 
                  dataKey="point" 
                  width={90} 
                  tick={{ fontSize: 11 }}
                  tickFormatter={(value) => {
                    // Truncate long labels on smaller screens
                    return window.innerWidth < 640 && value.length > 15 
                      ? value.substring(0, 15) + '...' 
                      : value;
                  }}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Copertura']} />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Bar dataKey="coverage" name="Tasso di Copertura">
                  {coverageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getPhaseColor(entry.phase)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  const AdvantagesSection = () => (
    <div className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Vantaggi Competitivi</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Differenziazione strategica</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          L'approccio E23 non compete con i canali esistenti ma li completa, creando un ecosistema di marketing sinergico che genera un flusso incrementale di clienti premium.
        </p>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border-b border-gray-200 shadow-sm rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Parametro</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Canali tradizionali</th>
                    <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">E23 Travel Media Planning</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Fase di coinvolgimento</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Durante ricerca e confronto</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Post-acquisto del volo</td>
                  </tr>
                  <tr>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Ambiente competitivo</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Alta competizione di brand</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Bassa/nulla competizione diretta</td>
                  </tr>
                  <tr>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Target principale</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Viaggiatori in fase esplorativa</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Viaggiatori con itinerario definito</td>
                  </tr>
                  <tr>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Valore medio prenotazione</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Base di riferimento</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 font-bold text-green-600">+18% rispetto ai canali tradizionali</td>
                  </tr>
                  <tr>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Tasso di conversione</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500">Base di riferimento</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 font-bold text-green-600">+27% rispetto ai canali tradizionali</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-2 md:hidden">
            <span>← Scorri lateralmente per vedere tutti i dati →</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Complementarietà e sinergia con canali esistenti</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          L'analisi dimostra che l'approccio E23 non compete con i canali esistenti ma li completa, creando un ecosistema di marketing sinergico:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Distinct Customer Timing</h3>
            <p className="text-xs sm:text-sm text-gray-700">Targeting esclusivo in una fase del viaggio non presidiata dai canali attuali</p>
          </div>
          
          <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Incremental Premium Audience</h3>
            <p className="text-xs sm:text-sm text-gray-700">Acquisizione specifica di viaggiatori premium che prenotano direttamente tramite compagnie aeree</p>
          </div>
          
          <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Puro incremento delle entrate</h3>
            <p className="text-xs sm:text-sm text-gray-700">Generazione di nuovi clienti senza cannibalizzazione dei flussi esistenti</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ROISection = () => (
    <div className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">ROI e Business Impact</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Indicatori di performance chiave</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          I dati raccolti durante lo studio evidenziano un significativo potenziale di ritorno sull'investimento:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="p-4 sm:p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">+27%</h3>
            <p className="text-sm sm:text-base text-gray-700">Tasso di conversione</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-green-50 rounded-lg text-center">
            <h3 className="text-2xl sm:text-4xl font-bold text-green-600 mb-2">+18%</h3>
            <p className="text-sm sm:text-base text-gray-700">Valore medio prenotazione</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-purple-50 rounded-lg text-center">
            <h3 className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">Premium</h3>
            <p className="text-sm sm:text-base text-gray-700">Posizionamento brand</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Implicazioni strategiche per Locauto</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          L'implementazione dell'approccio E23 offre a Locauto l'opportunità di:
        </p>
        
        <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          <li>Acquisire prenotazioni premium incrementali</li>
          <li>Rafforzare il posizionamento sul mercato come provider di qualità</li>
          <li>Creare un nuovo canale di crescita non conflittuale con le strategie esistenti</li>
        </ul>
        
        <div className="p-3 sm:p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
          <p className="text-xs sm:text-sm md:text-base text-amber-700 font-medium">
            Lo studio dimostra che l'integrazione della strategia E23 Travel Media Planning nel mix di marketing di Locauto rappresenta un'opportunità significativa per intercettare un segmento di clienti premium in momenti decisivi del loro percorso di viaggio, generando crescita incrementale senza conflitti con i canali esistenti.
          </p>
        </div>
      </div>
    </div>
  );

  const ImplementationSection = () => (
    <div className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Roadmap di Implementazione</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Raccomandazioni operative</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          Sulla base dei dati analizzati, si raccomanda a Locauto di:
        </p>
        
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">1</div>
            <div className="ml-3 sm:ml-4">
              <p className="text-sm sm:text-base text-gray-700">Implementare la strategia E23 come canale di marketing complementare</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">2</div>
            <div className="ml-3 sm:ml-4">
              <p className="text-sm sm:text-base text-gray-700">Focalizzare inizialmente gli sforzi sui punti di contatto con maggiore copertura</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">3</div>
            <div className="ml-3 sm:ml-4">
              <p className="text-sm sm:text-base text-gray-700">Sviluppare messaggi personalizzati per ciascuna fase del percorso cliente</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">4</div>
            <div className="ml-3 sm:ml-4">
              <p className="text-sm sm:text-base text-gray-700">Stabilire un sistema di misurazione per valutare l'efficacia in termini di crescita incrementale</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prossimi passi</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700">
          Per procedere con l'implementazione, suggeriamo di:
        </p>
        
        <div className="space-y-4 sm:space-y-6 relative">
          <div className="hidden sm:block absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex items-center sm:block mb-2 sm:mb-0">
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-0 sm:mb-2 sm:ml-3 relative z-10">1</div>
              <div className="sm:hidden flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="sm:ml-8 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Progetto pilota</h3>
              <p className="text-xs sm:text-sm text-gray-700">Condurre un progetto pilota con compagnie aeree selezionate</p>
              <p className="text-xs text-gray-500 mt-1 sm:mt-2">Tempistica: 1-2 mesi</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex items-center sm:block mb-2 sm:mb-0">
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-0 sm:mb-2 sm:ml-3 relative z-10">2</div>
              <div className="sm:hidden flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="sm:ml-8 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Definizione KPI</h3>
              <p className="text-xs sm:text-sm text-gray-700">Definire KPI specifici per misurare l'efficacia della strategia</p>
              <p className="text-xs text-gray-500 mt-1 sm:mt-2">Tempistica: 2-3 settimane</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex items-center sm:block mb-2 sm:mb-0">
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-0 sm:mb-2 sm:ml-3 relative z-10">3</div>
              <div className="sm:hidden flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="sm:ml-8 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Sviluppo contenuti</h3>
              <p className="text-xs sm:text-sm text-gray-700">Sviluppare contenuti personalizzati per ciascun punto di contatto</p>
              <p className="text-xs text-gray-500 mt-1 sm:mt-2">Tempistica: 1-2 mesi</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex items-center sm:block mb-2 sm:mb-0">
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-0 sm:mb-2 sm:ml-3 relative z-10">4</div>
              <div className="sm:hidden flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="sm:ml-8 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2">Implementazione sistema</h3>
              <p className="text-xs sm:text-sm text-gray-700">Implementare un sistema di monitoraggio e ottimizzazione continua</p>
              <p className="text-xs text-gray-500 mt-1 sm:mt-2">Tempistica: 2-3 mesi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  
  // Rendering condizionale delle sezioni
  const renderActiveSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />;
      case 'opportunity':
        return <OpportunitySection />;
      case 'methodology':
        return <MethodologySection />;
      case 'advantages':
        return <AdvantagesSection />;
      case 'roi':
        return <ROISection />;
      case 'implementation':
        return <ImplementationSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header con navigazione */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 mr-2">E23</div>
              <div className="text-xl text-gray-700">Travel Media Planning</div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Heroicon name: menu */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-1 lg:space-x-4">
              <button 
                onClick={() => setActiveSection('home')}
                className={`px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('opportunity')}
                className={`px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'opportunity' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Opportunità
              </button>
              <button 
                onClick={() => setActiveSection('methodology')}
                className={`px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'methodology' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Metodologia
              </button>
              <button 
                onClick={() => setActiveSection('advantages')}
                className={`px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'advantages' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Vantaggi
              </button>
              <button 
                onClick={() => setActiveSection('roi')}
                className={`px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'roi' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                ROI
              </button>
              <button 
                onClick={() => setActiveSection('implementation')}
                className={`px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'implementation' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Implementazione
              </button>
            </nav>
          </div>
          
          {/* Mobile menu, show/hide based on menu state */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    setActiveSection('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('opportunity');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'opportunity' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Opportunità
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('methodology');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'methodology' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Metodologia
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('advantages');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'advantages' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Vantaggi
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('roi');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'roi' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  ROI
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('implementation');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${activeSection === 'implementation' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Implementazione
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Contenuto principale */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-grow">
        {renderActiveSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-2">E23 Travel Media Planning</h3>
              <p className="text-gray-400 text-sm sm:text-base">Strategia innovativa per l'espansione di Locauto nel mercato europeo</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm sm:text-base mb-2">© 2025 E23 Travel Media Planning</p>
              <div className="flex flex-wrap space-x-2 sm:space-x-4 justify-center md:justify-end">
                <a href="#" className="text-gray-400 hover:text-white focus:outline-none focus:underline text-sm sm:text-base transition-colors" aria-label="Privacy Policy">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white focus:outline-none focus:underline text-sm sm:text-base transition-colors" aria-label="Cookie Policy">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-white focus:outline-none focus:underline text-sm sm:text-base transition-colors" aria-label="FAQ">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;