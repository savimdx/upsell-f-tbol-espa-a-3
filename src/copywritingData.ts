import { Bonus, Plan, ExampleExercise, Testimonial, FAQItem } from './types';

export const HERO_COPY = {
  superTitle: "🔥 ESTÁS A UN CLIC DE MULTIPLICAR LOS GOLES DE TU EQUIPO",
  mainTitle: "+100 Ejercicios de Finalizaciones en Fútbol",
  subTitle: "Accede de inmediato a la colección práctica de remates, definición y gol más completa. Diseña tareas de finalización en 5 minutos, mejora la puntería de tus delanteros de cara a portería y asegura victorias.",
  ctaText: "QUIERO ACCEDER AHORA POR SOLO 9 €",
  urgencyLabel: "⚡ Oferta única de lanzamiento disponible por tiempo limitado (-95% dto.)",
  trustBadges: [
    "Descarga en PDF",
    "Garantía de 7 días",
    "Acceso Inmediato",
    "Pago 100% Seguro"
  ]
};

export const WHAT_YOU_GET_COPY = {
  title: "¿Qué Recibirás al Añadir Este Pack Hoy?",
  subtitle: "Un sistema paso a paso, visual y directo al grano con tareas que desarrollan instinto asesino en el área rival.",
  items: [
    {
      title: "Más de 100 Ejercicios de Finalización Específicos",
      desc: "Estructurados con explicaciones claras, variantes, tiempos, espacios y materiales para entrenar el gol.",
      badge: "El Material Principal"
    },
    {
      title: "Ejercicios Organizados por Tipología de Remate",
      desc: "Mano a mano 1vs1 frente al portero, tiros de media distancia, voleas, remates de cabeza y definición al primer toque.",
      badge: "Estructurado"
    },
    {
      title: "Adaptado para Fútbol Base y Categorías Mayores",
      desc: "Ajustable desde benjamines y alevines hasta juveniles y equipos senior competitivos.",
      badge: "Multicategoría"
    },
    {
      title: "Gráficos Tácticos en Alta Resolución",
      desc: "Explicaciones visuales comprensibles al instante para que tus jugadores ejecuten la dinámica sin dudas.",
      badge: "Fácil Comprensión"
    },
    {
      title: "Ahorro Inmediato en Planificación",
      desc: "Abre el documento en tu móvil o tableta y monta sesiones de tiro y definición de alto ritmo en minutos.",
      badge: "Eficiencia Pura"
    },
    {
      title: "Acceso Digital Permanente de por Vida",
      desc: "Descárgalo en cualquier momento, guárdalo en tu teléfono o imprímelo para tu carpeta de campo.",
      badge: "Vitalicio"
    }
  ]
};

export const WHY_CHOOSE_COPY = {
  title: "¿Por Qué Entrenar la Finalización con Este Método?",
  subtitle: "El 80% de los partidos se definen por la eficacia en los últimos 20 metros.",
  benefits: [
    {
      title: "Aumenta el promedio de gol por partido",
      desc: "Los jugadores aprenden a tomar decisiones más rápidas y a colocar el balón con calma bajo presión.",
      iconName: "Flame"
    },
    {
      title: "Variedad infinita de situaciones de partido",
      desc: "Remates tras centro lateral, transiciones de contraataque, desmarques de ruptura y segundas jugadas.",
      iconName: "Sparkles"
    },
    {
      title: "Mejora el 1vs1 contra el portero",
      desc: "Técnicas de definición cruzada, amago, vaselina y colocación al palo largo.",
      iconName: "Target"
    },
    {
      title: "Alta motivación en tus entrenamientos",
      desc: "A todos los futbolistas les fascina rematar a portería con ritmo competitivo y dinámicas divertidas.",
      iconName: "Activity"
    }
  ]
};

export const BONUSES_COPY: Bonus[] = [
  {
    id: "bonus-1",
    title: "250 Actividades Sociomotrices de Fútbol Sala",
    description: "Juegos lúdicos orientados a potenciar el compañerismo, la diversión y la toma de decisiones subconsciente en categorías formativas.",
    value: 27,
    emoji: "🎁",
    image: "https://i.ibb.co/tpKF3T0P/Chat-GPT-Image-17-de-jun-de-2026-12-34-04.png"
  },
  {
    id: "bonus-2",
    title: "100 Ejercicios de Velocidad y Resistencia para Fútbol Sala",
    description: "Métodos de preparación física específica para futsal. Ejercicios integrados con balón para acelerar la ganancia de potencia y velocidad explosiva.",
    value: 35,
    emoji: "🎁",
    image: "https://i.ibb.co/N2LyJfLm/Chat-GPT-Image-17-de-jun-de-2026-12-08-39.png"
  },
  {
    id: "bonus-3",
    title: "51 Ejercicios de Entrenamiento de Fintas en Fútbol Sala",
    description: "Guía paso a paso para enseñar el desborde individual, el amago físico y el manejo del espacio en el 1 vs 1.",
    value: 19,
    emoji: "🎁",
    image: "https://i.ibb.co/wNDmrmRr/Chat-GPT-Image-17-de-jun-de-2026-12-36-00.png"
  },
  {
    id: "bonus-4",
    title: "Manual de Entrenamiento de Fútbol Sala",
    description: "La biblia del coach: fundamentos teóricos estructurados explicados de forma práctica para potenciar tu liderazgo y dirección técnica.",
    value: 45,
    emoji: "🎁",
    image: "https://i.ibb.co/5XzZYHkF/Chat-GPT-Image-17-de-jun-de-2026-12-38-15.png"
  },
  {
    id: "bonus-5",
    title: "Nociones Prácticas sobre Preparación Física, Táctica y Técnica",
    description: "Nociones de campo extremadamente directas para estructurar dinámicas competitivas según el rival y el momento del partido.",
    value: 29,
    emoji: "🎁",
    image: "https://i.ibb.co/FqqDkZyn/Chat-GPT-Image-17-de-jun-de-2026-13-08-59.png"
  }
];

export const PLANS_DATA = {
  basic: {
    id: 'basic' as const,
    name: "PLAN BÁSICO",
    price: 5,
    benefits: [
      "+1000 Sesiones de Entrenamiento de Fútbol Sala",
      "Manuales estructurados y optimizados para móvil",
      "Acceso digital inmediato a tu bandeja de correo",
      "Acceso vitalicio sin suscripciones sorpresa",
      "Soporte especializado ilimitado vía correo",
      "Actualizaciones futuras de este megapack gratis"
    ],
    ctaText: "QUIERO EL PLAN BÁSICO",
    popular: false
  },
  premium: {
    id: 'premium' as const,
    name: "PLAN PREMIUM COMPLETO",
    price: 6.90,
    badge: "OFERTA ESPECIAL",
    benefits: [
      "+1000 Sesiones de Entrenamiento de Fútbol Sala",
      "Bono 1: 250 Actividades Sociomotrices de Fútbol Sala (Valorizado en US$ 27)",
      "Bono 2: 100 Ejercicios de Velocidad y Resistencia para Fútbol Sala (US$ 35)",
      "Bono 3: 51 Ejercicios de Entrenamiento de Fintas en Fútbol Sala (US$ 19)",
      "Bono 4: Manual de Entrenamiento de Fútbol Sala (US$ 45)",
      "Bono 5: Nociones Prácticas sobre Preparación Física, Táctica y Técnica (US$ 29)",
      "Acceso prioritario 24/7 a soporte técnico premium",
      "Acceso vitalicio de por vida a la bóveda VIP de recursos",
      "Actualizaciones gratuitas",
      "Garantía de 7 días"
    ],
    ctaText: "QUIERO ACCEDER AHORA",
    popular: true
  }
};

export const EXAMPLE_EXERCISES_DATA: ExampleExercise[] = [
  {
    id: 1,
    title: "Rondo de Activación Dinámica y Transición 3v1 + 1",
    phase: "1. Ejercicio de Calentamiento",
    description: "Activación física y cognitiva de alta velocidad orientada a entrenar la recepción, la orientación corporal y la presión tras pérdida de balón.",
    setup: "Cuadrante de 10x10 metros. Tres jugadores mantienen la posesión en el rondo frente a un defensor. Hay un receptor externo esperando la transición.",
    instructions: "Los 3 jugadores internos tocan a un toque obligatoriamente. Al completar 6 pases seguidos, deben realizar un pase largo al jugador externo. Si el defensor intercepta el balón, cambia rol inmediatamente al jugador que erró.",
    coachingPoints: [
      "Fomentar el perfilamiento corporal de cara a la línea de pase.",
      "Velocidad máxima en las transiciones defensivas tan pronto ocurre la pérdida de posesión.",
      "Sopor físico en puntas de pie para reaccionar al pase rápido."
    ],
    visualType: "warmup"
  },
  {
    id: 2,
    title: "Juego Reducido de Superioridad 3v2 + Arquero en Zona de Finalización",
    phase: "2. Juego Reducido (SSC)",
    description: "Espacio controlado para potenciar la toma de decisiones en ataque rápido, aprovechando el espacio libre e incentivando la cobertura defensiva rápida.",
    setup: "Media cancha de fútbol sala. 3 atacantes se aproximan desde la línea central contra 2 defensores activos en zona de penalización.",
    instructions: "El juego inicia con pase del arquero a los atacantes. Los atacantes tienen un máximo de 8 segundos para disparar al arco. Si los defensores roban, buscan anotar cruzando la línea media conduciendo el balón.",
    coachingPoints: [
      "Crear amplitud máxima para estirar los dos bloques defensivos.",
      "Defensores deben priorizar el bloqueo de la línea de remate central.",
      "Tomar decisiones rápidas: pase al hueco de inmediato o disparo si hay espacio libre."
    ],
    visualType: "ssc"
  },
  {
    id: 3,
    title: "Salida de Presión Con Bloqueo y Rotación 3-1 en Rombo",
    phase: "3. Tácticas Ofensivas y Defensivas",
    description: "Dinámica táctica para eludir la marca de presión alta individual del rival mediante pivoteo y rotación continua.",
    setup: "Cancha completa. Dos equipos posicionados en sistema 3-1 clásico de fútbol sala.",
    instructions: "El cierre conduce, pasa al ala derecho, corre a bloquear la marca del ala izquierdo. El ala izquierdo rota hacia el centro para recibir del ala derecho. El ala derecho descarga rápido con el pívot, quien aguanta el esférico para la llegada del rotado.",
    coachingPoints: [
      "Precisión quirúrgica en la fuerza del pase a los pies del pívot.",
      "Los bloqueos cuerpo a cuerpo deben ser limpios, con los pies fijos para no cometer falta.",
      "Comunicación verbal fluida para sincronizar las marcas en la rotación defensiva."
    ],
    visualType: "tactics"
  },
  {
    id: 4,
    title: "Circuito de Agilidad Polivalente Con Remate Explosivo",
    phase: "4. Velocidad y Resistencia",
    description: "Circuito físico-técnico integrado para trabajar la agilidad multidireccional, potencia de piernas y remate en fatiga.",
    setup: "Esquina de la cancha. Escalera de coordinación, 3 vallas de salto de 30cm, 5 estacas de slalom colocadas a 1 metro de distancia de la línea de remate.",
    instructions: "El jugador realiza skipping rápido en la escalera, salta con pies juntos las vallas, realiza slalom de velocidad máxima entre las estacas, recibe el pase del asistente de espaldas al arco, gira explosivamente y dispara.",
    coachingPoints: [
      "Garantizar la técnica correcta de caída luego de rebasar las vallas.",
      "Coordinación de brazos al realizar slalom.",
      "Técnica de tiro agresiva buscando colocar el balón abajo junto a los postes."
    ],
    visualType: "fitness"
  },
  {
    id: 5,
    title: "Planificación del Microciclo de Preparación Semanal",
    phase: "5. Planificación de Entrenamientos",
    description: "Plantilla estructurada para distribuir la carga de trabajo semanal previa a un partido del fin de semana sin sobrecargar a los futbolistas.",
    setup: "Planilla de control dividida en 3 sesiones principales (Lunes, Miércoles, Jueves) y partido el Sábado.",
    instructions: "Sesión 1: Foco aeróbico y asimilación técnica. Sesión 2: Táctica de alta intensidad, transiciones rápidas y juegos reducidos. Sesión 3: Sesión pre-partido recreativa ligera, jugadas a balón parado (córners, tiros libres) y baja fatiga neuromuscular.",
    coachingPoints: [
      "Ajustar los tiempos de trabajo y descanso en base a la intensidad acumulada.",
      "Monitorear la fatiga subjetiva del plantel previo al inicio de la sesión pre-partido.",
      "Garantizar sesiones de hidratación obligatorias cada 15 a 20 minutos."
    ],
    visualType: "planning"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Prof. Carlos Mendoza",
    role: "Director Técnico Sub-12 y Sub-14",
    location: "Madrid, España",
    rating: 5,
    quote: "Mis niños estaban desesperados con los mismos entrenamientos mecánicos de siempre. Al aplicar las dinámicas sociomotrices de este pack, la motivación explotó. Hoy nos coronamos campeones de la liga municipal de Madrid. No exagero, la planificación me toma literalmente 5 minutos al día.",
    result: "🏆 Campeón de Liga y 90% de ahorro de tiempo planificando",
    avatar: "CM",
    photoUrl: "https://i.ibb.co/PZt5xvNz/4860672-a5eb42e42c4f21c.jpg"
  },
  {
    id: "t-2",
    name: "Marcelo Díaz",
    role: "Docente de Educación Física y Talleres Deportivos",
    location: "Barcelona, España",
    rating: 5,
    quote: "Como maestra de física tengo poco margen para enfocarme en tácticas complejas. Este material me dio la estructura perfecta que necesitaba. Todo está explicado con un lenguaje tan amigable que hasta los niños comprenden el ejercicio solo con ver el gráfico de mi tablet. El costo es risible frente al valor real.",
    result: "⏱️ Sesiones preparadas en tiempo récord y clases dinámicas",
    avatar: "MS",
    photoUrl: "https://i.ibb.co/Fk8KD5RL/istockphoto-515225171-612x612.jpg"
  },
  {
    id: "t-3",
    name: "Eduardo López 'Profe Edu'",
    role: "Fundador de la Escuela de Futsal 'Estrellas del Mañana'",
    location: "Sevilla, España",
    rating: 5,
    quote: "Tengo más de 120 alumnos distribuidos en varias categorías. Los ejercicios de velocidad y fuerza integrados con el balón son espectaculares. El nivel técnico de mis defensas se ha disparado. Mis monitores deportivos también lo usan como plantilla estándar.",
    result: "📈 Crecimiento de nivel técnico general y estandarización en su club",
    avatar: "EL",
    photoUrl: "https://i.ibb.co/Mbr4rd7/treinador-de-futebol-indoor-observando-os-jogadores-durante-o-treino-406939-27210.avif"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Este material de sesiones de fútbol sala es 100% digital?",
    answer: "¡Sí, claro! El acceso es inmediato después de la compra. No tienes que pagar gastos de envío ni esperar semanas a que te llegue un libro físico a tu casa. Puedes descargar todas las sesiones y los extras en formato digital en segundos."
  },
  {
    id: "faq-2",
    question: "¿Cómo y cuándo recibiré el acceso a los materiales?",
    answer: "Inmediatamente después de confirmar tu pago, nuestro sistema automatizado enviará un correo electrónico con tu contraseña única y el enlace de descarga directa. Podrás acceder a todo el material en tu teléfono celular, computadora, tableta o imprimirlo de inmediato si lo prefieres para llevarlo en tu carpeta táctica tradicional."
  },
  {
    id: "faq-3",
    question: "¿Puedo aplicar estos entrenamientos en cualquier categoría de edad?",
    answer: "¡Exactamente! El material está diseñado desde cero para abarcar una gran versatilidad de edades. Incluye dinámicas de iniciación sociomotriz ideales para niños de 6 a 11 años, juegos reducidos intensos y fintas fantásticas para adolescentes, y sistemas tácticos complejos aptos para ligas juveniles y adultos amateur de alto rendimiento."
  },
  {
    id: "faq-4",
    question: "¿Se necesita experiencia previa como entrenador táctico para usarlos?",
    answer: "No, para nada. Cada ejercicio está redactado de manera libre de jerga excesiva e incomprensible. Incluye una ilustración del campo con la distribución exacta de conos, jugadores y direcciones del balón, objetivos claros, instrucciones simples y apuntes específicos sobre qué corregir. Está pensado para profesores de escuela, entrenadores primerizos y directores técnicos experimentados."
  },
  {
    id: "faq-5",
    question: "¿El acceso es de por vida o tendré que pagar suscripciones anuales?",
    answer: "Es de pago único y de por vida. Sin suscripciones recurrentes, sin cargos sorpresa mensuales ocultos ni membresías anuales obligatorias. Pagas una única vez el plan que mejor se adapte a tus necesidades (Básico o Premium) y aseguras el acceso ilimitado para siempre, incluyendo las futuras actualizaciones gratis."
  }
];
