// Banque de questions Code de la Route
// Images de panneaux : reproductions officielles Wikimedia Commons (CC BY-SA)

const WM = (code) => `https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_${code}.svg`;

export const THEMES = [
  { id: "signalisation", label: "Signalisation", icon: "🚸", color: "#C41E3A" },
  { id: "priorites", label: "Priorités & intersections", icon: "🔀", color: "#F4B400" },
  { id: "vitesse", label: "Vitesse & distances", icon: "⏱️", color: "#2D6A4F" },
  { id: "conducteur", label: "Le conducteur", icon: "🧑‍✈️", color: "#3A5A8C" },
  { id: "usagers", label: "Autres usagers", icon: "🚶", color: "#8C4A9C" },
  { id: "secours", label: "Premiers secours", icon: "🩹", color: "#D64545" },
  { id: "mecanique", label: "Mécanique & équipements", icon: "🔧", color: "#5A6B7A" },
  { id: "environnement", label: "Environnement & éco-conduite", icon: "🌱", color: "#3E8E5A" },
  { id: "securite", label: "Sécurité & chargement", icon: "🛡️", color: "#B85C1E" },
  { id: "divers", label: "Stationnement, autoroute, dispositions diverses", icon: "🅿️", color: "#4A4A6A" },
];

let uid = 0;
const q = (theme, question, answers, explanation, opts = {}) => ({
  id: `${theme}-${++uid}`, theme, question, answers, explanation,
  image: opts.image || null, difficulty: opts.difficulty || "moyen",
});

export const QUESTIONS = [
  q("signalisation", "Que devez-vous faire face à ce panneau ?", [
    { text: "Marquer un arrêt obligatoire, même si la voie est libre", correct: true },
    { text: "Ralentir seulement si un véhicule arrive", correct: false },
    { text: "Céder le passage sans vous arrêter", correct: false },
    { text: "Vous arrêter uniquement de nuit", correct: false },
  ], "Le panneau STOP impose un arrêt total, quelle que soit la visibilité, l'heure ou la circulation.", { image: WM("AB4"), difficulty: "facile" }),

  q("signalisation", "Ce panneau triangulaire signifie :", [
    { text: "Cédez le passage aux véhicules circulant sur la route abordée", correct: true },
    { text: "Arrêt obligatoire", correct: false },
    { text: "Fin de toutes les interdictions", correct: false },
  ], "Le panneau « Cédez le passage » oblige à ralentir et à laisser passer les véhicules prioritaires, sans arrêt obligatoire si la voie est libre.", { image: WM("AB3a"), difficulty: "facile" }),

  q("signalisation", "Ce panneau vous informe que vous abordez :", [
    { text: "Un passage à niveau muni de barrières ou demi-barrières", correct: true },
    { text: "Un pont mobile", correct: false },
    { text: "Une zone de travaux", correct: false },
    { text: "Une limitation de vitesse spécifique", correct: false },
  ], "Ce panonceau annonce un passage à niveau équipé de barrières ou demi-barrières automatiques.", { image: WM("AB1"), difficulty: "moyen" }),

  q("signalisation", "Que signifie ce panneau carré bleu ?", [
    { text: "Une obligation ou une indication à suivre", correct: true },
    { text: "Une interdiction absolue", correct: false },
    { text: "Un danger temporaire", correct: false },
  ], "Les panneaux carrés à fond bleu sont des panneaux d'indication ou d'obligation, jamais des interdictions (rondes, listel rouge).", { image: WM("B4"), difficulty: "moyen" }),

  q("signalisation", "Ce panneau triangulaire à listel rouge annonce :", [
    { text: "Un danger particulier signalé par le pictogramme", correct: true },
    { text: "Une obligation de tourner", correct: false },
    { text: "La fin d'une zone dangereuse", correct: false },
  ], "Tous les panneaux triangulaires (fond blanc/crème, listel rouge) signalent un danger à l'approche.", { image: WM("A4"), difficulty: "facile" }),

  q("signalisation", "Ce panneau annonce un carrefour où s'applique :", [
    { text: "La priorité à droite", correct: true },
    { text: "Un sens interdit", correct: false },
    { text: "Une aire de repos", correct: false },
  ], "En l'absence de tout autre marquage, la priorité à droite reste la règle générale en France.", { image: WM("A14"), difficulty: "moyen" }),

  q("signalisation", "Que devez-vous faire en voyant ce panneau ?", [
    { text: "Adapter votre conduite au danger annoncé et rester vigilant", correct: true },
    { text: "Accélérer pour dégager rapidement la zone", correct: false },
    { text: "Vous arrêter immédiatement sur la chaussée", correct: false },
  ], "Un panneau de danger impose seulement prudence et adaptation de l'allure, pas un arrêt.", { image: WM("A2b"), difficulty: "moyen" }),

  q("signalisation", "Ce panneau rond à fond blanc et listel rouge indique :", [
    { text: "Une interdiction", correct: true },
    { text: "Une obligation", correct: false },
    { text: "Une simple information", correct: false },
  ], "Forme ronde + listel rouge = famille des panneaux d'interdiction (type B).", { image: WM("B9i"), difficulty: "facile" }),

  q("signalisation", "Ce panneau annonce la fin d'une interdiction précédemment signalée :", [
    { text: "Vrai, les panneaux barrés en diagonale grise indiquent une fin de prescription", correct: true },
    { text: "Faux, il s'agit d'un nouveau danger", correct: false },
    { text: "Vrai, mais seulement pour les poids lourds", correct: false },
  ], "Les panneaux avec bandes grises diagonales signalent la fin d'une interdiction ou obligation en cours, pour tous les usagers concernés.", { image: WM("B54"), difficulty: "difficile" }),

  q("signalisation", "À l'approche de ce panneau, vous devez :", [
    { text: "Ralentir et être prêt à céder le passage selon la configuration du carrefour", correct: true },
    { text: "Accélérer pour passer en premier", correct: false },
    { text: "Faire demi-tour", correct: false },
  ], "Les panneaux annonçant un carrefour imposent la prudence : ralentir et anticiper les règles de priorité.", { image: WM("B2c"), difficulty: "moyen" }),

  q("signalisation", "Un panneau à fond bleu et forme carrée sert généralement à :", [
    { text: "Donner une indication utile (parking, autoroute, service) ou une obligation", correct: true },
    { text: "Signaler une interdiction de circuler", correct: false },
    { text: "Annoncer un contrôle radar", correct: false },
  ], "Le bleu est la couleur des panneaux d'indication et de certaines obligations en France, jamais des interdictions.", { image: WM("A13a"), difficulty: "moyen" }),

  q("signalisation", "Un panneau triangulaire avec listel rouge et pictogramme d'enfants annonce :", [
    { text: "La proximité d'une école ou d'une zone fréquentée par des enfants", correct: true },
    { text: "Un parc animalier", correct: false },
    { text: "Une aire de jeux réservée aux adultes", correct: false },
  ], "Ce panneau de danger impose une vigilance accrue et une réduction de vitesse à l'approche d'écoles.", { difficulty: "facile" }),

  q("priorites", "Dans un rond-point sans signalisation particulière, qui est prioritaire ?", [
    { text: "Les véhicules déjà engagés dans le rond-point", correct: true },
    { text: "Les véhicules qui s'apprêtent à y entrer", correct: false },
    { text: "Cela dépend du véhicule le plus rapide", correct: false },
  ], "En France, sauf indication contraire, les usagers déjà dans le giratoire ont la priorité sur ceux qui souhaitent y entrer."),

  q("priorites", "En l'absence de panneau ou de marquage, la priorité s'exerce :", [
    { text: "À droite", correct: true },
    { text: "À gauche", correct: false },
    { text: "Au véhicule le plus rapide", correct: false },
  ], "La priorité à droite est la règle par défaut de tout carrefour non signalé en agglomération."),

  q("priorites", "Vous circulez sur une route prioritaire signalée par des panneaux losange jaune. À une intersection non protégée, vous devez :", [
    { text: "Continuer, vous êtes prioritaire sur les véhicules venant des voies latérales", correct: true },
    { text: "Céder systématiquement le passage", correct: false },
    { text: "Vous arrêter avant de vous engager, par précaution", correct: false },
  ], "Le losange jaune (panneau de priorité) confirme que vous conservez la priorité sur toute la portion de route ainsi signalée."),

  q("priorites", "Un véhicule prioritaire (pompiers, gyrophare et sirène activés) approche à un carrefour. Quelles sont les bonnes attitudes à adopter ?", [
    { text: "Faciliter son passage en vous écartant, même si cela implique de déroger temporairement à une règle de circulation", correct: true },
    { text: "Ralentir et rester attentif à sa trajectoire avant de reprendre votre route", correct: true },
    { text: "Accélérer pour dégager la voie le plus vite possible", correct: false },
    { text: "L'ignorer si vous êtes déjà engagé dans le carrefour", correct: false },
  ], "Tout conducteur doit faciliter le passage des véhicules d'intérêt général prioritaires en mission urgente, en s'écartant prudemment et sans précipitation dangereuse."),

  q("priorites", "Vous tournez à gauche à une intersection. Vous devez céder le passage :", [
    { text: "Aux véhicules venant en face qui vont tout droit ou tourner à droite", correct: true },
    { text: "À personne, vous êtes prioritaire dans ce cas", correct: false },
    { text: "Uniquement aux piétons qui traversent derrière vous", correct: false },
  ], "Le conducteur qui tourne à gauche doit toujours céder le passage aux véhicules venant en sens inverse."),

  q("priorites", "Sur une place à sens giratoire signalée « Vous n'avez pas la priorité », vous devez :", [
    { text: "Céder le passage à tous les véhicules déjà engagés sur l'anneau", correct: true },
    { text: "Vous engager sans ralentir", correct: false },
    { text: "Klaxonner avant de vous engager pour signaler votre présence", correct: false },
  ], "C'est la configuration standard des giratoires modernes en France : priorité à l'anneau."),

  q("priorites", "Un tramway arrive à une intersection sans signalisation lumineuse. Vous devez :", [
    { text: "Toujours lui céder le passage, sauf signalisation contraire", correct: true },
    { text: "Passer si vous êtes arrivé en premier", correct: false },
    { text: "Le devancer si votre véhicule est plus rapide", correct: false },
  ], "Le tramway, du fait de sa faible manœuvrabilité et de ses distances de freinage, est prioritaire par défaut."),

  q("priorites", "Vous croisez un convoi funéraire ou un cortège autorisé. Vous devez :", [
    { text: "Ne pas vous y insérer et respecter la continuité du cortège", correct: true },
    { text: "Vous insérer si un espace se présente", correct: false },
    { text: "Klaxonner pour signaler votre présence", correct: false },
  ], "Les cortèges organisés et autorisés ne doivent pas être coupés par un véhicule extérieur."),

  q("vitesse", "Quelle est la vitesse maximale autorisée en agglomération, sauf signalisation différente ?", [
    { text: "50 km/h", correct: true },
    { text: "70 km/h", correct: false },
    { text: "30 km/h", correct: false },
  ], "50 km/h est la limite par défaut en agglomération ; certaines zones (zones 30, zones de rencontre) abaissent cette limite localement.", { difficulty: "facile" }),

  q("vitesse", "Sur autoroute, quelles sont les vitesses maximales autorisées selon les conditions ?", [
    { text: "130 km/h par temps sec", correct: true },
    { text: "110 km/h par temps de pluie", correct: true },
    { text: "150 km/h par temps sec si la circulation est fluide", correct: false },
    { text: "130 km/h par temps de pluie", correct: false },
  ], "Par temps sec, la limite est de 130 km/h sur autoroute ; elle est abaissée à 110 km/h dès que la chaussée est mouillée."),

  q("vitesse", "La règle des « deux secondes » permet de :", [
    { text: "Évaluer la distance de sécurité à respecter avec le véhicule qui précède", correct: true },
    { text: "Calculer le temps de freinage sur route mouillée uniquement", correct: false },
    { text: "Mesurer le temps de dépassement autorisé", correct: false },
  ], "En comptant deux secondes entre le passage du véhicule qui précède et le vôtre au même point fixe, vous vérifiez une distance de sécurité suffisante."),

  q("vitesse", "Hors agglomération, sur route à double sens sans séparateur central, la vitesse est en général limitée à :", [
    { text: "80 km/h (90 km/h sur certains axes signalés par le département)", correct: true },
    { text: "100 km/h", correct: false },
    { text: "70 km/h", correct: false },
    { text: "60 km/h", correct: false },
  ], "Depuis 2018, la limite par défaut est 80 km/h, certains départements ayant relevé cette limite à 90 km/h sur des sections spécifiques et signalées."),

  q("vitesse", "Quelles règles particulières s'appliquent à un conducteur en période probatoire ?", [
    { text: "Des vitesses maximales réduites (ex. 110 km/h au lieu de 130 sur autoroute)", correct: true },
    { text: "Un taux d'alcoolémie maximal abaissé à 0,2 g/L de sang", correct: true },
    { text: "Une interdiction totale de circuler la nuit", correct: false },
    { text: "Un contrôle technique du véhicule tous les 6 mois", correct: false },
  ], "Durant les 2 à 3 premières années, le jeune conducteur doit respecter des vitesses réduites et un seuil d'alcoolémie plus strict que les conducteurs confirmés."),

  q("vitesse", "En cas de visibilité fortement réduite par le brouillard, vous devez :", [
    { text: "Réduire votre vitesse et allumer vos feux de brouillard si besoin", correct: true },
    { text: "Maintenir votre vitesse en activant vos feux de détresse en continu", correct: false },
    { text: "Rouler en feux de route (pleins phares) pour mieux voir", correct: false },
  ], "La réduction de vitesse est systématique dès que la visibilité diminue ; les feux de route sont à éviter dans le brouillard car ils éblouissent en se reflétant sur les particules d'eau."),

  q("vitesse", "La distance de sécurité doit être augmentée :", [
    { text: "Sur chaussée mouillée, de nuit, ou en cas de visibilité réduite", correct: true },
    { text: "Uniquement sur autoroute", correct: false },
    { text: "Uniquement par temps de pluie, jamais de nuit", correct: false },
  ], "Toute condition dégradant l'adhérence ou la visibilité impose d'augmenter la distance de sécurité."),
  q("conducteur", "Le taux d'alcoolémie maximal autorisé pour un conducteur titulaire du permis depuis plus de 3 ans est :", [
    { text: "0,5 g/L de sang (0,25 mg/L d'air expiré)", correct: true },
    { text: "0,8 g/L de sang", correct: false },
    { text: "0 g/L, tolérance zéro pour tous", correct: false },
  ], "Le seuil légal général est de 0,5 g/L de sang, abaissé à 0,2 g/L pour les conducteurs en période probatoire."),

  q("conducteur", "Un conducteur en permis probatoire a un taux d'alcoolémie maximal autorisé de :", [
    { text: "0,2 g/L de sang", correct: true },
    { text: "0,5 g/L de sang, comme tout le monde", correct: false },
    { text: "0,3 g/L de sang", correct: false },
  ], "La tolérance est quasi nulle (0,2 g/L) durant la période probatoire, soit 2 à 3 ans selon le mode d'obtention du permis."),

  q("conducteur", "Quelles affirmations sur le permis probatoire sont exactes ?", [
    { text: "Il est attribué avec 6 points (8 points si obtenu par la conduite accompagnée)", correct: true },
    { text: "Sa durée est généralement de 3 ans (2 ans en conduite accompagnée)", correct: true },
    { text: "Il donne directement 12 points comme un permis classique", correct: false },
    { text: "Il ne concerne que les conducteurs de moins de 21 ans", correct: false },
  ], "Le capital de points initial est réduit et augmente progressivement chaque année sans infraction, jusqu'au capital plein de 12 points."),

  q("conducteur", "Utiliser un téléphone tenu en main en conduisant est :", [
    { text: "Interdit, sanctionné d'une amende et d'un retrait de points", correct: true },
    { text: "Toléré à l'arrêt à un feu rouge", correct: false },
    { text: "Autorisé uniquement pour consulter un itinéraire", correct: false },
  ], "L'usage tenu en main du téléphone est interdit en toutes circonstances au volant, y compris à l'arrêt dans la circulation."),

  q("conducteur", "La fatigue au volant se manifeste notamment par :", [
    { text: "Des micro-sommeils, une baisse de vigilance et des réflexes ralentis", correct: true },
    { text: "Une amélioration temporaire de la concentration", correct: false },
    { text: "Un besoin accru de rouler plus vite pour rester éveillé", correct: false },
  ], "La fatigue est l'une des premières causes d'accidents mortels sur autoroute ; une pause toutes les deux heures est recommandée."),

  q("conducteur", "Après la prise de certains médicaments signalés par un pictogramme, vous devez :", [
    { text: "Vérifier la compatibilité avec la conduite avant de prendre le volant", correct: true },
    { text: "Conduire normalement, les pictogrammes sont indicatifs uniquement", correct: false },
    { text: "Ne vous inquiéter que du pictogramme rouge, les autres sont sans danger", correct: false },
  ], "Trois niveaux de pictogrammes (jaune, orange, rouge) alertent sur les risques pour la conduite ; le niveau rouge impose de ne pas conduire."),

  q("conducteur", "La consommation de stupéfiants au volant est :", [
    { text: "Interdite avec tolérance zéro, quel que soit le taux détecté", correct: true },
    { text: "Tolérée en dessous d'un certain seuil, comme l'alcool", correct: false },
    { text: "Tolérée si la consommation date de la veille au soir", correct: false },
  ], "Contrairement à l'alcool, la loi française fixe une tolérance zéro pour les stupéfiants au volant."),

  q("conducteur", "Un conducteur qui perd tous ses points doit :", [
    { text: "Repasser le permis après une période d'interdiction de conduire", correct: true },
    { text: "Continuer à conduire normalement", correct: false },
    { text: "Attendre simplement sa convocation avant de cesser de conduire", correct: false },
  ], "La perte totale des points entraîne l'invalidation du permis et l'obligation de le repasser ; conduire dans l'intervalle constitue un délit."),

  q("usagers", "En ville, face à un piéton engagé sur un passage piéton, vous devez :", [
    { text: "Vous arrêter et le laisser traverser", correct: true },
    { text: "Ralentir seulement s'il est déjà à mi-chemin", correct: false },
    { text: "Klaxonner pour qu'il accélère le pas", correct: false },
  ], "Le code impose l'arrêt dès qu'un piéton s'engage ou manifeste clairement son intention de traverser sur un passage protégé.", { difficulty: "facile" }),

  q("usagers", "Quelles sont les distances latérales minimales à respecter pour dépasser un cycliste ?", [
    { text: "1 mètre minimum en agglomération", correct: true },
    { text: "1,50 mètre minimum hors agglomération", correct: true },
    { text: "50 cm dans tous les cas", correct: false },
    { text: "Aucune distance minimale n'est fixée par la loi", correct: false },
  ], "Ces distances minimales de dépassement des cyclistes et piétons sont fixées par le code de la route depuis 2017."),

  q("usagers", "Face à un motard, vous devez être particulièrement vigilant car :", [
    { text: "Il est plus difficile à repérer et plus vulnérable en cas de choc", correct: true },
    { text: "Il est toujours prioritaire sur les autres véhicules", correct: false },
    { text: "Il roule nécessairement plus vite que les voitures", correct: false },
  ], "Les deux-roues motorisés sont surreprésentés dans les accidents graves du fait de leur faible visibilité et de l'absence de protection."),

  q("usagers", "Un enfant à vélo circulant sur le trottoir jusqu'à 8 ans est :", [
    { text: "Toléré par la loi, sans gêner les piétons", correct: true },
    { text: "Strictement interdit", correct: false },
    { text: "Autorisé uniquement s'il est accompagné d'un adulte", correct: false },
  ], "Les enfants de moins de 8 ans sont autorisés à circuler à vélo sur les trottoirs, à condition de ne pas gêner les piétons."),

  q("usagers", "En présence d'un autobus à l'arrêt qui signale son intention de repartir, vous devez :", [
    { text: "Faciliter sa réinsertion dans la circulation", correct: true },
    { text: "Accélérer pour le devancer", correct: false },
    { text: "Le doubler avant qu'il ne reparte", correct: false },
  ], "Le code impose de faciliter le redémarrage des autobus et autocars signalant leur intention de quitter un arrêt en agglomération."),

  q("usagers", "Face à une personne aveugle ou malvoyante porteuse d'une canne blanche qui souhaite traverser :", [
    { text: "Vous devez vous arrêter et lui céder le passage", correct: true },
    { text: "Vous n'avez pas d'obligation particulière", correct: false },
    { text: "L'obligation ne s'applique que sur un passage piéton marqué au sol", correct: false },
  ], "Le code de la route impose une priorité systématique aux personnes en situation de handicap visuel ou moteur signalées à un point de traversée, marqué ou non."),

  q("secours", "Sur les lieux d'un accident, la première action à mener est :", [
    { text: "Protéger la zone pour éviter un sur-accident", correct: true },
    { text: "Déplacer immédiatement les victimes", correct: false },
    { text: "Appeler les secours avant toute autre chose, même en cas de danger immédiat", correct: false },
  ], "La méthode PAS (Protéger, Alerter, Secourir) impose de sécuriser les lieux avant toute autre action.", { difficulty: "facile" }),

  q("secours", "Le numéro d'urgence européen, valable dans toute l'Union européenne, est :", [
    { text: "Le 112", correct: true },
    { text: "Le 17", correct: false },
    { text: "Le 01", correct: false },
    { text: "Le 18", correct: false },
  ], "Le 112 est le numéro d'urgence unique européen, accessible gratuitement même sans crédit ni carte SIM (le 17 et le 18 restent les numéros nationaux police et pompiers)."),

  q("secours", "Une victime consciente qui se plaint de douleurs doit être :", [
    { text: "Laissée dans la position où elle se trouve, sauf danger immédiat", correct: true },
    { text: "Systématiquement mise debout pour vérifier ses capacités", correct: false },
    { text: "Assise immédiatement pour la rassurer", correct: false },
  ], "Sauf danger immédiat (incendie, sur-accident), il ne faut jamais déplacer une victime consciente qui se plaint de douleurs."),

  q("secours", "Quels gestes sont appropriés face à une victime inconsciente qui respire ?", [
    { text: "La placer en position latérale de sécurité (PLS)", correct: true },
    { text: "Surveiller sa respiration en attendant les secours", correct: true },
    { text: "Pratiquer un massage cardiaque immédiatement", correct: false },
    { text: "Lui donner à boire pour la réhydrater", correct: false },
  ], "La PLS permet de dégager les voies aériennes et d'éviter l'inhalation de vomissements chez une victime inconsciente qui respire ; la surveillance de sa respiration reste essentielle jusqu'à l'arrivée des secours."),

  q("secours", "En arrivant sur les lieux d'un accident, vous devez d'abord :", [
    { text: "Allumer vos feux de détresse et vous garer en sécurité avant de sortir", correct: true },
    { text: "Vous arrêter n'importe où pour porter secours au plus vite", correct: false },
    { text: "Vous arrêter sur la voie de circulation la plus proche des victimes", correct: false },
  ], "S'arrêter sans sécuriser sa position peut provoquer un sur-accident ; feux de détresse et stationnement sécurisé sont la première étape."),

  q("secours", "Le triangle de signalisation doit être placé à une distance minimale de :", [
    { text: "30 mètres du véhicule accidenté ou en panne", correct: true },
    { text: "5 mètres", correct: false },
    { text: "100 mètres", correct: false },
  ], "Une distance de 30 mètres minimum laisse le temps aux autres usagers de réagir et de ralentir."),
  q("mecanique", "La profondeur minimale légale des sculptures de pneus est de :", [
    { text: "1,6 mm", correct: true },
    { text: "5 mm", correct: false },
    { text: "1 mm", correct: false },
  ], "En dessous de 1,6 mm, le pneu est hors normes légales et l'adhérence, notamment sur sol mouillé, est fortement dégradée."),

  q("mecanique", "Le contrôle technique est obligatoire pour un véhicule particulier :", [
    { text: "4 ans après la première mise en circulation, puis tous les 2 ans", correct: true },
    { text: "Tous les ans dès l'achat du véhicule", correct: false },
    { text: "2 ans après la mise en circulation, puis tous les ans", correct: false },
  ], "Cette périodicité s'applique aux véhicules particuliers et utilitaires légers thermiques."),

  q("mecanique", "Un témoin lumineux rouge au tableau de bord signifie généralement :", [
    { text: "Un défaut grave nécessitant un arrêt ou une vérification immédiate", correct: true },
    { text: "Une information sans gravité", correct: false },
    { text: "Un simple rappel du niveau de carburant", correct: false },
  ], "Le rouge signale une anomalie grave (pression d'huile, frein, température) à traiter sans délai, contrairement à l'orange qui alerte sans urgence absolue."),

  q("mecanique", "Que faut-il vérifier avant de prendre la route ?", [
    { text: "La pression des pneus", correct: true },
    { text: "Les niveaux (huile, liquide de refroidissement) et l'éclairage", correct: true },
    { text: "Uniquement le niveau de carburant", correct: false },
    { text: "Rien, un véhicule récent n'en a pas besoin", correct: false },
  ], "Un contrôle rapide avant chaque trajet limite fortement le risque de panne ou d'accident lié à un défaut mécanique."),

  q("mecanique", "Des essuie-glaces usés ou fissurés doivent être :", [
    { text: "Remplacés rapidement, ils réduisent la visibilité par temps de pluie", correct: true },
    { text: "Conservés jusqu'à ce qu'ils cassent complètement", correct: false },
    { text: "Remplacés uniquement en hiver", correct: false },
  ], "Des balais d'essuie-glace en mauvais état laissent des traces qui réduisent dangereusement la visibilité."),

  q("environnement", "L'éco-conduite permet notamment de :", [
    { text: "Réduire la consommation de carburant et les émissions polluantes", correct: true },
    { text: "Augmenter la vitesse maximale autorisée", correct: false },
    { text: "Rouler à haut régime pour optimiser le moteur", correct: false },
  ], "Anticipation, régularité et gestion des freinages sont les piliers de l'éco-conduite."),

  q("environnement", "Une zone à faibles émissions (ZFE) restreint la circulation :", [
    { text: "Des véhicules les plus polluants selon leur vignette Crit'Air", correct: true },
    { text: "De tous les véhicules sans exception", correct: false },
    { text: "Uniquement des poids lourds", correct: false },
  ], "Les ZFE limitent l'accès selon la classification Crit'Air du véhicule pour réduire la pollution en zone urbaine dense."),

  q("environnement", "Couper le moteur à l'arrêt prolongé (plus d'une minute) permet de :", [
    { text: "Réduire la consommation de carburant et les émissions", correct: true },
    { text: "Endommager systématiquement le moteur", correct: false },
    { text: "Est interdit par le code de la route", correct: false },
  ], "La coupure du moteur lors d'un arrêt prolongé, hors circulation, limite consommation et pollution inutiles."),

  q("environnement", "Un frein moteur bien utilisé permet de :", [
    { text: "Économiser l'usure des plaquettes de frein tout en ralentissant progressivement", correct: true },
    { text: "Remplacer totalement le freinage d'urgence", correct: false },
    { text: "Remplacer systématiquement le frein à pied en ville", correct: false },
  ], "Le frein moteur complète le freinage classique mais ne doit jamais s'y substituer en situation d'urgence."),

  q("environnement", "Que détermine la vignette Crit'Air d'un véhicule ?", [
    { text: "Son niveau d'émissions polluantes", correct: true },
    { text: "Son accès aux zones à circulation restreinte (ZFE)", correct: true },
    { text: "Sa puissance fiscale", correct: false },
    { text: "Le montant de sa carte grise", correct: false },
  ], "Six catégories, de 0 (électrique) à 5, déterminent l'accès aux zones à circulation restreinte selon le niveau de pollution du véhicule."),

  q("securite", "Le port de la ceinture de sécurité est obligatoire :", [
    { text: "À l'avant et à l'arrière du véhicule, pour tous les passagers", correct: true },
    { text: "Uniquement pour le conducteur", correct: false },
    { text: "Uniquement hors agglomération", correct: false },
  ], "Depuis 1990, la ceinture est obligatoire à toutes les places équipées, avant comme arrière.", { difficulty: "facile" }),

  q("securite", "Un enfant de moins de 10 ans doit voyager :", [
    { text: "Dans un dispositif de retenue homologué adapté à sa taille", correct: true },
    { text: "Sur les genoux d'un adulte à l'arrière si la ceinture n'est pas adaptée", correct: false },
    { text: "Sans dispositif particulier dès l'âge de 5 ans", correct: false },
  ], "Le siège ou rehausseur homologué est obligatoire jusqu'à 10 ans, sauf exceptions très encadrées."),

  q("securite", "Un chargement qui dépasse à l'arrière du véhicule doit être :", [
    { text: "Signalé par un dispositif visible (panneau, tissu) le rendant repérable", correct: true },
    { text: "Laissé sans signalisation s'il dépasse de moins d'un mètre", correct: false },
    { text: "Signalé uniquement s'il dépasse de plus de 3 mètres", correct: false },
  ], "Tout dépassement significatif du gabarit doit être signalé pour la sécurité des autres usagers."),

  q("securite", "Quand devez-vous porter le gilet de haute visibilité ?", [
    { text: "Avant de sortir du véhicule en cas d'arrêt d'urgence sur la chaussée ou l'accotement", correct: true },
    { text: "De jour comme de nuit, dès que vous êtes exposé à la circulation", correct: true },
    { text: "Uniquement de nuit", correct: false },
    { text: "Seulement si un agent vous le demande", correct: false },
  ], "Le gilet doit être enfilé avant de sortir du véhicule, de jour comme de nuit, dès qu'on est exposé à la circulation."),

  q("securite", "Un chargement mal arrimé dans le coffre présente un risque :", [
    { text: "De projection dangereuse en cas de freinage brusque ou de choc", correct: true },
    { text: "Uniquement esthétique", correct: false },
    { text: "Simplement un inconfort pour les passagers", correct: false },
  ], "Un objet mal arrimé peut devenir un projectile dangereux pour les occupants en cas de décélération brutale."),

  q("divers", "Sur autoroute, en cas de panne, vous devez vous arrêter :", [
    { text: "Sur la bande d'arrêt d'urgence si possible, feux de détresse allumés", correct: true },
    { text: "Sur la voie de droite en activant simplement vos clignotants", correct: false },
    { text: "Sur la voie de gauche, feux de détresse allumés", correct: false },
  ], "La bande d'arrêt d'urgence est réservée aux arrêts d'urgence ; il faut ensuite évacuer le véhicule par la droite si possible."),

  q("divers", "Le stationnement est considéré comme gênant lorsqu'il :", [
    { text: "Empêche ou complique la circulation ou l'usage normal de la voie", correct: true },
    { text: "Dure plus de 24 heures uniquement", correct: false },
    { text: "Dure plus de 7 jours uniquement", correct: false },
  ], "Un stationnement gênant, même bref, peut être verbalisé s'il perturbe la circulation, l'accès ou la visibilité."),

  q("divers", "Dans quels cas un stationnement est-il considéré comme « très gênant » ?", [
    { text: "Sur un passage piéton", correct: true },
    { text: "Sur une piste cyclable ou un emplacement handicapé sans droit", correct: true },
    { text: "Le dimanche en zone bleue", correct: false },
    { text: "Devant son propre domicile, sans gêne réelle", correct: false },
  ], "Ces stationnements très gênants sont sanctionnés plus lourdement car ils créent un danger direct pour des usagers vulnérables."),

  q("divers", "Pour circuler sur autoroute, la vitesse minimale sur la voie de gauche par temps normal est :", [
    { text: "80 km/h", correct: true },
    { text: "Il n'existe pas de vitesse minimale sur autoroute", correct: false },
    { text: "60 km/h", correct: false },
  ], "Une vitesse minimale de 80 km/h est imposée sur la voie la plus à gauche en conditions de circulation normales et de bonne visibilité."),

  q("divers", "Le document attestant qu'un véhicule est assuré doit être :", [
    { text: "Présenté aux autorités en cas de contrôle (attestation ou carte verte)", correct: true },
    { text: "Affiché en permanence sur le pare-brise obligatoirement", correct: false },
    { text: "Inutile depuis la suppression totale du contrôle d'assurance", correct: false },
  ], "Depuis 2019, le contrôle de l'assurance se fait essentiellement par fichier informatisé (FVA), mais l'attestation reste utile en cas de contrôle."),

  q("divers", "En cas de doute sur la validité de votre permis lors d'un séjour à l'étranger dans l'UE, celui-ci est :", [
    { text: "Valable et reconnu dans tous les pays de l'Union européenne", correct: true },
    { text: "Invalide au-delà des frontières nationales", correct: false },
    { text: "Valable seulement 90 jours à l'étranger", correct: false },
  ], "Le permis français, harmonisé au format européen, est directement valable dans tous les pays de l'UE."),

  /* ===== VAGUE 2 ===== */

  // Signalisation
    q("signalisation", "Ce panneau STOP est-il valable si vous jugez la voie parfaitement dégagée ?", [
    { text: "Non, l'arrêt reste obligatoire dans tous les cas", correct: true },
    { text: "Oui, vous pouvez ralentir seulement", correct: false },
    { text: "Oui, si vous ralentissez suffisamment avant de passer", correct: false },
  ], "L'arrêt au panneau STOP n'est jamais soumis à une appréciation personnelle de la visibilité.", { image: WM("AB4"), difficulty: "facile" }),
  q("signalisation", "Que risquez-vous en ne marquant pas l'arrêt à ce panneau ?", [
    { text: "Une amende et un retrait de points, en plus du danger créé", correct: true },
    { text: "Rien si aucun accident n'a lieu", correct: false },
    { text: "Seulement une amende, jamais de retrait de points", correct: false },
  ], "Le non-respect d'un STOP est une infraction sanctionnée indépendamment de ses conséquences immédiates.", { image: WM("AB4") }),
  q("signalisation", "Ce panneau cédez-le-passage vous autorise-t-il à vous arrêter si vous le jugez plus prudent ?", [
    { text: "Oui, rien ne l'interdit, mais l'arrêt n'est pas obligatoire si la voie est libre", correct: true },
    { text: "Non, s'arrêter à ce panneau est une infraction", correct: false },
    { text: "Non, l'arrêt est toujours obligatoire à ce panneau", correct: false },
  ], "S'arrêter par prudence à un cédez-le-passage n'est jamais fautif, contrairement à l'omission de céder réellement le passage.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de type B (rond, listel rouge) comme celui-ci impose :", [
    { text: "Une interdiction ferme, sauf dérogation locale signalée", correct: true },
    { text: "Une simple recommandation", correct: false },
    { text: "Une interdiction valable uniquement le week-end", correct: false },
  ], "Les panneaux d'interdiction ont une valeur réglementaire contraignante, pas seulement indicative.", { image: WM("B9i") }),
  q("signalisation", "Un passage à niveau annoncé par ce type de panonceau nécessite :", [
    { text: "De ralentir et de ne jamais s'engager si les barrières se ferment", correct: true },
    { text: "D'accélérer pour passer avant la fermeture", correct: false },
    { text: "De s'arrêter uniquement si un train est visible", correct: false },
  ], "S'engager sur un passage à niveau en cours de fermeture est extrêmement dangereux et interdit.", { image: WM("AB1") }),
  q("signalisation", "Quelles affirmations sur les panneaux carrés à fond bleu sont exactes ?", [
    { text: "Ils n'expriment jamais une interdiction, contrairement aux panneaux ronds à listel rouge", correct: true },
    { text: "Ils peuvent indiquer une obligation ou une information utile", correct: true },
    { text: "Ils sont réservés aux autoroutes uniquement", correct: false },
    { text: "Ils ont la même valeur qu'un panneau rond à listel rouge", correct: false },
  ], "La couleur et la forme encodent la nature juridique du panneau : le bleu carré n'interdit jamais.", { image: WM("B4") }),
  q("signalisation", "En zone rurale, ce panneau annonçant un carrefour vous rappelle surtout :", [
    { text: "De réduire votre vitesse par anticipation", correct: true },
    { text: "Que vous êtes automatiquement prioritaire", correct: false },
    { text: "Qu'aucune règle de priorité ne s'applique à ce carrefour", correct: false },
  ], "L'anticipation et la réduction de vitesse restent la meilleure réponse à tout carrefour annoncé, prioritaire ou non.", { image: WM("A14") }),
  q("signalisation", "Un panneau barré de bandes grises en diagonale, comme celui-ci, signale que :", [
    { text: "Une prescription antérieure prend fin à cet endroit", correct: true },
    { text: "Une nouvelle interdiction commence", correct: false },
    { text: "Une limitation de vitesse plus stricte commence", correct: false },
  ], "Le barré diagonal gris est le code visuel générique de fin de prescription en signalisation française.", { image: WM("B54") }),
  q("signalisation", "Un panneau à fond jaune losange indique :", [
    { text: "Une route à caractère prioritaire", correct: true },
    { text: "Une route interdite aux poids lourds", correct: false },
    { text: "Une aire de service prochaine", correct: false },
  ], "Le losange jaune signale et rappelle le caractère prioritaire d'une route sur les voies qui la croisent."),

  // Priorités
  
  q("priorites", "À un carrefour en croix sans aucune signalisation, deux véhicules arrivent en même temps sur des voies perpendiculaires. Qui passe en premier ?", [
    { text: "Celui venant de la droite", correct: true },
    { text: "Celui déjà engagé dans le carrefour", correct: false },
    { text: "Celui qui klaxonne en premier", correct: false },
  ], "La priorité à droite s'applique strictement en l'absence de toute signalisation contraire."),
  q("priorites", "Vous êtes sur une route prioritaire et un véhicule surgit d'un chemin privé sans signalisation. Vous devez :", [
    { text: "Rester attentif, mais vous restez prioritaire : c'est à lui de céder le passage", correct: true },
    { text: "Céder systématiquement le passage", correct: false },
    { text: "Céder le passage seulement si le véhicule est plus gros", correct: false },
  ], "Les sorties de propriétés privées ou chemins non classés doivent toujours céder le passage à la circulation de la route."),
  q("priorites", "Sur une bretelle d'insertion d'autoroute, vous devez :", [
    { text: "Vous insérer sans forcer le passage, en cédant si nécessaire aux véhicules déjà sur l'autoroute", correct: true },
    { text: "Vous imposer, les véhicules sur l'autoroute doivent vous laisser passer", correct: false },
    { text: "Vous arrêter sur la bretelle jusqu'à ce qu'un espace se libère", correct: false },
  ], "L'insertion sur autoroute impose de s'adapter au trafic existant, qui reste prioritaire."),
  q("priorites", "Deux véhicules souhaitent se croiser sur une route étroite en montagne. La priorité va :", [
    { text: "Au véhicule qui monte", correct: true },
    { text: "Au véhicule qui descend", correct: false },
    { text: "Au véhicule le plus léger", correct: false },
  ], "En montagne, le véhicule montant a la priorité car il lui est plus difficile de reculer ou de repartir en côte."),
  q("priorites", "Un cycliste roulant tout droit et une voiture tournant à droite arrivent en même temps sur la même voie. La priorité va :", [
    { text: "Au cycliste qui continue tout droit", correct: true },
    { text: "À la voiture qui tourne", correct: false },
    { text: "À la voiture, car elle est toujours prioritaire sur les cyclistes", correct: false },
  ], "Un véhicule qui change de direction doit céder le passage à celui qui poursuit sa trajectoire, cycliste inclus."),
  q("priorites", "À une intersection avec feux clignotants orange sur les deux axes, la règle qui s'applique est :", [
    { text: "La priorité à droite", correct: true },
    { text: "Le premier arrivé passe en premier", correct: false },
    { text: "L'arrêt obligatoire comme à un STOP", correct: false },
  ], "Le feu orange clignotant sur tous les axes équivaut à une absence de signalisation lumineuse : la priorité à droite reprend."),
  q("priorites", "Sur une place où plusieurs routes convergent sans priorité claire, la règle de base à appliquer est :", [
    { text: "La priorité à droite, systématiquement", correct: true },
    { text: "La priorité au véhicule le plus gros", correct: false },
    { text: "La priorité au véhicule arrivé en premier", correct: false },
  ], "En l'absence de marquage ou de panneau, la priorité à droite reste la règle universelle par défaut."),
  q("priorites", "Que priment les indications d'un agent qui règle la circulation à la main ?", [
    { text: "Elles priment sur la signalisation par panneaux", correct: true },
    { text: "Elles priment sur les feux tricolores", correct: true },
    { text: "Elles ne s'appliquent qu'en cas de panne des feux", correct: false },
    { text: "Elles sont facultatives si vous êtes normalement prioritaire", correct: false },
  ], "Les indications d'un agent régulateur ont toujours priorité sur tout autre type de signalisation, panneaux comme feux."),
  q("priorites", "Vous approchez d'un carrefour à sens giratoire où un panneau STOP est positionné à l'entrée. Vous devez :", [
    { text: "Marquer l'arrêt avant de vous insérer, même si l'anneau est dégagé", correct: true },
    { text: "Ralentir sans vous arrêter complètement", correct: false },
    { text: "Ralentir fortement, ce qui suffit à remplacer l'arrêt", correct: false },
  ], "Un STOP reste un STOP, même à l'entrée d'un giratoire : l'arrêt total est obligatoire."),

  // Vitesse & distances
  q("vitesse", "En zone 30, la vitesse est limitée à :", [
    { text: "30 km/h", correct: true },
    { text: "50 km/h avec prudence", correct: false },
    { text: "20 km/h", correct: false },
  ], "Les zones 30 sont des espaces urbains où la vitesse est réduite pour la sécurité des piétons et cyclistes.", { difficulty: "facile" }),
  q("vitesse", "Dans une zone de rencontre, les piétons :", [
    { text: "Sont prioritaires et peuvent circuler sur toute la largeur de la voie", correct: true },
    { text: "Doivent rester impérativement sur le trottoir", correct: false },
    { text: "Doivent rester sur le trottoir sauf urgence", correct: false },
  ], "Les zones de rencontre (limitées à 20 km/h) donnent la priorité totale aux piétons face aux véhicules."),
  q("vitesse", "Sur voie rapide (2x2 voies séparées, hors autoroute), la vitesse maximale par temps sec est :", [
    { text: "110 km/h", correct: true },
    { text: "130 km/h", correct: false },
    { text: "90 km/h", correct: false },
  ], "Les routes à chaussées séparées hors autoroute sont limitées à 110 km/h, contre 130 km/h sur autoroute."),
  q("vitesse", "Un excès de vitesse de plus de 50 km/h au-dessus de la limite autorisée peut entraîner :", [
    { text: "Une rétention immédiate du permis et une suspension", correct: true },
    { text: "Un simple avertissement pour un premier excès", correct: false },
    { text: "Une simple amende sans autre conséquence", correct: false },
  ], "Les grands excès de vitesse (+50 km/h) sont considérés comme des délits routiers graves, avec rétention immédiate possible."),
  q("vitesse", "Plus la vitesse double, la distance de freinage :", [
    { text: "Est multipliée par environ 4", correct: true },
    { text: "Double également", correct: false },
    { text: "Reste identique, seule la vitesse compte", correct: false },
  ], "La distance de freinage évolue avec le carré de la vitesse : rouler deux fois plus vite multiplie la distance de freinage par 4 environ."),
  q("vitesse", "Le temps de réaction moyen d'un conducteur attentif est d'environ :", [
    { text: "1 seconde", correct: true },
    { text: "5 secondes", correct: false },
    { text: "0,1 seconde", correct: false },
  ], "1 seconde est le temps de réaction moyen retenu ; il augmente fortement avec la fatigue, l'alcool ou la distraction."),
  q("vitesse", "Aux abords d'un établissement scolaire à l'heure de sortie des classes, vous devez :", [
    { text: "Réduire fortement votre vitesse", correct: true },
    { text: "Redoubler de vigilance face aux comportements imprévisibles des enfants", correct: true },
    { text: "Maintenir la vitesse autorisée sans précaution particulière", correct: false },
    { text: "Klaxonner pour signaler votre passage", correct: false },
  ], "Les zones scolaires imposent une prudence renforcée du fait de la présence d'enfants imprévisibles."),
  q("vitesse", "Sur chaussée enneigée ou verglacée, la distance de freinage peut être multipliée par :", [
    { text: "Jusqu'à 10 par rapport à une chaussée sèche", correct: true },
    { text: "2 au maximum", correct: false },
    { text: "5 au maximum", correct: false },
  ], "L'adhérence sur neige ou verglas est très fortement réduite, imposant une distance de sécurité largement augmentée."),

 // Le conducteur
  q("conducteur", "Le permis à points français compte, pour un conducteur expérimenté, un capital maximal de :", [
    { text: "12 points", correct: true },
    { text: "20 points", correct: false },
    { text: "6 points", correct: false },
  ], "Le capital maximal, atteint après la période probatoire sans infraction, est de 12 points."),
  q("conducteur", "Conduire sous l'emprise de somnifères ou de certains antihistaminiques peut :", [
    { text: "Altérer la vigilance de façon comparable à l'alcool", correct: true },
    { text: "N'avoir aucun effet si le médicament est en vente libre", correct: false },
    { text: "N'être dangereux que si le médicament est sous ordonnance", correct: false },
  ], "De nombreux médicaments courants, même sans ordonnance, affectent la vigilance et les réflexes au volant."),
  q("conducteur", "Un conducteur novice (moins de 3 ans de permis) impliqué dans un accident responsable avec alcoolémie positive risque :", [
    { text: "Des sanctions aggravées du fait de son statut de conducteur probatoire", correct: true },
    { text: "Les mêmes sanctions qu'un conducteur expérimenté, sans distinction", correct: false },
    { text: "Une simple amende réduite du fait de son inexpérience", correct: false },
  ], "Le statut de jeune conducteur, associé à une tolérance zéro sur l'alcool, entraîne des sanctions renforcées en cas d'infraction."),
  q("conducteur", "Concernant le kit mains libres ou l'oreillette au volant :", [
    { text: "Son usage est autorisé par la loi", correct: true },
    { text: "Il reste une source de distraction cognitive à limiter", correct: true },
    { text: "Il est totalement interdit dans tous les cas", correct: false },
    { text: "Il supprime tout risque de distraction au volant", correct: false },
  ], "Le kit mains libres est légal, contrairement au téléphone tenu en main, mais la distraction cognitive qu'il engendre demeure un risque réel."),
  q("conducteur", "Prêter son véhicule à une personne non titulaire du permis adapté vous rend :", [
    { text: "Potentiellement responsable en cas d'infraction ou d'accident", correct: true },
    { text: "Jamais responsable, seul le conducteur l'est", correct: false },
    { text: "Responsable uniquement en cas d'accident matériel", correct: false },
  ], "Le prêteur du véhicule engage sa responsabilité, notamment en confiant son véhicule à une personne non autorisée à conduire."),

  // Autres usagers
  q("usagers", "Face à un cavalier sur la route, vous devez :", [
    { text: "Ralentir fortement et le dépasser à bonne distance et sans bruit excessif", correct: true },
    { text: "Klaxonner pour signaler votre présence", correct: false },
    { text: "Accélérer pour le dépasser rapidement", correct: false },
  ], "Les chevaux peuvent être effrayés par le bruit ; il faut réduire sa vitesse et garder ses distances lors du dépassement."),
  q("usagers", "Face à un groupe scolaire encadré traversant la rue, vous devez :", [
    { text: "Vous arrêter et attendre que tout le groupe ait traversé", correct: true },
    { text: "Klaxonner pour accélérer leur passage", correct: false },
    { text: "Continuer doucement en les évitant", correct: false },
  ], "La prudence et la patience sont de rigueur face à un groupe d'enfants encadré traversant la chaussée."),
  q("usagers", "Un poids lourd qui amorce un virage à droite peut avoir besoin de :", [
    { text: "Déborder légèrement sur la gauche avant de tourner, du fait de son gabarit", correct: true },
    { text: "Ne jamais dévier de sa trajectoire", correct: false },
    { text: "Toujours tourner en restant strictement à droite", correct: false },
  ], "Le gabarit des poids lourds impose parfois un rayon de braquage nécessitant un léger débordement, à anticiper par les autres usagers."),
  q("usagers", "Face à l'angle mort d'un poids lourd, que faut-il retenir ?", [
    { text: "Le conducteur du poids lourd peut ne pas vous voir dans cette zone", correct: true },
    { text: "Il faut éviter de stationner ou circuler durablement dans cet angle", correct: true },
    { text: "Vous serez toujours vu, quelle que soit votre position", correct: false },
    { text: "Cela ne concerne que les motards", correct: false },
  ], "Les angles morts des poids lourds sont une cause fréquente d'accidents impliquant piétons et cyclistes, notamment aux intersections."),
  q("usagers", "Face à des engins agricoles lents sur une route de campagne, vous devez :", [
    { text: "Patienter et ne dépasser qu'avec une visibilité et un espace suffisants", correct: true },
    { text: "Les dépasser rapidement dès que possible, quelle que soit la visibilité", correct: false },
    { text: "Les doubler même en cas de virage sans visibilité", correct: false },
  ], "Les engins agricoles, souvent larges et lents, imposent prudence et patience avant tout dépassement."),

  // Premiers secours
  q("secours", "Avant de porter secours, la vérification de la sécurité concerne :", [
    { text: "Vous-même, les victimes et les autres usagers de la route", correct: true },
    { text: "Uniquement les victimes de l'accident", correct: false },
    { text: "Uniquement les autres usagers de la route", correct: false },
  ], "La protection s'exerce à 360°, en incluant sa propre sécurité avant toute intervention."),
  q("secours", "Que faire face à une victime qui saigne abondamment (hémorragie externe) ?", [
    { text: "Comprimer fortement la plaie avec un tissu propre", correct: true },
    { text: "Attendre les secours sans intervenir", correct: false },
    { text: "Rincer abondamment la plaie à l'eau avant toute autre chose", correct: false },
  ], "La compression directe de la plaie est le geste de premiers secours prioritaire face à une hémorragie visible."),
  q("secours", "Une victime qui ne respire plus et ne réagit pas nécessite :", [
    { text: "Un massage cardiaque immédiat en attendant les secours", correct: true },
    { text: "D'être placée en position latérale de sécurité", correct: false },
    { text: "De lui donner à boire pour la réanimer", correct: false },
  ], "La PLS ne s'applique qu'aux victimes inconscientes qui respirent ; l'arrêt respiratoire impose un massage cardiaque."),
  q("secours", "En cas d'incendie du véhicule après un accident, la priorité est de :", [
    { text: "Évacuer les occupants le plus rapidement possible avant toute autre action", correct: true },
    { text: "Éteindre le feu avant d'évacuer les occupants", correct: false },
    { text: "Récupérer les affaires personnelles avant de sortir", correct: false },
  ], "La vie humaine prime : l'évacuation des occupants est prioritaire face à un départ de feu."),
  q("secours", "Après un accident, retirer le casque d'un motard blessé est :", [
    { text: "Déconseillé sauf en cas d'urgence vitale absolue (arrêt respiratoire)", correct: true },
    { text: "Systématiquement recommandé pour l'identifier", correct: false },
    { text: "Toujours interdit, même en cas d'urgence vitale", correct: false },
  ], "Retirer un casque peut aggraver une possible lésion cervicale ; ce geste est réservé aux situations d'urgence vitale."),

  // Mécanique
  q("mecanique", "Une pression de pneus insuffisante entraîne principalement :", [
    { text: "Une usure irrégulière et une distance de freinage allongée", correct: true },
    { text: "Une meilleure adhérence sur route mouillée", correct: false },
    { text: "Une réduction de la consommation de carburant", correct: false },
  ], "Un pneu sous-gonflé se déforme anormalement, réduisant l'adhérence et augmentant la consommation et l'usure."),
  q("mecanique", "Le liquide de frein doit être contrôlé et remplacé régulièrement car :", [
    { text: "Il absorbe l'humidité avec le temps, ce qui réduit son efficacité", correct: true },
    { text: "Il ne s'use jamais", correct: false },
    { text: "Il ne doit être changé qu'en cas de fuite visible", correct: false },
  ], "Le liquide de frein hygroscopique perd en performance avec le temps, d'où un remplacement périodique recommandé."),
  q("mecanique", "Un bruit de grincement métallique au freinage indique généralement :", [
    { text: "Des plaquettes de frein usées à vérifier rapidement", correct: true },
    { text: "Un simple bruit sans conséquence", correct: false },
    { text: "Un problème lié uniquement aux pneus", correct: false },
  ], "Ce bruit signale souvent une usure avancée des plaquettes, à contrôler sans tarder pour la sécurité du freinage."),
  q("mecanique", "Concernant les aides à la conduite (ADAS) comme le régulateur adaptatif :", [
    { text: "Elles assistent le conducteur sans le dispenser de sa vigilance", correct: true },
    { text: "La responsabilité du conducteur reste entière malgré leur usage", correct: true },
    { text: "Elles permettent de ne plus surveiller la route", correct: false },
    { text: "Elles rendent le conducteur juridiquement irresponsable en cas d'accident", correct: false },
  ], "Les aides à la conduite restent des outils d'assistance ; la responsabilité et la vigilance du conducteur demeurent entières."),

  // Environnement & éco-conduite
  q("environnement", "Rouler à régime moteur élevé et changer de vitesse tardivement :", [
    { text: "Augmente la consommation de carburant inutilement", correct: true },
    { text: "Économise du carburant", correct: false },
    { text: "Prolonge la durée de vie du moteur", correct: false },
  ], "Un changement de rapport anticipé, à régime modéré, réduit la consommation de carburant."),
  q("environnement", "Le covoiturage contribue à la réduction de l'impact environnemental car il :", [
    { text: "Diminue le nombre de véhicules en circulation pour un même trajet", correct: true },
    { text: "N'a aucun effet sur les émissions globales", correct: false },
    { text: "Double les émissions par trajet effectué", correct: false },
  ], "Réduire le nombre de véhicules par trajet effectué diminue mécaniquement les émissions globales de CO2."),
  q("environnement", "Une surcharge inutile du véhicule (poids superflu) entraîne :", [
    { text: "Une surconsommation de carburant", correct: true },
    { text: "Aucune conséquence notable", correct: false },
    { text: "Une meilleure stabilité en virage", correct: false },
  ], "Tout poids supplémentaire augmente l'effort du moteur et donc la consommation de carburant."),

  // Sécurité & chargement
  q("securite", "Les appuie-têtes doivent être réglés :", [
    { text: "À hauteur des yeux ou du sommet du crâne pour limiter le coup du lapin", correct: true },
    { text: "Le plus bas possible pour le confort", correct: false },
    { text: "Uniquement pour les longs trajets", correct: false },
  ], "Un appuie-tête mal réglé augmente fortement le risque de traumatisme cervical en cas de choc arrière."),
  q("securite", "Comment bien répartir un chargement dans le véhicule ?", [
    { text: "Les objets lourds en bas et proches du centre de gravité", correct: true },
    { text: "Avec un arrimage solide pour éviter tout déplacement", correct: true },
    { text: "N'importe quelle disposition, cela n'a pas d'importance", correct: false },
    { text: "Toujours à l'arrière pour libérer l'avant", correct: false },
  ], "Une mauvaise répartition ou un mauvais arrimage du poids affecte la stabilité et la tenue de route, notamment dans les virages."),
  q("securite", "Un pare-brise fissuré dans le champ de vision du conducteur :", [
    { text: "Doit être réparé ou remplacé rapidement, il peut être un motif de contre-visite au contrôle technique", correct: true },
    { text: "N'a pas d'incidence tant qu'on y voit encore", correct: false },
    { text: "N'est problématique que s'il est totalement brisé", correct: false },
  ], "Une fissure dans le champ de vision principal altère la visibilité et constitue un défaut majeur au contrôle technique."),

  // Divers
  q("divers", "Le stationnement en zone bleue nécessite :", [
    { text: "L'affichage d'un disque de stationnement indiquant l'heure d'arrivée", correct: true },
    { text: "Un paiement horodateur obligatoire", correct: false },
    { text: "Un ticket horodateur payant", correct: false },
  ], "La zone bleue est gratuite mais limitée dans le temps, contrôlée via un disque de stationnement."),
  q("divers", "Quels documents devez-vous pouvoir présenter en cas de contrôle routier ?", [
    { text: "Le permis de conduire", correct: true },
    { text: "Le certificat d'immatriculation (carte grise)", correct: true },
    { text: "Uniquement une pièce d'identité", correct: false },
    { text: "Uniquement l'attestation d'assurance", correct: false },
  ], "Permis de conduire et certificat d'immatriculation restent les documents de base exigibles lors d'un contrôle."),
  q("divers", "Le non-respect d'un feu rouge est sanctionné par :", [
    { text: "Une amende et un retrait de points, quel que soit le trafic au moment des faits", correct: true },
    { text: "Une simple remarque si aucun véhicule n'est présent", correct: false },
    { text: "Un simple avertissement pour une première infraction", correct: false },
  ], "Le franchissement d'un feu rouge reste une infraction sanctionnée indépendamment de la présence ou non d'autres véhicules."),
  q("divers", "Le contrôle technique vérifie notamment :", [
    { text: "Le freinage, la direction, l'éclairage et les émissions polluantes", correct: true },
    { text: "Uniquement l'état esthétique de la carrosserie", correct: false },
    { text: "Uniquement le niveau sonore du moteur", correct: false },
  ], "Le contrôle technique porte sur des points de sécurité et environnementaux définis réglementairement."),
  q("divers", "Le certificat d'immatriculation (carte grise) doit être mis à jour en cas de :", [
    { text: "Changement d'adresse ou de propriétaire du véhicule", correct: true },
    { text: "Simple changement de pneus", correct: false },
    { text: "Revente uniquement à un professionnel", correct: false },
  ], "Toute modification d'état civil, d'adresse ou de propriété du véhicule impose une mise à jour de la carte grise."),


  /* ===== VAGUE 3 ===== */

  // Signalisation

  q("signalisation", "Vous approchez de ce panneau STOP à un carrefour en Y. Vous devez :", [
    { text: "Vous arrêter au niveau de la ligne d'effet des feux ou de la marque au sol, puis céder le passage", correct: true },
    { text: "Ralentir uniquement jusqu'à la vitesse d'un pas", correct: false },
    { text: "Vous arrêter n'importe où avant le carrefour", correct: false },
  ], "L'arrêt doit se faire précisément au niveau du marquage prévu à cet effet, pas n'importe où avant le carrefour.", { image: WM("AB4") }),
  q("signalisation", "Un panneau cédez-le-passage combiné à un panneau de priorité annonce que la route que vous croisez est :", [
    { text: "Une route à caractère prioritaire clairement identifiée", correct: true },
    { text: "Une impasse", correct: false },
    { text: "Une route sans importance particulière", correct: false },
  ], "Ces panneaux sont souvent associés pour renforcer l'information sur le statut prioritaire de la route croisée.", { image: WM("AB3a") }),
  q("signalisation", "Ce panneau de danger triangulaire doit être respecté même si :", [
    { text: "Vous connaissez très bien la route et pensez ne pas avoir besoin d'être averti", correct: true },
    { text: "Uniquement si vous ne connaissez pas la route", correct: false },
    { text: "Uniquement de nuit", correct: false },
  ], "La signalisation de danger s'applique à tous les usagers, quelle que soit leur connaissance du trajet.", { image: WM("A4") }),
  q("signalisation", "Ce panneau annonçant un carrefour vous impose de vérifier particulièrement :", [
    { text: "Les véhicules arrivant des voies latérales avant de vous engager", correct: true },
    { text: "Uniquement votre rétroviseur", correct: false },
    { text: "Uniquement la voie que vous quittez", correct: false },
  ], "L'anticipation d'un carrefour implique une vérification active de toutes les directions d'où peuvent surgir d'autres véhicules.", { image: WM("A14") }),
  q("signalisation", "Concernant un panneau d'obligation à fond bleu, comme celui-ci :", [
    { text: "Il doit être respecté impérativement", correct: true },
    { text: "Il a la même valeur contraignante qu'un panneau d'interdiction", correct: true },
    { text: "Il ne s'applique que si la circulation le permet", correct: false },
    { text: "Il est purement indicatif, sans caractère obligatoire", correct: false },
  ], "Les panneaux d'obligation ont la même valeur contraignante que les panneaux d'interdiction, malgré leur couleur différente.", { image: WM("B4") }),
  q("signalisation", "Face à un panneau rond à listel rouge sans pictogramme identifiable de loin, la meilleure attitude est de :", [
    { text: "Ralentir pour l'identifier clairement, une interdiction s'applique probablement", correct: true },
    { text: "L'ignorer si vous ne le reconnaissez pas immédiatement", correct: false },
    { text: "Accélérer pour vous en éloigner rapidement", correct: false },
  ], "Face à un doute sur un panneau, la prudence impose de ralentir plutôt que d'ignorer une possible interdiction.", { image: WM("B9i") }),
  q("signalisation", "Ce panneau annonçant un passage à niveau signifie qu'il faut :", [
    { text: "Ne jamais s'arrêter sur les voies, même en cas de ralentissement du trafic en aval", correct: true },
    { text: "S'arrêter n'importe où pour observer les trains", correct: false },
    { text: "S'arrêter uniquement si un train est visible au loin", correct: false },
  ], "Il ne faut jamais s'immobiliser sur un passage à niveau, même en cas de bouchon de l'autre côté.", { image: WM("AB1") }),
  q("signalisation", "Les panneaux de signalisation en France sont définis par :", [
    { text: "L'instruction interministérielle sur la signalisation routière", correct: true },
    { text: "Chaque commune selon ses propres règles", correct: false },
    { text: "Chaque département indépendamment", correct: false },
  ], "La signalisation routière obéit à un cadre réglementaire national unique, garantissant son uniformité sur tout le territoire."),

  // Priorité
    q("priorites", "Un véhicule circulant en sens interdit dans une rue à sens unique doit :", [
    { text: "Ne jamais s'y engager, quelle que soit l'urgence perçue", correct: true },
    { text: "Peut s'y engager brièvement si la rue est vide", correct: false },
    { text: "Peut s'y engager la nuit si aucune circulation n'est visible", correct: false },
  ], "Le sens interdit ne souffre d'aucune exception liée à l'appréciation personnelle du conducteur."),
  q("priorites", "Vous voulez déboîter pour dépasser un véhicule. La priorité de circulation appartient :", [
    { text: "Aux véhicules déjà engagés sur la voie que vous souhaitez emprunter", correct: true },
    { text: "À vous, car vous avez mis votre clignotant", correct: false },
    { text: "Aux piétons uniquement dans ce cas", correct: false },
  ], "Mettre son clignotant signale une intention mais ne crée aucune priorité ; il faut s'assurer que la voie est libre."),
  q("priorites", "À un carrefour équipé de feux tricolores en panne totale (éteints), vous devez :", [
    { text: "Appliquer les règles de priorité comme si aucun feu n'existait (priorité à droite)", correct: true },
    { text: "Vous arrêter et attendre le retour du courant", correct: false },
    { text: "Laisser passer le véhicule le plus rapide", correct: false },
  ], "Un feu éteint équivaut à une absence de signalisation lumineuse : les règles de priorité habituelles reprennent leur cours."),
  q("priorites", "Sur une route à trois voies dont la voie centrale est réservée au dépassement alterné, la priorité pour l'utiliser va :", [
    { text: "Au véhicule qui s'y engage en premier après s'être assuré qu'elle est libre", correct: true },
    { text: "Toujours au sens de circulation le plus fréquenté", correct: false },
    { text: "Toujours aux poids lourds", correct: false },
  ], "La voie centrale de dépassement alterné doit être utilisée avec une extrême prudence et en confirmant sa disponibilité avant de s'y engager."),
  q("priorites", "Un cycliste circulant dans un sas vélo à un feu rouge a :", [
    { text: "La priorité pour démarrer avant les véhicules motorisés au passage au vert", correct: true },
    { text: "Aucune priorité particulière sur les voitures", correct: false },
    { text: "La priorité uniquement aux heures de pointe", correct: false },
  ], "Le sas vélo permet aux cyclistes de se positionner en avant des véhicules motorisés et de démarrer en premier au feu vert."),
  q("priorites", "Vous êtes engagé dans un carrefour et la circulation se bloque de l'autre côté. Que devez-vous faire ?", [
    { text: "Ne jamais vous engager si vous risquez de bloquer le carrefour au changement de feu", correct: true },
    { text: "Attendre que la voie se libère avant de vous engager", correct: true },
    { text: "Vous avancer quand même si le feu est vert pour vous", correct: false },
    { text: "Klaxonner pour que les véhicules devant vous dégagent", correct: false },
  ], "S'engager dans un carrefour qu'on risque de bloquer, même au feu vert, est une infraction et un danger pour la fluidité."),
  q("priorites", "Un véhicule effectuant une marche arrière dans une rue doit céder le passage :", [
    { text: "À tous les autres usagers, y compris ceux arrivant de l'arrière", correct: true },
    { text: "Uniquement aux piétons", correct: false },
    { text: "Uniquement aux véhicules prioritaires", correct: false },
  ], "Toute manœuvre de recul impose de céder le passage à l'ensemble des usagers, la manœuvre étant considérée comme non prioritaire."),

  // Vitesse & distances
  q("vitesse", "Un panneau de limitation de vitesse avec la mention « rappel » signifie :", [
    { text: "Que cette limitation était déjà en vigueur et continue de s'appliquer", correct: true },
    { text: "Qu'une nouvelle limitation vient d'être instaurée", correct: false },
    { text: "Que la limitation est supprimée à cet endroit", correct: false },
  ], "Le panonceau « rappel » confirme qu'aucune nouvelle règle n'est instaurée, la précédente limitation restant simplement rappelée."),
  q("vitesse", "Circuler à une vitesse excessive par rapport aux conditions (sans dépasser la limite affichée) est :", [
    { text: "Une infraction, l'allure doit toujours être adaptée aux circonstances", correct: true },
    { text: "Toujours autorisé tant que la limite n'est pas dépassée", correct: false },
    { text: "Toléré si aucun autre véhicule n'est présent", correct: false },
  ], "La vitesse doit être adaptée aux conditions de circulation, de visibilité et d'état de la route, indépendamment de la limite affichée."),
  q("vitesse", "La distance d'arrêt totale correspond à :", [
    { text: "La distance parcourue pendant le temps de réaction additionnée à la distance de freinage", correct: true },
    { text: "Uniquement la distance de freinage", correct: false },
    { text: "Uniquement le temps de réaction, converti en distance", correct: false },
  ], "La distance d'arrêt inclut le temps de réaction du conducteur, souvent sous-estimé, en plus de la distance de freinage pure."),
  q("vitesse", "Rouler de nuit impose généralement de :", [
    { text: "Adapter sa vitesse à la portée de ses phares", correct: true },
    { text: "Rouler à la même vitesse que de jour sans ajustement", correct: false },
    { text: "Rouler en feux de route en permanence, même en ville", correct: false },
  ], "La visibilité nocturne étant réduite à la portée des phares, la vitesse doit permettre de s'arrêter dans cette distance."),
  q("vitesse", "Un panonceau de type « camping-cars et poids lourds » sous un panneau de vitesse signifie que :", [
    { text: "La limitation indiquée s'applique spécifiquement à ces catégories de véhicules", correct: true },
    { text: "Ces véhicules sont interdits de circulation", correct: false },
    { text: "Il s'agit d'une simple recommandation non obligatoire", correct: false },
  ], "Ce panonceau restreint le champ d'application de la limitation aux catégories de véhicules mentionnées."),
  q("vitesse", "En cas de vent fort latéral, notamment pour les véhicules hauts, vous devez :", [
    { text: "Réduire votre vitesse pour garder le contrôle de la trajectoire", correct: true },
    { text: "Être particulièrement vigilant en sortie de zone abritée (pont, tranchée)", correct: true },
    { text: "Accélérer pour traverser plus vite la zone exposée", correct: false },
    { text: "Serrer davantage le volant sans ralentir", correct: false },
  ], "Le vent latéral peut déstabiliser un véhicule, en particulier à la sortie brutale d'une zone abritée ; réduire la vitesse permet de conserver la maîtrise de la trajectoire."),

  // Le conducteur
  q("conducteur", "La conduite accompagnée (AAC) permet à un jeune conducteur de :", [
    { text: "Réduire la durée de la période probatoire à 2 ans au lieu de 3", correct: true },
    { text: "Obtenir directement le permis sans examen pratique", correct: false },
    { text: "Supprimer totalement la période probatoire", correct: false },
  ], "L'apprentissage anticipé de la conduite raccourcit la période probatoire en contrepartie d'une expérience de conduite accompagnée plus longue."),
  q("conducteur", "Le délit de fuite après un accident consiste à :", [
    { text: "Quitter les lieux d'un accident pour échapper à sa responsabilité", correct: true },
    { text: "S'arrêter pour porter secours puis repartir", correct: false },
    { text: "Ne s'appliquer que si un blessé est présent", correct: false },
  ], "Le délit de fuite est caractérisé par la volonté de se soustraire à ses responsabilités après un accident, quelle qu'en soit la gravité."),
  q("conducteur", "Un conducteur qui refuse de se soumettre à un contrôle d'alcoolémie :", [
    { text: "Commet une infraction sanctionnée comme une conduite en état d'ivresse avérée", correct: true },
    { text: "N'encourt aucune sanction, le refus étant un droit", correct: false },
    { text: "N'encourt qu'une amende légère sans autre conséquence", correct: false },
  ], "Le refus de se soumettre aux vérifications est assimilé pénalement à une infraction d'alcoolémie positive."),
  q("conducteur", "L'assurance responsabilité civile automobile est :", [
    { text: "Obligatoire pour tout véhicule terrestre à moteur", correct: true },
    { text: "Facultative si le véhicule est peu utilisé", correct: false },
    { text: "Facultative pour les véhicules de collection", correct: false },
  ], "L'assurance au tiers minimum est une obligation légale pour tout véhicule motorisé circulant ou même simplement stationné sur la voie publique."),
  q("conducteur", "Un conducteur ayant une invalidation de permis pour solde de points nul doit attendre, avant de le repasser, un délai minimal de :", [
    { text: "6 mois (ou plus selon les cas de récidive)", correct: true },
    { text: "Aucun délai, il peut le repasser immédiatement", correct: false },
    { text: "3 mois dans tous les cas", correct: false },
  ], "Un délai minimal s'impose avant de pouvoir representer les examens, pouvant être allongé en cas de récidive."),


  // Autres usagers
  q("usagers", "Sur une piste cyclable, un véhicule motorisé :", [
    { text: "N'a en principe pas le droit de circuler ni de stationner", correct: true },
    { text: "Peut circuler librement s'il n'y a pas de cycliste", correct: false },
    { text: "Peut y circuler la nuit uniquement", correct: false },
  ], "Les pistes cyclables sont réservées aux cycles, sauf exception explicitement signalée."),
  q("usagers", "Un piéton qui traverse en dehors d'un passage protégé, à moins de 50 mètres de celui-ci :", [
    { text: "Est en infraction et doit céder le passage aux véhicules", correct: true },
    { text: "A toujours la priorité, où qu'il traverse", correct: false },
    { text: "Doit simplement lever la main pour être prioritaire", correct: false },
  ], "L'obligation d'utiliser un passage protégé proche s'impose légalement aux piétons ; hors de cette zone, la prudence reste partagée."),
  q("usagers", "Les trottinettes électriques en circulation sont soumises à une limitation de vitesse de :", [
    { text: "25 km/h", correct: true },
    { text: "45 km/h", correct: false },
    { text: "20 km/h", correct: false },
  ], "Les engins de déplacement personnel motorisés (EDPM) sont bridés réglementairement à 25 km/h maximum."),
  q("usagers", "Face à un side-car ou un attelage moto avec remorque, vous devez tenir compte :", [
    { text: "D'un gabarit et d'une trajectoire différents d'une moto classique", correct: true },
    { text: "D'une largeur souvent plus importante qu'une moto seule", correct: true },
    { text: "D'aucune différence particulière avec une moto standard", correct: false },
    { text: "Uniquement d'un problème de poids, sans effet sur la largeur", correct: false },
  ], "Ces véhicules ont un comportement routier different (largeur, stabilité) qu'il faut anticiper lors d'un dépassement ou croisement."),

  // Premiers secours
  q("secours", "Une brûlure causée par une pièce de moteur chaude doit être immédiatement :", [
    { text: "Refroidie à l'eau tempérée pendant plusieurs minutes", correct: true },
    { text: "Recouverte de crème grasse", correct: false },
    { text: "Percée pour évacuer la chaleur", correct: false },
  ], "Le refroidissement immédiat à l'eau limite la profondeur et la gravité d'une brûlure thermique."),
  q("secours", "En présence de plusieurs victimes lors d'un accident, il faut :", [
    { text: "Trier les priorités selon la gravité apparente avant d'agir", correct: true },
    { text: "S'occuper de la première victime rencontrée uniquement", correct: false },
    { text: "Toujours traiter en premier la victime la plus proche de vous", correct: false },
  ], "Le triage des victimes selon l'urgence vitale est un principe fondamental des premiers secours en situation multiple."),
  q("secours", "L'alerte aux secours doit être donnée :", [
    { text: "Le plus tôt possible, avant même certains gestes de premiers secours si nécessaire", correct: true },
    { text: "Seulement après avoir stabilisé complètement la situation", correct: false },
    { text: "Uniquement par SMS pour ne pas déranger la ligne", correct: false },
  ], "Alerter rapidement permet de déclencher au plus vite l'intervention de secours professionnels qualifiés."),

  // Mécanique
  q("mecanique", "L'huile moteur doit être vérifiée et vidangée régulièrement car elle :", [
    { text: "Se dégrade avec le temps et l'usage, perdant ses propriétés lubrifiantes", correct: true },
    { text: "Ne s'use jamais tant que le niveau reste correct", correct: false },
    { text: "Reste identique indéfiniment si le moteur est récent", correct: false },
  ], "Une huile dégradée protège moins efficacement le moteur, même si son niveau semble suffisant."),
  q("mecanique", "Un voyant orange « ABS » allumé au tableau de bord signifie :", [
    { text: "Un dysfonctionnement du système antiblocage des roues à faire vérifier", correct: true },
    { text: "Que le véhicule ne peut plus freiner du tout", correct: false },
    { text: "Un simple défaut d'éclairage arrière", correct: false },
  ], "Un défaut ABS n'empêche pas le freinage classique mais désactive l'assistance antiblocage, à faire réparer rapidement."),
  q("mecanique", "Concernant les phares de jour (feux diurnes) :", [
    { text: "Ils améliorent la visibilité du véhicule par les autres usagers", correct: true },
    { text: "Ils ne remplacent pas les feux de croisement la nuit", correct: true },
    { text: "Ils éclairent efficacement la route de nuit", correct: false },
    { text: "Ils servent uniquement de feux de brouillard", correct: false },
  ], "Les feux diurnes servent uniquement à rendre le véhicule plus visible en journée, sans fonction d'éclairage nocturne."),

  // Environnement
  q("environnement", "L'indice Crit'Air 0 correspond à :", [
    { text: "Un véhicule 100% électrique ou à hydrogène", correct: true },
    { text: "Un véhicule diesel ancien", correct: false },
    { text: "Un véhicule essence récent", correct: false },
  ], "La vignette Crit'Air 0 (verte) est réservée aux véhicules sans émission directe de polluants."),
  q("environnement", "Une conduite souple, sans accélérations ni freinages brusques, permet de réduire :", [
    { text: "La consommation de carburant et l'usure prématurée des organes mécaniques", correct: true },
    { text: "Uniquement le bruit du moteur", correct: false },
    { text: "Uniquement l'usure des pneus", correct: false },
  ], "L'éco-conduite préserve à la fois le budget carburant et la longévité du véhicule."),


  // Sécurité & chargement
  q("securite", "Un siège auto pour bébé doit être installé :", [
    { text: "Dos à la route le plus longtemps possible selon les recommandations", correct: true },
    { text: "Toujours face à la route dès la naissance", correct: false },
    { text: "Attaché uniquement avec la ceinture adulte, sans siège spécifique", correct: false },
  ], "L'installation dos à la route protège mieux la nuque encore fragile du nourrisson en cas de choc frontal."),
  q("securite", "Le port du casque à vélo, pour un adulte, est :", [
    { text: "Non obligatoire mais fortement recommandé", correct: true },
    { text: "Obligatoire dans tous les cas", correct: false },
    { text: "Interdit pour les adultes", correct: false },
  ], "Le casque n'est obligatoire en France que pour les enfants de moins de 12 ans à vélo ; il reste vivement conseillé pour tous."),

  // Divers
  q("divers", "Un panneau « sens interdit sauf riverains » autorise à circuler :", [
    { text: "Uniquement les résidents ou ayants droit de la zone concernée", correct: true },
    { text: "Tout véhicule à condition de rouler lentement", correct: false },
    { text: "Tout véhicule pendant la journée uniquement", correct: false },
  ], "Cette signalisation restreint l'accès aux seuls riverains ou usagers ayant une raison légitime de s'y trouver."),
  q("divers", "L'arrêt d'un véhicule, contrairement au stationnement, se caractérise par :", [
    { text: "La présence du conducteur au volant ou à proximité immédiate, prêt à repartir", correct: true },
    { text: "Une durée strictement inférieure à 5 minutes", correct: false },
    { text: "Le fait d'être autorisé n'importe où sur la chaussée", correct: false },
  ], "La distinction entre arrêt et stationnement repose sur la présence du conducteur, pas uniquement sur la durée."),
  q("divers", "Un péage d'autoroute impose de :", [
    { text: "Adapter sa vitesse et respecter les distances de sécurité à l'approche des barrières", correct: true },
    { text: "Accélérer pour passer rapidement les barrières", correct: false },
    { text: "Ignorer les distances de sécurité, la zone étant sécurisée", correct: false },
  ], "Les zones de péage concentrent ralentissements et changements de voie fréquents, nécessitant une vigilance accrue."),
  q("divers", "En cas de forte pluie réduisant fortement la visibilité, le comportement recommandé est de :", [
    { text: "Réduire sa vitesse et augmenter les distances de sécurité, voire s'arrêter en lieu sûr si nécessaire", correct: true },
    { text: "Activer ses feux de détresse tout en continuant à rouler normalement", correct: false },
    { text: "Rouler au centre de la chaussée pour mieux voir", correct: false },
  ], "Les feux de détresse en roulant ne sont pas recommandés sauf cas très spécifiques ; mieux vaut ralentir ou s'arrêter en sécurité."),

  /* ===== VAGUE 4 ===== */

  // Signalisation
  q("signalisation", "Deux panneaux STOP se succèdent à quelques mètres d'intervalle sur un même axe. Vous devez :", [
    { text: "Marquer l'arrêt à chacun d'eux, sans exception", correct: true },
    { text: "Ne vous arrêter qu'une seule fois", correct: false },
    { text: "S'arrêter seulement au premier, le second étant redondant", correct: false },
  ], "Chaque panneau STOP rencontré impose un arrêt indépendant, même rapproché d'un autre.", { image: WM("AB4") }),
  q("signalisation", "Ce panneau de cédez-le-passage est associé à un panneau annonçant la distance jusqu'au carrefour. Cela sert à :", [
    { text: "Vous permettre d'anticiper votre ralentissement", correct: true },
    { text: "Indiquer une zone de stationnement", correct: false },
    { text: "Signaler un radar automatique", correct: false },
  ], "Le panonceau de distance permet une meilleure anticipation de la manœuvre à effectuer.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger représentant une chaussée glissante impose :", [
    { text: "De réduire sa vitesse et d'éviter les manœuvres brusques", correct: true },
    { text: "De rouler plus vite pour traverser rapidement la zone", correct: false },
    { text: "De klaxonner pour prévenir les autres usagers", correct: false },
  ], "Face à un risque de perte d'adhérence, la prudence et la douceur de conduite sont essentielles.", { image: WM("A4") }),
  q("signalisation", "Ce panneau annonçant un carrefour à sens giratoire proche impose de :", [
    { text: "Anticiper une réduction de vitesse et une cession de priorité à l'anneau", correct: true },
    { text: "Vous arrêter immédiatement à la vue du panneau", correct: false },
    { text: "Accélérer pour vous y engager avant les autres", correct: false },
  ], "Le panneau annonce, il n'impose pas d'arrêt immédiat, mais une préparation à la manœuvre à venir.", { image: WM("A14") }),
  q("signalisation", "Un panneau carré bleu représentant un parking indique :", [
    { text: "La présence d'une zone de stationnement autorisée", correct: true },
    { text: "Une interdiction de s'arrêter", correct: false },
    { text: "Une zone réservée aux taxis uniquement", correct: false },
  ], "Les panneaux d'indication bleus signalent des services ou aménagements utiles aux usagers, comme les parkings.", { image: WM("B4") }),
  q("signalisation", "La combinaison d'un panneau rond à listel rouge et d'un panonceau « sauf riverains » signifie que l'interdiction :", [
    { text: "Ne s'applique pas aux résidents de la zone concernée", correct: true },
    { text: "S'applique à tous sans exception", correct: false },
    { text: "Ne concerne que les poids lourds", correct: false },
  ], "Le panonceau restreint le champ d'application de l'interdiction principale à certaines catégories d'usagers.", { image: WM("B9i") }),
  q("signalisation", "Sur autoroute, un panneau annonçant un passage à niveau serait :", [
    { text: "Incohérent, les passages à niveau n'existent pas sur autoroute", correct: true },
    { text: "Fréquent aux abords des gares", correct: false },
    { text: "Un simple ralentisseur signalé différemment", correct: false },
  ], "La conception des autoroutes exclut par nature tout croisement à niveau avec une voie ferrée.", { image: WM("AB1") }),

  // Priorités
  q("priorites", "Vous circulez sur une voie qui se rétrécit et fusionne avec une autre voie (principe de la fermeture éclair). Vous devez :", [
    { text: "Laisser s'insérer alternativement un véhicule de chaque file", correct: true },
    { text: "Empêcher les véhicules de l'autre file de s'insérer", correct: false },
    { text: "Accélérer pour passer avant la fusion des voies", correct: false },
  ], "Le principe de la fermeture éclair, désormais inscrit dans le code, impose une insertion alternée fluide et courtoise."),
  q("priorites", "Un véhicule arrivant sur une place où le marquage au sol indique des flèches de direction obligatoires doit :", [
    { text: "Suivre la direction imposée par le marquage", correct: true },
    { text: "Peut ignorer le marquage s'il connaît une meilleure route", correct: false },
    { text: "Suivre le marquage uniquement si la circulation est dense", correct: false },
  ], "Le marquage au sol directionnel a une valeur réglementaire équivalente aux panneaux."),
  q("priorites", "Face à un train routier (camion avec remorque) qui négocie un rond-point, vous devez :", [
    { text: "Lui laisser l'espace nécessaire, il peut empiéter sur plusieurs voies", correct: true },
    { text: "Vous positionner à côté de lui sans vous soucier de son gabarit", correct: false },
    { text: "Le doubler par l'intérieur du rond-point", correct: false },
  ], "Les véhicules longs ont besoin d'un espace de giration important, qu'il faut anticiper et respecter."),
  q("priorites", "Une signalisation temporaire de chantier contredit la signalisation permanente existante. Vous devez respecter :", [
    { text: "La signalisation temporaire, qui prévaut tant que le chantier est en place", correct: true },
    { text: "Toujours la signalisation permanente", correct: false },
    { text: "Aucune des deux, la signalisation de chantier n'ayant aucune valeur légale", correct: false },
  ], "La signalisation de chantier, temporaire, prime sur la signalisation permanente le temps des travaux."),
  q("priorites", "Vous êtes à l'arrêt à un feu rouge et un agent de police vous fait signe de passer malgré le rouge. Que devez-vous faire ?", [
    { text: "Suivre les indications de l'agent, qui priment sur le feu", correct: true },
    { text: "Rester attentif à la circulation malgré l'autorisation de passer", correct: true },
    { text: "Rester à l'arrêt tant que le feu est rouge", correct: false },
    { text: "Klaxonner pour signaler votre désaccord avant d'avancer", correct: false },
  ], "Les indications d'un agent régulateur de la circulation ont toujours priorité sur la signalisation lumineuse, sans dispenser de prudence."),

  // Vitesse & distances
  q("vitesse", "La vitesse est réduite de 20 km/h par rapport à la limite habituelle dans certaines conditions. Cela concerne notamment :", [
    { text: "Les jeunes conducteurs en période probatoire, sur certains axes", correct: true },
    { text: "Tous les conducteurs sans exception, en permanence", correct: false },
    { text: "Uniquement les conducteurs de plus de 65 ans", correct: false },
  ], "Les conducteurs novices ont des vitesses maximales réduites sur autoroute et voie rapide durant leur période probatoire."),
  q("vitesse", "Doubler la distance de sécurité avec le véhicule qui précède est recommandé lorsque :", [
    { text: "Vous suivez un poids lourd ou un véhicule qui masque votre visibilité", correct: true },
    { text: "Vous êtes seul sur la route", correct: false },
    { text: "Uniquement de nuit, jamais de jour", correct: false },
  ], "Un véhicule imposant réduit la visibilité vers l'avant, justifiant une distance de sécurité accrue pour anticiper les dangers."),
  q("vitesse", "Sur une route sinueuse de montagne, l'adaptation de la vitesse doit tenir compte principalement de :", [
    { text: "La visibilité limitée dans les virages et le risque de croisement", correct: true },
    { text: "Uniquement de la limite affichée", correct: false },
    { text: "Uniquement de la largeur de la chaussée", correct: false },
  ], "En montagne, la configuration de la route (virages, visibilité réduite) prime souvent sur la simple limite légale affichée."),
  q("vitesse", "Une distance de sécurité insuffisante en cas d'accident responsable entraîne généralement :", [
    { text: "Une présomption de responsabilité pour non-respect des distances de sécurité", correct: true },
    { text: "Aucune conséquence si le véhicule de devant a freiné trop fort", correct: false },
    { text: "Une simple remarque sans suite si c'est une première infraction", correct: false },
  ], "Le non-respect des distances de sécurité est une cause fréquente de mise en cause en cas de collision par l'arrière."),

  // Le conducteur
  q("conducteur", "Le contrôle du CBD (cannabidiol) légal au volant peut néanmoins entraîner :", [
    { text: "Un test positif aux stupéfiants selon la teneur en THC résiduel", correct: true },
    { text: "Aucun risque, le CBD étant totalement légal", correct: false },
    { text: "Une exclusion automatique et systématique de tout contrôle", correct: false },
  ], "Certains produits CBD contiennent des traces de THC pouvant fausser un contrôle, malgré leur légalité de vente."),
  q("conducteur", "Le certificat médical d'aptitude à la conduite est notamment requis pour :", [
    { text: "Le renouvellement du permis poids lourd ou transport en commun", correct: true },
    { text: "Tout renouvellement de permis B classique", correct: false },
    { text: "Uniquement les conducteurs ayant eu un accident", correct: false },
  ], "Seules certaines catégories professionnelles de permis exigent un suivi médical périodique en France."),
  q("conducteur", "Un conducteur peut-il consulter son solde de points ?", [
    { text: "Oui, via le site officiel de l'ANTS ou Télépoints", correct: true },
    { text: "Non, cette information reste confidentielle", correct: false },
    { text: "Uniquement en se déplaçant en préfecture sur rendez-vous", correct: false },
  ], "Tout titulaire de permis peut consulter son solde de points via les services numériques officiels dédiés."),
  q("conducteur", "Le fait de conduire avec des chaussures inadaptées (talons hauts, tongs) est :", [
    { text: "Non explicitement interdit, mais peut être sanctionné en cas de défaut de maîtrise du véhicule", correct: true },
    { text: "Formellement interdit par un article précis du code", correct: false },
    { text: "Toujours toléré sans aucune conséquence possible", correct: false },
  ], "Il n'existe pas d'interdiction nommée, mais toute gêne avérée à la conduite peut être retenue comme un défaut de maîtrise."),

  // Autres usagers
  q("usagers", "Une remorque de vélo transportant un enfant doit être :", [
    { text: "Équipée d'un dispositif réfléchissant et adaptée à un usage sécurisé", correct: true },
    { text: "Interdite en toutes circonstances", correct: false },
    { text: "Autorisée uniquement sur piste cyclable", correct: false },
  ], "Les remorques pour enfants sont autorisées à condition de respecter certains équipements de sécurité et de visibilité."),
  q("usagers", "Face à des enfants jouant près de la chaussée sans supervision apparente, vous devez :", [
    { text: "Réduire fortement votre vitesse par anticipation d'un risque", correct: true },
    { text: "Poursuivre votre trajet normalement, ce n'est pas votre responsabilité", correct: false },
    { text: "Klaxonner pour les avertir de s'écarter", correct: false },
  ], "L'imprévisibilité des enfants impose une vigilance et une réduction de vitesse dès leur présence détectée près de la route."),
  q("usagers", "Les véhicules de transport scolaire à l'arrêt, feux spéciaux allumés, imposent aux véhicules venant en sens inverse de :", [
    { text: "Ralentir fortement, voire s'arrêter selon la configuration de la route", correct: true },
    { text: "Redoubler de vigilance à l'approche d'enfants potentiellement imprévisibles", correct: true },
    { text: "Continuer sans ralentir si vous n'êtes pas du même sens de circulation", correct: false },
    { text: "Doubler le bus si la voie semble libre", correct: false },
  ], "La sécurité des enfants montant ou descendant du bus impose une prudence renforcée de tous les usagers environnants."),

  // Premiers secours
  q("secours", "Une entorse ou une fracture suspectée chez une victime consciente doit être :", [
    { text: "Immobilisée sans être manipulée inutilement, en attendant les secours", correct: true },
    { text: "Remise en place immédiatement par le témoin", correct: false },
    { text: "Massée fermement pour soulager la douleur", correct: false },
  ], "Toute manipulation intempestive d'un membre potentiellement fracturé peut aggraver la blessure."),
  q("secours", "Face à une victime en état de choc (pâleur, sueurs, agitation), il convient de :", [
    { text: "La rassurer, la couvrir et surveiller son état en attendant les secours", correct: true },
    { text: "La faire marcher pour la faire réagir", correct: false },
    { text: "Lui donner à boire rapidement pour la réhydrater", correct: false },
  ], "Le réconfort, la chaleur et la surveillance sont les gestes appropriés face à un état de choc, sans effort physique imposé à la victime."),

  // Mécanique
  q("mecanique", "Le remplacement du filtre à air doit être effectué régulièrement car un filtre encrassé :", [
    { text: "Réduit les performances du moteur et augmente la consommation", correct: true },
    { text: "N'a aucune influence sur la performance du moteur", correct: false },
    { text: "Améliore le refroidissement du moteur", correct: false },
  ], "Un filtre à air encrassé limite l'admission d'air nécessaire à une combustion efficace."),
  q("mecanique", "L'usure asymétrique d'un pneu peut indiquer :", [
    { text: "Un défaut de parallélisme ou de pression du véhicule", correct: true },
    { text: "Une simple particularité sans conséquence", correct: false },
    { text: "Toujours un pneu de mauvaise qualité, quel que soit son réglage", correct: false },
  ], "Une usure irrégulière est souvent le signe d'un réglage de géométrie ou d'une pression incorrecte à corriger."),

  // Environnement
  q("environnement", "L'utilisation du régulateur de vitesse sur route plane et dégagée contribue à :", [
    { text: "Stabiliser la consommation de carburant en évitant les variations inutiles de régime", correct: true },
    { text: "Augmenter systématiquement la consommation", correct: false },
    { text: "N'avoir aucun effet notable sur la consommation", correct: false },
  ], "Une vitesse stabilisée réduit les à-coups d'accélération qui augmentent la consommation de carburant."),
  q("environnement", "Le principe d'éco-conduite « anticiper plutôt que freiner » consiste à :", [
    { text: "Lever le pied tôt pour laisser le véhicule ralentir naturellement", correct: true },
    { text: "Freiner le plus tard possible pour gagner du temps", correct: false },
    { text: "Freiner fort puis réaccélérer immédiatement", correct: false },
  ], "Anticiper les ralentissements permet d'éviter les freinages brusques, plus coûteux en carburant et en usure."),

  // Sécurité & chargement
  q("securite", "Une remorque attelée à un véhicule doit être équipée :", [
    { text: "De feux, de plaques d'immatriculation et parfois de freins selon son poids", correct: true },
    { text: "D'aucun équipement particulier si elle est légère", correct: false },
    { text: "D'aucun marquage, quel que soit son poids total", correct: false },
  ], "Les obligations d'équipement d'une remorque dépendent notamment de son poids total autorisé en charge (PTAC)."),
  q("securite", "Concernant les équipements de protection d'un motard (casque, gants) :", [
    { text: "Le casque homologué est légalement obligatoire", correct: true },
    { text: "Les gants et autres protections restent vivement recommandés", correct: true },
    { text: "Tout l'équipement de protection est légalement obligatoire", correct: false },
    { text: "Aucun équipement n'est obligatoire pour un motard", correct: false },
  ], "Seul le casque homologué est légalement obligatoire pour les deux-roues motorisés, le reste de l'équipement étant vivement recommandé."),

  // Divers
  q("divers", "Le stationnement de nuit sans éclairage public suffisant impose de :", [
    { text: "Laisser les feux de position allumés si le véhicule n'est pas visible autrement", correct: true },
    { text: "Aucune précaution particulière n'est nécessaire", correct: false },
    { text: "Ce type de stationnement est interdit dans tous les cas", correct: false },
  ], "Dans certaines conditions de faible visibilité, un véhicule stationné doit rester repérable par les autres usagers."),
  q("divers", "Un rond-point signalé par un panneau spécifique impose, en sortie, de :", [
    { text: "Signaler son intention de sortie par le clignotant droit", correct: true },
    { text: "Ne jamais utiliser de clignotant en giratoire", correct: false },
    { text: "Utiliser le clignotant gauche pour signaler la sortie", correct: false },
  ], "L'usage du clignotant en sortie de giratoire est une règle de courtoisie et de sécurité essentielle pour informer les autres usagers."),
  q("divers", "La conduite sans permis valide (jamais obtenu, suspendu ou invalidé) est :", [
    { text: "Un délit passible d'amende, de peine de prison et de confiscation possible du véhicule", correct: true },
    { text: "Une simple contravention mineure", correct: false },
    { text: "Sanctionnée uniquement par une amende forfaitaire", correct: false },
  ], "La conduite sans droit à conduire est un délit pénal sévèrement sanctionné en droit français."),
  q("divers", "Un panneau de fin d'agglomération marque également :", [
    { text: "Le retour aux limitations de vitesse hors agglomération", correct: true },
    { text: "Une zone de danger accru", correct: false },
    { text: "Aucun changement pour la vitesse autorisée", correct: false },
  ], "Le panneau de fin d'agglomération (barré) rétablit les règles de circulation applicables hors zone urbaine, notamment la vitesse."),

  /* ===== VAGUE 5 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP implanté à la sortie d'un parking ou d'une station-service :", [
    { text: "A la même valeur réglementaire qu'un STOP sur une route publique", correct: true },
    { text: "N'a qu'une valeur indicative sur terrain privé", correct: false },
    { text: "N'a de valeur qu'entre 8h et 20h", correct: false },
  ], "Dès lors qu'il est implanté conformément à la réglementation, un panneau STOP s'impose quel que soit le contexte de son emplacement.", { image: WM("AB4") }),
  q("signalisation", "Vous voyez un cédez-le-passage suivi d'un panonceau indiquant la distance visuelle disponible. Cela vous aide à :", [
    { text: "Évaluer si vous avez le temps de vous engager en sécurité", correct: true },
    { text: "Connaître la vitesse maximale autorisée", correct: false },
    { text: "Repérer la présence d'un radar automatique", correct: false },
  ], "Ce panonceau informe sur la distance de visibilité réelle disponible pour s'engager en sécurité au carrefour.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger « chaussée rétrécie » impose de :", [
    { text: "Ralentir et laisser la priorité selon le marquage ou la configuration", correct: true },
    { text: "Accélérer pour passer avant les autres véhicules", correct: false },
    { text: "Accélérer pour anticiper le rétrécissement", correct: false },
  ], "Un rétrécissement de chaussée impose prudence et parfois une priorité de passage à déterminer selon la signalisation locale.", { image: WM("A4") }),
  q("signalisation", "Ce panneau annonçant un carrefour où vous êtes prioritaire reste valable jusqu'à :", [
    { text: "Le prochain panneau qui modifie ou annule cette priorité", correct: true },
    { text: "300 mètres fixes dans tous les cas", correct: false },
    { text: "100 mètres, quelle que soit la route", correct: false },
  ], "La validité d'une signalisation de priorité s'étend jusqu'au prochain élément de signalisation qui la modifie explicitement.", { image: WM("A14") }),
  q("signalisation", "Un panneau bleu carré avec un « P » indique :", [
    { text: "Un emplacement de stationnement autorisé", correct: true },
    { text: "Un poste de police", correct: false },
    { text: "Un parking réservé aux professionnels uniquement", correct: false },
  ], "Le pictogramme « P » sur fond bleu est le symbole normalisé du stationnement.", { image: WM("B4") }),
  q("signalisation", "Face à un panneau d'interdiction accompagné d'un panonceau horaire, l'interdiction :", [
    { text: "Ne s'applique que pendant les horaires précisés sur le panonceau", correct: true },
    { text: "S'applique en permanence quel que soit le panonceau", correct: false },
    { text: "Ne s'applique que le week-end, quel que soit l'horaire indiqué", correct: false },
  ], "Le panonceau horaire restreint la portée temporelle de l'interdiction principale.", { image: WM("B9i") }),

  // Priorités
  q("priorites", "Sur une chaussée à sens unique élargie ponctuellement pour permettre un croisement, la priorité va généralement :", [
    { text: "Au véhicule qui a la meilleure visibilité ou selon la signalisation locale", correct: true },
    { text: "Toujours au véhicule le plus rapide", correct: false },
    { text: "Toujours au véhicule arrivé en dernier", correct: false },
  ], "Ces configurations particulières sont souvent réglées par une signalisation dédiée ; à défaut, prudence et courtoisie priment."),
  q("priorites", "Vous circulez sur une route à quatre voies séparées par un terre-plein central. Un véhicule vient en sens inverse sur votre voie. Que devez-vous faire ?", [
    { text: "Ralentir et vous écarter si possible", correct: true },
    { text: "Signaler le danger sans vous mettre en péril (appel de phares, klaxon bref)", correct: true },
    { text: "Continuer normalement, ce n'est pas votre problème", correct: false },
    { text: "Accélérer pour vous écarter le plus vite possible au centre de la route", correct: false },
  ], "Face à un véhicule à contresens, la priorité absolue est d'éviter la collision, quitte à s'écarter sur le bas-côté, tout en alertant les autres usagers si possible sans danger."),
  q("priorites", "Dans une zone de travaux avec circulation alternée gérée par des feux tricolores temporaires, vous devez :", [
    { text: "Respecter strictement le cycle des feux, même s'il semble long", correct: true },
    { text: "Passer si vous ne voyez aucun véhicule en face", correct: false },
    { text: "Suivre le véhicule devant vous sans regarder les feux", correct: false },
  ], "Les feux de chantier régulent une circulation à sens unique temporaire ; leur non-respect peut provoquer une collision frontale."),
  q("priorites", "Un véhicule prioritaire à l'arrêt, gyrophare allumé mais sirène coupée, sur les lieux d'une intervention impose de :", [
    { text: "Ralentir et redoubler de prudence en le contournant", correct: true },
    { text: "L'ignorer puisque la sirène est coupée", correct: false },
    { text: "L'ignorer, seul le gyrophare compte s'il clignote vite", correct: false },
  ], "Le gyrophare allumé signale une intervention en cours nécessitant prudence, indépendamment de l'utilisation de la sirène."),

  // Vitesse & distances
  q("vitesse", "La verbalisation d'un excès de vitesse via un radar automatique tient compte d'une marge technique de :", [
    { text: "Quelques km/h en faveur du conducteur, selon le type de radar", correct: true },
    { text: "Aucune marge, le moindre dépassement est sanctionné à l'identique", correct: false },
    { text: "Une marge de 50% systématique", correct: false },
  ], "Les radars appliquent une marge d'erreur technique réglementaire déduite de la vitesse mesurée avant sanction."),
  q("vitesse", "Sur une route mouillée après une longue période de sécheresse, le risque de glissance est :", [
    { text: "Accru dans les premières minutes de pluie, du fait des résidus d'huile remontés à la surface", correct: true },
    { text: "Inexistant, la pluie ne fait que nettoyer la route", correct: false },
    { text: "Uniquement présent après une chute de neige", correct: false },
  ], "Les premières minutes de pluie après une sécheresse rendent la chaussée particulièrement glissante à cause des dépôts d'hydrocarbures."),
  q("vitesse", "Une distance de sécurité correctement respectée permet notamment de :", [
    { text: "Voir plus loin devant le véhicule qui précède et anticiper les dangers", correct: true },
    { text: "Uniquement d'éviter une amende", correct: false },
    { text: "N'avoir aucun effet sur l'anticipation visuelle", correct: false },
  ], "Une distance suffisante améliore aussi l'anticipation visuelle des dangers situés au-delà du véhicule précédent."),

  // Le conducteur
  q("conducteur", "Un conducteur malvoyant non corrigé par des lunettes alors que celles-ci sont mentionnées sur son permis :", [
    { text: "Est en infraction s'il conduit sans ses correcteurs de vue", correct: true },
    { text: "N'est pas concerné par cette mention", correct: false },
    { text: "N'est en infraction que si un contrôle médical récent l'exige explicitement", correct: false },
  ], "La mention de correction visuelle sur le permis est une obligation légale de conduire avec les équipements prescrits."),
  q("conducteur", "La conduite d'un véhicule de location à l'étranger nécessite en général :", [
    { text: "Un permis valide, parfois accompagné d'un permis international selon le pays", correct: true },
    { text: "Aucun document, le permis français suffit partout dans le monde", correct: false },
    { text: "Une interdiction totale de louer un véhicule hors de France", correct: false },
  ], "Selon les accords internationaux, certains pays exigent un permis de conduire international en complément du permis national."),
  q("conducteur", "Le fait d'être fatigué après une longue journée de travail avant de prendre la route impose de :", [
    { text: "Évaluer objectivement son état et renoncer à conduire si nécessaire", correct: true },
    { text: "Conduire normalement, la fatigue professionnelle ne concerne pas la route", correct: false },
    { text: "N'est jamais un motif valable pour annuler un trajet prévu", correct: false },
  ], "La fatigue, quelle que soit son origine, altère les capacités de conduite et doit être prise au sérieux avant de prendre le volant."),

  // Autres usagers
  q("usagers", "Un skateur ou un utilisateur de roller sur la chaussée est considéré comme :", [
    { text: "Un piéton au sens du code de la route", correct: true },
    { text: "Un véhicule à part entière", correct: false },
    { text: "Un cycliste au sens du code de la route", correct: false },
  ], "Les utilisateurs d'engins non motorisés sans roues alignées comme les rollers sont assimilés aux piétons par le code."),
  q("usagers", "En présence d'un autocar scolaire dont le panneau « élèves » est déployé, que devez-vous faire ?", [
    { text: "Ralentir fortement à son approche et à son dépassement", correct: true },
    { text: "Redoubler d'attention à la présence possible d'enfants aux abords", correct: true },
    { text: "N'avoir aucune précaution particulière", correct: false },
    { text: "Doubler rapidement pour vous éloigner du danger", correct: false },
  ], "Le déploiement de ce panonceau signale une zone à risque accru lié à la présence d'enfants autour du véhicule, imposant ralentissement et vigilance renforcée."),

  // Premiers secours
  q("secours", "Une victime piégée dans un véhicule accidenté et en danger immédiat (incendie) doit être :", [
    { text: "Désincarcérée avec les moyens disponibles si le danger est vital et imminent", correct: true },
    { text: "Laissée en place en attendant impérativement les pompiers", correct: false },
    { text: "Jamais déplacée, sans exception, avant l'arrivée des secours", correct: false },
  ], "En cas de danger vital immédiat, une extraction d'urgence peut être justifiée avant l'arrivée des secours spécialisés."),
  q("secours", "Après avoir alerté les secours, il est important de :", [
    { text: "Rester à proximité du téléphone pour guider ou renseigner les secours si besoin", correct: true },
    { text: "Raccrocher immédiatement et quitter les lieux", correct: false },
    { text: "Éteindre son téléphone pour économiser la batterie", correct: false },
  ], "Rester joignable permet aux services de secours d'obtenir des précisions complémentaires si nécessaire."),

  // Mécanique
  q("mecanique", "Un pneu neige (hiver) se différencie d'un pneu été notamment par :", [
    { text: "Une gomme plus souple à basse température et des lamelles plus nombreuses", correct: true },
    { text: "Une taille différente obligatoire", correct: false },
    { text: "Une couleur différente réglementaire", correct: false },
  ], "La composition de la gomme et le motif de la sculpture des pneus hiver optimisent l'adhérence par temps froid."),
  q("mecanique", "Le remplacement des amortisseurs usés améliore principalement :", [
    { text: "La tenue de route et l'efficacité du freinage", correct: true },
    { text: "Uniquement le confort de conduite", correct: false },
    { text: "Uniquement l'aspect esthétique du véhicule", correct: false },
  ], "Des amortisseurs usés dégradent le contact pneu-route, ce qui affecte directement freinage et stabilité."),

  // Environnement
  q("environnement", "L'entretien régulier du véhicule (filtres, huile, pneus) contribue à :", [
    { text: "Réduire sa consommation et ses émissions polluantes", correct: true },
    { text: "N'a aucun effet sur l'impact environnemental", correct: false },
    { text: "N'améliorer que le confort, sans effet sur la pollution", correct: false },
  ], "Un véhicule bien entretenu consomme moins et pollue moins qu'un véhicule négligé."),

  // Sécurité & chargement
  q("securite", "Un porte-vélos installé à l'arrière du véhicule doit être signalé par :", [
    { text: "Une plaque réfléchissante réglementaire si les feux arrière sont masqués", correct: true },
    { text: "Aucune signalisation particulière n'est nécessaire", correct: false },
    { text: "Une simple recommandation facultative, jamais une obligation", correct: false },
  ], "Si le chargement masque les feux ou la plaque, une signalisation complémentaire homologuée est obligatoire."),
  q("securite", "Le port de la ceinture pendant la grossesse est :", [
    { text: "Obligatoire, en positionnant correctement la sangle sous le ventre", correct: true },
    { text: "Déconseillé, il vaut mieux ne pas l'attacher", correct: false },
    { text: "Facultatif, sur simple avis médical", correct: false },
  ], "La ceinture reste obligatoire et protectrice pendant la grossesse, à condition d'être positionnée correctement."),

  // Divers
  q("divers", "Un rond-point avec anneau franchissable (bande surélevée) autour du terre-plein central est destiné :", [
    { text: "Aux véhicules longs qui ont besoin d'un espace de giration supplémentaire", correct: true },
    { text: "Au stationnement temporaire", correct: false },
    { text: "Exclusivement aux vélos", correct: false },
  ], "Cette bande facilite le passage des poids lourds ou véhicules longs sans les contraindre à mordre sur le terre-plein central."),
  q("divers", "La carte grise barrée et annotée de la mention « vendu le » sert à :", [
    { text: "Attester provisoirement de la cession du véhicule lors d'une vente entre particuliers", correct: true },
    { text: "Prouver le contrôle technique", correct: false },
    { text: "Remplacer définitivement la nouvelle carte grise", correct: false },
  ], "Cette mention manuscrite constitue une preuve provisoire de la vente en attendant le nouveau certificat d'immatriculation."),
  q("divers", "Le non-port de la ceinture de sécurité est sanctionné par :", [
    { text: "Une amende et un retrait de points", correct: true },
    { text: "Un simple avertissement oral", correct: false },
    { text: "Un simple avertissement pour la première infraction seulement", correct: false },
  ], "Le défaut de port de la ceinture constitue une infraction sanctionnée financièrement et par un retrait de points."),

  /* ===== VAGUE 6 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP est temporairement recouvert d'un cache lors de travaux. Vous devez :", [
    { text: "Respecter la signalisation temporaire mise en place, qui remplace le panneau masqué", correct: true },
    { text: "Vous arrêter quand même car le panneau existe toujours dessous", correct: false },
    { text: "Vous arrêter par réflexe, au cas où, même sans certitude", correct: false },
  ], "Un panneau masqué ou recouvert n'est plus applicable ; c'est la signalisation temporaire visible qui prévaut.", { image: WM("AB4") }),
  q("signalisation", "Le panneau cédez-le-passage impose une obligation de :", [
    { text: "Réduire l'allure suffisamment pour pouvoir s'arrêter si nécessaire", correct: true },
    { text: "Maintenir sa vitesse tout en restant attentif", correct: false },
    { text: "Accélérer légèrement pour dégager le carrefour plus vite", correct: false },
  ], "L'allure doit être réduite pour permettre un arrêt si un véhicule prioritaire se présente.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger doublé d'un panonceau « sur 3 km » signifie que :", [
    { text: "Le danger signalé persiste sur cette distance", correct: true },
    { text: "Le danger n'existe qu'à 3 km de là", correct: false },
    { text: "Le danger se double uniquement au bout de 3 km", correct: false },
  ], "Ce panonceau précise l'étendue de la zone concernée par le danger annoncé.", { image: WM("A4") }),
  q("signalisation", "Face à ce panneau annonçant un carrefour, un conducteur distrait par son téléphone risque particulièrement :", [
    { text: "De ne pas anticiper une cession de priorité nécessaire", correct: true },
    { text: "De payer une amende automatiquement", correct: false },
    { text: "Uniquement un risque d'amende, rien d'autre", correct: false },
  ], "La distraction réduit la capacité d'anticipation nécessaire à l'approche de tout carrefour, qu'il soit prioritaire ou non.", { image: WM("A14") }),
  q("signalisation", "Un panneau carré bleu représentant une flèche est généralement :", [
    { text: "Une obligation de direction à suivre", correct: true },
    { text: "Une simple suggestion d'itinéraire", correct: false },
    { text: "Une simple décoration sans valeur légale", correct: false },
  ], "Les flèches directionnelles sur fond bleu ont valeur d'obligation de direction, contrairement à une indication touristique.", { image: WM("B4") }),

  // Priorités
  q("priorites", "Un cycliste tourne à gauche en ayant préalablement levé le bras pour signaler son intention. Vous devez :", [
    { text: "Respecter cette indication et adapter votre conduite en conséquence", correct: true },
    { text: "L'ignorer, seuls les clignotants ont une valeur légale", correct: false },
    { text: "Le respecter uniquement s'il est accompagné d'un clignotant", correct: false },
  ], "Les gestes des cyclistes pour indiquer un changement de direction ont la même valeur que les clignotants d'un véhicule motorisé."),
  q("priorites", "Sur une aire de service d'autoroute, la circulation suit :", [
    { text: "Les règles de priorité à droite en l'absence de signalisation spécifique, comme un parking classique", correct: true },
    { text: "Les mêmes règles strictes que sur la voie principale de l'autoroute", correct: false },
    { text: "Aucune règle, chacun circule comme il le souhaite", correct: false },
  ], "Les aires de service, assimilées à des espaces privés ouverts à la circulation, suivent généralement la priorité à droite par défaut."),
  q("priorites", "Un véhicule d'intervention (ambulance) roulant à contresens sur une portion en travaux, gyrophares allumés, doit être :", [
    { text: "Laissé passer en priorité absolue", correct: true },
    { text: "Cédé le passage en s'arrêtant sur le bas-côté si nécessaire", correct: true },
    { text: "Ignoré si vous êtes prioritaire sur cette portion", correct: false },
    { text: "Doublé rapidement pour ne pas le gêner", correct: false },
  ], "La priorité des véhicules d'intervention prime sur toute autre règle de circulation, y compris en configuration inhabituelle."),

  // Vitesse & distances
  q("vitesse", "La vitesse maximale autorisée pour un ensemble routier tractant une caravane ou remorque légère est en général :", [
    { text: "Réduite par rapport à celle du véhicule seul", correct: true },
    { text: "Identique à celle du véhicule sans remorque", correct: false },
    { text: "Augmentée pour compenser le poids supplémentaire", correct: false },
  ], "La traction d'une remorque impose des limitations de vitesse spécifiques, notamment sur autoroute et voie rapide."),
  q("vitesse", "Une accélération brutale après un feu vert entraîne :", [
    { text: "Une surconsommation et une usure prématurée sans gain de temps significatif", correct: true },
    { text: "Un gain de temps important sur un trajet urbain", correct: false },
    { text: "Un gain de temps notable sur autoroute", correct: false },
  ], "En ville, les accélérations brusques n'apportent qu'un gain de temps marginal tout en augmentant consommation et usure."),
  q("vitesse", "Face à un animal sauvage traversant soudainement la route, la meilleure réaction est de :", [
    { text: "Freiner fermement en ligne droite sans donner de coup de volant brusque", correct: true },
    { text: "Faire une embardée pour l'éviter à tout prix", correct: false },
    { text: "Klaxonner fort en maintenant la même vitesse", correct: false },
  ], "Une embardée pour éviter un animal peut provoquer une sortie de route ou une collision plus grave qu'un freinage contrôlé."),

  // Le conducteur
  q("conducteur", "L'usage d'écouteurs dans les deux oreilles en conduisant est :", [
    { text: "Interdit, car cela réduit la perception des sons environnants (sirènes, klaxons)", correct: true },
    { text: "Autorisé sans restriction", correct: false },
    { text: "Autorisé si le volume est réglé faible", correct: false },
  ], "Le port d'écouteurs dans les deux oreilles est spécifiquement interdit au volant, contrairement au kit mains libres classique."),
  q("conducteur", "Un jeune conducteur doit apposer un disque « A » à l'arrière de son véhicule pendant :", [
    { text: "Toute la période probatoire suivant l'obtention du permis", correct: true },
    { text: "Uniquement le premier mois", correct: false },
    { text: "Uniquement lors du passage de l'examen du permis", correct: false },
  ], "Le disque A doit rester visible pendant toute la durée de la période probatoire, sous peine de sanction."),

  // Autres usagers
  q("usagers", "Face à un cortège cycliste organisé et encadré (course, randonnée officielle), vous devez :", [
    { text: "Respecter les indications des signaleurs et ne pas couper le groupe", correct: true },
    { text: "Vous insérer normalement dans le groupe si un espace se présente", correct: false },
    { text: "Vous insérer si le groupe roule lentement", correct: false },
  ], "Les cortèges cyclistes encadrés bénéficient d'une organisation spécifique qu'il ne faut pas perturber."),
  q("usagers", "Les conducteurs de quads ou de véhicules tout-terrain sur route ouverte doivent :", [
    { text: "Respecter les mêmes règles de circulation que les autres usagers motorisés", correct: true },
    { text: "N'ont aucune règle spécifique à respecter sur route ouverte", correct: false },
    { text: "Sont dispensés du code de la route hors agglomération", correct: false },
  ], "Dès lors qu'ils circulent sur une voie ouverte à la circulation publique, ces véhicules sont soumis au code de la route."),

  // Premiers secours
  q("secours", "Un témoin d'accident non formé aux premiers secours doit avant tout :", [
    { text: "Sécuriser les lieux et alerter les secours, même sans compétence médicale", correct: true },
    { text: "S'abstenir totalement d'intervenir par peur de mal faire", correct: false },
    { text: "Pratiquer un massage cardiaque même sans aucune formation", correct: false },
  ], "Protéger et alerter ne nécessitent aucune compétence médicale particulière et restent à la portée de tout témoin."),
  q("secours", "La trousse de premiers secours dans un véhicule, bien que non obligatoire en France, permet de :", [
    { text: "Disposer de matériel de base en cas de petit incident avant l'arrivée des secours", correct: true },
    { text: "Remplacer entièrement l'intervention des services de secours", correct: false },
    { text: "Est en réalité obligatoire dans tout véhicule en France", correct: false },
  ], "Une trousse de secours reste un complément utile, jamais un substitut aux services de secours professionnels."),

  // Mécanique
  q("mecanique", "La date de fabrication d'un pneu, indiquée par un code à 4 chiffres sur le flanc, permet de connaître :", [
    { text: "Son ancienneté, un pneu trop vieux perdant en performance même peu usé", correct: true },
    { text: "Uniquement le pays de fabrication", correct: false },
    { text: "Le nombre de kilomètres déjà parcourus", correct: false },
  ], "Un pneu vieillit chimiquement même sans usure visible ; ce code permet de vérifier son âge réel."),
  q("mecanique", "Le voyant de température moteur allumé en rouge impose de :", [
    { text: "S'arrêter dès que possible en sécurité pour éviter une casse moteur", correct: true },
    { text: "Continuer à rouler jusqu'à destination", correct: false },
    { text: "Ouvrir le capot en roulant pour refroidir le moteur", correct: false },
  ], "Poursuivre la route avec une surchauffe moteur avérée risque d'endommager gravement et durablement le moteur."),

  // Environnement
  q("environnement", "Le vieillissement des pneus mal entretenus augmente :", [
    { text: "La résistance au roulement et donc la consommation de carburant", correct: true },
    { text: "N'a aucun effet sur la consommation", correct: false },
    { text: "Réduit la consommation en diminuant le poids du pneu", correct: false },
  ], "Des pneus en mauvais état augmentent les frottements, ce qui accroît la consommation de carburant."),

  // Sécurité & chargement
  q("securite", "Un chargement dépassant sur les côtés du véhicule doit respecter :", [
    { text: "Une largeur maximale réglementée", correct: true },
    { text: "Une signalisation adaptée si le dépassement est important", correct: true },
    { text: "Aucune limite particulière tant que cela tient", correct: false },
    { text: "Une autorisation préalable systématique de la mairie", correct: false },
  ], "La largeur d'un chargement est encadrée réglementairement, avec une signalisation à prévoir au-delà d'un certain dépassement, pour ne pas mettre en danger les autres usagers."),

  // Divers
  q("divers", "Un contrôle technique non valide (expiré) expose le conducteur à :", [
    { text: "Une amende et une obligation de régularisation sous délai", correct: true },
    { text: "Aucune conséquence tant que le véhicule roule normalement", correct: false },
    { text: "Aucune sanction si le véhicule parcourt moins de 500 km par an", correct: false },
  ], "Circuler avec un contrôle technique expiré constitue une infraction sanctionnée, même en l'absence d'incident."),
  q("divers", "Le franchissement d'une ligne blanche continue pour dépasser est :", [
    { text: "Interdit, cette ligne signale l'absence de visibilité suffisante pour dépasser en sécurité", correct: true },
    { text: "Autorisé si aucun véhicule n'arrive en face", correct: false },
    { text: "Autorisé la nuit uniquement", correct: false },
  ], "La ligne continue matérialise une zone où le dépassement est jugé dangereux, indépendamment du trafic observé au moment du dépassement."),
  q("divers", "Une aire de covoiturage signalée en bord de route permet de :", [
    { text: "Stationner gratuitement pour organiser un trajet partagé", correct: true },
    { text: "Faire le plein de carburant", correct: false },
    { text: "Stationner uniquement les véhicules électriques", correct: false },
  ], "Ces aires sont aménagées spécifiquement pour faciliter les rendez-vous de covoiturage en toute sécurité."),

  /* ===== VAGUE 7 ===== */

  // Signalisation
  q("signalisation", "Vous apercevez un panneau STOP fortement dégradé mais encore identifiable. Vous devez :", [
    { text: "Vous arrêter malgré la dégradation, le panneau reste réglementaire", correct: true },
    { text: "L'ignorer car il n'est plus dans un état correct", correct: false },
    { text: "Ralentir seulement, l'arrêt n'étant plus obligatoire", correct: false },
  ], "L'état visuel d'un panneau n'annule pas son caractère obligatoire tant qu'il reste identifiable.", { image: WM("AB4") }),
  q("signalisation", "Le panneau cédez-le-passage est parfois complété d'un marquage au sol triangulaire. Ce marquage :", [
    { text: "Renforce et rappelle la même obligation que le panneau", correct: true },
    { text: "Remplace une signalisation différente", correct: false },
    { text: "Indique une zone de stationnement autorisé", correct: false },
  ], "Le triangle peint au sol est le pendant du panneau cédez-le-passage, renforçant sa visibilité pour l'automobiliste.", { image: WM("AB3a") }),
  q("signalisation", "Face à un panneau de danger annonçant des travaux, la prudence recommandée inclut :", [
    { text: "De réduire sa vitesse et d'être attentif à la présence éventuelle d'ouvriers", correct: true },
    { text: "De klaxonner pour signaler son passage", correct: false },
    { text: "D'accélérer pour traverser rapidement la zone", correct: false },
  ], "Les zones de travaux exigent une vigilance accrue pour la sécurité du personnel et des autres usagers.", { image: WM("A4") }),
  q("signalisation", "Un panneau annonçant un carrefour peut être positionné à une distance variable selon :", [
    { text: "La vitesse habituelle pratiquée sur la portion de route concernée", correct: true },
    { text: "Une distance fixe unique en toute circonstance", correct: false },
    { text: "La taille de la commune traversée", correct: false },
  ], "La distance d'implantation d'un panneau tient compte de la vitesse pratiquée pour garantir un temps d'anticipation suffisant.", { image: WM("A14") }),

  // Priorités
  q("priorites", "Un véhicule effectuant un demi-tour au milieu d'une route doit céder le passage :", [
    { text: "À l'ensemble de la circulation, dans les deux sens", correct: true },
    { text: "Uniquement au sens de circulation qu'il vient de quitter", correct: false },
    { text: "À personne s'il a mis son clignotant à temps", correct: false },
  ], "Le demi-tour est une manœuvre non prioritaire imposant de céder le passage à tous les usagers concernés."),
  q("priorites", "Vous circulez sur une route et un panneau « voie prioritaire » cesse brusquement sans panneau de fin explicite mais avec un carrefour classique qui suit. Vous devez :", [
    { text: "Redoubler de prudence, la priorité peut ne plus s'appliquer selon la configuration réelle du carrefour suivant", correct: true },
    { text: "Continuer à vous croire prioritaire indéfiniment", correct: false },
    { text: "Vous arrêter systématiquement par précaution", correct: false },
  ], "Face à une ambiguïté de signalisation, la prudence impose de vérifier la configuration réelle plutôt que de présumer une priorité."),
  q("priorites", "Sur une place partagée entre piétons, cyclistes et véhicules (voie mixte), la priorité générale va :", [
    { text: "Aux usagers les plus vulnérables, notamment les piétons", correct: true },
    { text: "Toujours aux véhicules motorisés", correct: false },
    { text: "Toujours au véhicule le plus rapide", correct: false },
  ], "Dans les espaces partagés à faible vitesse, la hiérarchie de prudence favorise systématiquement les usagers les plus vulnérables."),

  // Vitesse & distances
  q("vitesse", "Le respect de la vitesse limite en agglomération réduit particulièrement le risque pour :", [
    { text: "Les piétons et cyclistes, plus vulnérables lors d'un choc à vitesse élevée", correct: true },
    { text: "Uniquement les autres automobilistes", correct: false },
    { text: "Uniquement les conducteurs eux-mêmes", correct: false },
  ], "À 50 km/h, les conséquences d'un choc avec un piéton sont nettement plus graves qu'à 30 km/h, d'où l'importance du respect des limites en ville."),
  q("vitesse", "Aborder un virage à vitesse excessive augmente le risque de :", [
    { text: "Sortie de route par force centrifuge dépassant l'adhérence disponible", correct: true },
    { text: "Aucun risque particulier si le véhicule est récent", correct: false },
    { text: "Simple inconfort pour les passagers, sans autre danger", correct: false },
  ], "Une vitesse excessive en virage peut dépasser la capacité d'adhérence des pneus, provoquant une perte de contrôle."),
  q("vitesse", "La distance de sécurité recommandée sur autoroute à 130 km/h est d'environ :", [
    { text: "70 mètres minimum (règle des 2 secondes)", correct: true },
    { text: "10 mètres", correct: false },
    { text: "150 mètres, jamais moins", correct: false },
  ], "À 130 km/h, respecter deux secondes d'intervalle correspond à environ 70 mètres de distance avec le véhicule qui précède."),

  // Le conducteur
  q("conducteur", "Un conducteur ayant consommé de l'alcool la veille au soir peut encore être positif au contrôle le lendemain matin car :", [
    { text: "L'élimination de l'alcool dans le sang prend plusieurs heures selon la quantité consommée", correct: true },
    { text: "L'alcool est toujours totalement éliminé après une nuit de sommeil", correct: false },
    { text: "Le contrôle du matin ne mesure jamais l'alcool de la veille", correct: false },
  ], "Le temps d'élimination de l'alcool dépend de la quantité ingérée et peut dépasser une nuit complète de sommeil."),
  q("conducteur", "La verbalisation pour usage du téléphone au volant entraîne :", [
    { text: "Une amende forfaitaire et un retrait de 3 points", correct: true },
    { text: "Un simple rappel à l'ordre sans sanction", correct: false },
    { text: "Une amende uniquement, sans retrait de points", correct: false },
  ], "L'usage tenu en main du téléphone est sanctionné par une amende forfaitaire et un retrait de points significatif."),

  // Autres usagers
  q("usagers", "Un piéton portant un brassard ou un gilet orange peut être :", [
    { text: "Une personne déficiente auditive ou visuelle nécessitant une vigilance accrue", correct: true },
    { text: "Un signe sans signification particulière", correct: false },
    { text: "Un agent de la circulation en tenue non officielle", correct: false },
  ], "Certains équipements distinctifs signalent des usagers en situation de handicap nécessitant une attention particulière."),
  q("usagers", "Face à un troupeau conduit sur la route par un berger, vous devez :", [
    { text: "Ralentir fortement et attendre les indications du conducteur du troupeau", correct: true },
    { text: "Klaxonner pour disperser les animaux et passer rapidement", correct: false },
    { text: "Doubler le troupeau dès qu'un espace se présente", correct: false },
  ], "Le passage d'un troupeau impose patience et prudence, en suivant les indications de son conducteur."),

  // Premiers secours
  q("secours", "Face à une crise convulsive (épilepsie) d'une victime, il faut avant tout :", [
    { text: "Écarter les objets dangereux autour d'elle sans la contenir de force", correct: true },
    { text: "La maintenir fermement immobile pour arrêter les convulsions", correct: false },
    { text: "Lui mettre un objet dans la bouche pour éviter qu'elle ne se morde", correct: false },
  ], "Il ne faut jamais contenir de force une personne en crise convulsive ni rien introduire dans sa bouche ; il suffit d'écarter les dangers environnants."),
  q("secours", "La position d'attente recommandée pour une victime consciente en difficulté respiratoire est :", [
    { text: "Semi-assise, si son état le permet", correct: true },
    { text: "Allongée à plat ventre", correct: false },
    { text: "Debout, pour faciliter la respiration", correct: false },
  ], "La position semi-assise facilite la respiration d'une victime consciente présentant une gêne respiratoire."),

  // Mécanique
  q("mecanique", "Le niveau de liquide de refroidissement doit être vérifié :", [
    { text: "Moteur froid, pour une lecture fiable du niveau", correct: true },
    { text: "Toujours moteur chaud et sous pression", correct: false },
    { text: "Indifféremment, cela n'a pas d'importance", correct: false },
  ], "Vérifier le niveau moteur froid évite les risques de brûlure et donne une mesure fiable, le liquide se dilatant à chaud."),
  q("mecanique", "Un embrayage qui patine (glisse) sans transmettre correctement la puissance est le signe :", [
    { text: "D'une usure du disque d'embrayage à faire contrôler", correct: true },
    { text: "D'un simple réglage esthétique sans urgence", correct: false },
    { text: "D'un problème exclusivement lié aux pneus", correct: false },
  ], "Le patinage de l'embrayage traduit une usure mécanique qui, non traitée, peut immobiliser le véhicule."),

  // Environnement
  q("environnement", "Le covoiturage régulier domicile-travail permet également de :", [
    { text: "Réduire la congestion routière en heure de pointe", correct: true },
    { text: "N'a aucun effet sur le trafic", correct: false },
    { text: "Augmenter le nombre de véhicules en circulation", correct: false },
  ], "Moins de véhicules en circulation aux heures de pointe réduit mécaniquement les phénomènes de congestion."),

  // Sécurité & chargement
  q("securite", "La visibilité arrière peut être réduite par un chargement volumineux. Dans ce cas, il faut :", [
    { text: "S'assurer d'une visibilité suffisante via les rétroviseurs latéraux ou une caméra de recul", correct: true },
    { text: "Considérer que cela n'a pas d'incidence sur la conduite", correct: false },
    { text: "Rouler uniquement de jour pour compenser", correct: false },
  ], "Un chargement masquant la vue arrière impose de renforcer la vigilance via d'autres moyens de contrôle visuel."),

  // Divers
  q("divers", "Le stationnement sur un trottoir, même partiellement, est :", [
    { text: "Interdit et considéré comme gênant pour les piétons", correct: true },
    { text: "Toléré si une partie du trottoir reste libre", correct: false },
    { text: "Autorisé la nuit uniquement", correct: false },
  ], "Le stationnement sur trottoir est une infraction, car il entrave la circulation normale des piétons, y compris partiellement."),
  q("divers", "L'usage abusif de l'avertisseur sonore (klaxon) en ville, hors danger immédiat, est :", [
    { text: "Interdit et sanctionnable", correct: true },
    { text: "Toléré pour exprimer son impatience", correct: false },
    { text: "Autorisé si cela dure moins de 2 secondes", correct: false },
  ], "Le klaxon est réservé à la prévention d'un danger, pas à l'expression d'une impatience ou d'une frustration."),
  q("divers", "Une carte grise au nom de plusieurs cotitulaires implique que :", [
    { text: "Chacun d'eux est responsable solidairement du véhicule", correct: true },
    { text: "Seul le premier nom mentionné est responsable", correct: false },
    { text: "Aucun d'eux n'est individuellement responsable", correct: false },
  ], "La cotitularité engage la responsabilité de chaque titulaire mentionné sur le certificat d'immatriculation."),

  /* ===== VAGUE 8 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP placé juste avant une voie ferrée sans barrière impose un arrêt :", [
    { text: "Obligatoire avant de traverser la voie, en vérifiant qu'aucun train n'approche", correct: true },
    { text: "Facultatif si aucun train n'est visible", correct: false },
    { text: "Uniquement si un feu clignotant est également allumé", correct: false },
  ], "L'arrêt au STOP reste obligatoire et permet de vérifier l'absence de danger avant de traverser une voie non protégée.", { image: WM("AB4") }),
  q("signalisation", "Le panneau cédez-le-passage, contrairement au STOP, permet de :", [
    { text: "Franchir le carrefour sans arrêt total si la voie est manifestement libre", correct: true },
    { text: "Ne jamais s'arrêter, même si un véhicule arrive", correct: false },
    { text: "S'arrêter uniquement de nuit", correct: false },
  ], "La différence fondamentale entre les deux panneaux réside dans l'obligation ou non d'un arrêt total, indépendamment du trafic observé.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger représentant une silhouette d'animal sauvage signale un risque de :", [
    { text: "Traversée d'animaux sur la chaussée", correct: true },
    { text: "Présence d'un refuge animalier à proximité", correct: false },
    { text: "Zone de chasse autorisée", correct: false },
  ], "Ce panneau prévient d'un risque de collision avec la faune sauvage, fréquent en zone boisée ou rurale.", { image: WM("A4") }),

  // Priorités
  q("priorites", "Vous arrivez à un carrefour où la signalisation semble contradictoire (panneau prioritaire mais marquage effacé suggérant une priorité à droite). Vous devez :", [
    { text: "Redoubler de prudence et vous comporter comme si vous n'étiez pas prioritaire", correct: true },
    { text: "Vous fier uniquement au panneau sans ralentir", correct: false },
    { text: "Vous arrêter complètement par principe", correct: false },
  ], "En cas de doute sur la signalisation réelle, la prudence impose de ralentir et de vérifier avant de s'engager."),
  q("priorites", "Sur une route à sens unique élargie temporairement pour des travaux, la priorité de circulation est déterminée par :", [
    { text: "La signalisation temporaire mise en place par le gestionnaire de voirie", correct: true },
    { text: "L'ordre d'arrivée des véhicules uniquement", correct: false },
    { text: "La taille respective des véhicules concernés", correct: false },
  ], "Toute configuration temporaire de circulation est encadrée par une signalisation dédiée qui prime sur les règles habituelles."),
  q("priorites", "Face à deux véhicules arrivant simultanément à un carrefour où l'un vient de face et tourne à droite, l'autre venant de la droite continuant tout droit :", [
    { text: "C'est le véhicule venant de la droite qui est prioritaire, sauf signalisation contraire", correct: true },
    { text: "C'est toujours celui qui tourne qui passe en premier", correct: false },
    { text: "C'est celui qui roule le plus vite qui passe en premier", correct: false },
  ], "En l'absence de signalisation, la priorité à droite prévaut sur les autres configurations de mouvement."),

  // Vitesse & distances
  q("vitesse", "Un dépassement sur route à double sens nécessite une distance de visibilité suffisante pour :", [
    { text: "Terminer la manœuvre avant qu'un véhicule en face n'arrive à votre hauteur", correct: true },
    { text: "Seulement dépasser la moitié du véhicule visé", correct: false },
    { text: "Doubler en quelques secondes, sans autre condition", correct: false },
  ], "Le dépassement doit être anticipé avec une marge de sécurité suffisante pour se rabattre bien avant tout véhicule venant en face."),
  q("vitesse", "La conduite en peloton (groupe rapproché de véhicules à vitesse élevée) présente un risque accru car :", [
    { text: "Elle réduit la marge de manœuvre en cas de freinage d'urgence du premier véhicule", correct: true },
    { text: "Elle améliore l'aérodynamisme du groupe sans risque", correct: false },
    { text: "Elle est interdite en toutes circonstances sur route ouverte", correct: false },
  ], "Rouler en groupe rapproché amplifie le risque de carambolage en cas de freinage brusque du véhicule de tête."),
  q("vitesse", "Une vitesse excessive en sortie d'autoroute (bretelle de sortie) augmente le risque de :", [
    { text: "Sortie de route dans le virage souvent plus serré que la voie principale", correct: true },
    { text: "Aucun risque particulier, les bretelles étant conçues pour la vitesse autoroutière", correct: false },
    { text: "Uniquement une usure accélérée des pneus", correct: false },
  ], "Les bretelles de sortie ont des rayons de courbure plus serrés nécessitant une réduction de vitesse anticipée."),

  // Le conducteur
  q("conducteur", "Un employeur peut-il être tenu responsable si un salarié provoque un accident en téléphonant au volant pour le travail ?", [
    { text: "Oui, sa responsabilité peut être engagée en plus de celle du salarié", correct: true },
    { text: "Non, seul le salarié est responsable dans tous les cas", correct: false },
    { text: "Non, sauf si l'employeur conduisait lui-même le véhicule", correct: false },
  ], "L'employeur qui impose ou tolère l'usage du téléphone au volant dans un cadre professionnel peut voir sa responsabilité engagée."),
  q("conducteur", "Une consommation excessive de caféine avant un long trajet pour lutter contre la fatigue :", [
    { text: "Peut retarder les signes de fatigue mais ne remplace jamais une vraie pause ou du sommeil", correct: true },
    { text: "Élimine totalement le risque de somnolence au volant", correct: false },
    { text: "N'a strictement aucun effet sur la vigilance", correct: false },
  ], "Aucune substance stimulante ne remplace le repos réel ; l'effet est temporaire et limité."),

  // Autres usagers
  q("usagers", "Un livreur à vélo-cargo circulant en ville doit respecter :", [
    { text: "Les mêmes règles de circulation que tout cycliste, malgré le gabarit plus large de son véhicule", correct: true },
    { text: "Aucune règle particulière liée à son activité professionnelle", correct: false },
    { text: "Les règles applicables aux véhicules utilitaires motorisés", correct: false },
  ], "Le statut professionnel n'exempte pas un cycliste, même équipé d'un vélo-cargo, du respect du code de la route."),
  q("usagers", "Face à des piétons traversant en dehors des clous mais sur une route calme et peu fréquentée, vous devez :", [
    { text: "Rester prudent et prêt à céder le passage malgré l'absence d'obligation stricte", correct: true },
    { text: "Ne montrer aucune prudence particulière puisqu'ils sont en tort", correct: false },
    { text: "Accélérer pour les inciter à se dépêcher", correct: false },
  ], "Même en cas d'infraction du piéton, la prudence du conducteur reste de mise pour éviter tout accident."),

  // Premiers secours
  q("secours", "La position latérale de sécurité (PLS) vise principalement à :", [
    { text: "Éviter que la victime ne s'étouffe avec sa langue ou des vomissements", correct: true },
    { text: "Réchauffer la victime", correct: false },
    { text: "Faciliter la prise de sa tension artérielle", correct: false },
  ], "La PLS dégage les voies respiratoires en position latérale, prévenant les risques d'obstruction chez une victime inconsciente qui respire."),
  q("secours", "Face à une victime consciente présentant une douleur thoracique intense, il faut :", [
    { text: "Alerter immédiatement les secours et la laisser en position confortable", correct: true },
    { text: "La faire marcher pour évaluer la gravité", correct: false },
    { text: "Attendre de voir si la douleur passe avant d'alerter", correct: false },
  ], "Une douleur thoracique peut signaler une urgence cardiaque nécessitant une alerte rapide sans effort physique imposé à la victime."),

  // Mécanique
  q("mecanique", "Une fuite d'huile visible sous un véhicule stationné impose de :", [
    { text: "Faire vérifier le véhicule avant de reprendre la route sur un long trajet", correct: true },
    { text: "Ignorer ce signe s'il est minime", correct: false },
    { text: "Rajouter simplement de l'huile sans chercher la cause", correct: false },
  ], "Une fuite, même minime, peut révéler un problème mécanique s'aggravant progressivement et affectant la sécurité."),
  q("mecanique", "L'éclairage arrière (feux stop) défaillant expose le conducteur à :", [
    { text: "Une sanction et un risque accru de collision par l'arrière", correct: true },
    { text: "Aucun risque particulier de jour", correct: false },
    { text: "Un simple avertissement sans amende", correct: false },
  ], "Les feux stop informent les véhicules suiveurs d'un freinage ; leur absence augmente fortement le risque de collision arrière."),

  // Environnement
  q("environnement", "Le remplacement d'un vieux véhicule très polluant par un modèle récent peut ouvrir droit à :", [
    { text: "Des aides financières incitatives selon les dispositifs en vigueur", correct: true },
    { text: "Aucune aide n'existe en France pour ce type de démarche", correct: false },
    { text: "Une aide réservée uniquement aux professionnels", correct: false },
  ], "Diverses aides (prime à la conversion notamment) existent pour encourager le renouvellement de véhicules polluants."),

  // Sécurité & chargement
  q("securite", "Un enfant assis à l'avant du véhicule avec un airbag actif nécessite :", [
    { text: "Une désactivation de l'airbag passager si un siège dos à la route est utilisé", correct: true },
    { text: "Aucune précaution particulière", correct: false },
    { text: "Uniquement une ceinture supplémentaire", correct: false },
  ], "Un airbag qui se déclenche sur un siège dos à la route peut gravement blesser un enfant ; sa désactivation est alors indispensable."),

  // Divers
  q("divers", "Le défaut d'assurance d'un véhicule impliqué dans un accident expose son conducteur à :", [
    { text: "Des sanctions pénales et la prise en charge personnelle des dommages causés", correct: true },
    { text: "Aucune conséquence si l'accident est mineur", correct: false },
    { text: "Une simple mise en demeure sans autre suite", correct: false },
  ], "Rouler sans assurance est un délit et prive le responsable de toute couverture pour les dommages qu'il cause à autrui."),
  q("divers", "Sur une route à caractère prioritaire traversant plusieurs petites intersections, la priorité :", [
    { text: "Reste acquise à chaque intersection tant que la signalisation le confirme", correct: true },
    { text: "Doit être renégociée à chaque carrefour selon le trafic", correct: false },
    { text: "N'est valable qu'à la première intersection rencontrée", correct: false },
  ], "Une route classée prioritaire conserve ce statut sur toute sa longueur signalée, sans qu'il soit besoin de le revérifier à chaque croisement."),

  /* ===== VAGUE 9 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP situé en sortie d'une aire de repos d'autoroute impose de :", [
    { text: "S'arrêter avant de se réinsérer sur la bretelle ou la voie principale", correct: true },
    { text: "Accélérer directement sans marquer d'arrêt", correct: false },
    { text: "S'arrêter uniquement si un véhicule est visible sur l'autoroute", correct: false },
  ], "Cet arrêt permet de vérifier la circulation avant une réinsertion souvent à fort trafic et vitesse élevée.", { image: WM("AB4") }),
  q("signalisation", "Le panneau cédez-le-passage impose de céder la priorité même si :", [
    { text: "Le véhicule prioritaire roule à une vitesse excessive", correct: true },
    { text: "Il s'agit d'un panneau récemment installé", correct: false },
    { text: "Le véhicule prioritaire est un deux-roues", correct: false },
  ], "L'obligation de céder le passage s'applique indépendamment du comportement du véhicule prioritaire.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger annonçant un fort dénivelé impose de :", [
    { text: "Adapter sa vitesse et anticiper l'usage du frein moteur en descente", correct: true },
    { text: "Accélérer pour prendre de l'élan avant la pente", correct: false },
    { text: "Utiliser uniquement le frein à main en descente", correct: false },
  ], "Les fortes déclivités nécessitent une gestion anticipée de la vitesse pour éviter une surchauffe des freins.", { image: WM("A4") }),

  // Priorités
  q("priorites", "Un véhicule sortant d'un parking souterrain avec un signal sonore d'avertissement doit :", [
    { text: "Rester prudent, ce signal ne lui donne aucune priorité automatique sur la voie publique", correct: true },
    { text: "Considérer qu'il est prioritaire sur tous les usagers de la voie publique", correct: false },
    { text: "S'arrêter définitivement en bordure de la sortie", correct: false },
  ], "Un signal sonore de sortie de parking avertit mais ne confère aucune priorité sur la circulation de la voie publique."),
  q("priorites", "Sur une chaussée à sens unique où un couloir de bus est temporairement ouvert aux vélos, un cycliste y circulant est :", [
    { text: "Dans son droit s'il respecte la signalisation autorisant cet usage", correct: true },
    { text: "Toujours en infraction sur un couloir de bus", correct: false },
    { text: "Autorisé seulement en dehors des heures de service des bus", correct: false },
  ], "De nombreux couloirs de bus sont ouverts aux cyclistes selon une signalisation spécifique à respecter et vérifier."),

  // Vitesse & distances
  q("vitesse", "Une vitesse adaptée à la circulation dense en ville consiste à :", [
    { text: "Rouler au rythme du flux tout en respectant les distances de sécurité", correct: true },
    { text: "Toujours rouler à la vitesse maximale autorisée quel que soit le trafic", correct: false },
    { text: "S'arrêter dès que le trafic ralentit un peu", correct: false },
  ], "En circulation dense, la vitesse doit s'adapter au flux réel, indépendamment de la limite maximale affichée."),
  q("vitesse", "Le non-respect des distances de sécurité en peloton de motards augmente le risque de :", [
    { text: "Collision en chaîne en cas de freinage soudain du premier motard", correct: true },
    { text: "Aucun risque particulier grâce à la maniabilité des motos", correct: false },
    { text: "Uniquement un risque de bruit excessif", correct: false },
  ], "Même les deux-roues, malgré leur maniabilité, restent exposés à un risque de collision en chaîne sans distance suffisante."),

  // Le conducteur
  q("conducteur", "Le fait de conduire en étant sous traitement médical de longue durée impose de :", [
    { text: "Vérifier auprès de son médecin la compatibilité du traitement avec la conduite", correct: true },
    { text: "Continuer normalement sans vérification particulière", correct: false },
    { text: "Arrêter systématiquement de conduire pendant toute la durée du traitement", correct: false },
  ], "Certains traitements chroniques peuvent affecter la vigilance ; un avis médical permet d'anticiper les précautions nécessaires."),
  q("conducteur", "Un conducteur peut-il perdre des points sans en être informé immédiatement ?", [
    { text: "Non, un retrait de points est notifié systématiquement par courrier officiel", correct: true },
    { text: "Oui, l'information peut rester confidentielle indéfiniment", correct: false },
    { text: "Oui, mais seulement pour les infractions mineures", correct: false },
  ], "Tout retrait de points fait l'objet d'une notification officielle au titulaire du permis concerné."),

  // Autres usagers
  q("usagers", "Un piéton muni d'une poussette doit, pour traverser en sécurité, privilégier :", [
    { text: "Les passages protégés avec une bonne visibilité dans les deux sens", correct: true },
    { text: "N'importe quel point de la chaussée s'il est pressé", correct: false },
    { text: "Le milieu de la chaussée pour être vu de loin", correct: false },
  ], "La présence d'une poussette réduit la mobilité du piéton, rendant essentiel le choix d'un point de traversée sécurisé."),
  q("usagers", "Face à un cycliste circulant sur la chaussée alors qu'une piste cyclable existe à proximité, vous devez :", [
    { text: "Le traiter comme n'importe quel usager de la route et le dépasser avec les distances réglementaires", correct: true },
    { text: "Le klaxonner pour l'inciter à rejoindre la piste cyclable", correct: false },
    { text: "Le doubler sans respecter de distance particulière", correct: false },
  ], "L'usage de la piste cyclable n'est pas toujours obligatoire ; le cycliste reste un usager légitime de la chaussée à respecter."),

  // Premiers secours
  q("secours", "Un enfant victime d'un étouffement par corps étranger nécessite, chez le témoin formé, la pratique :", [
    { text: "De tapes dans le dos puis, si nécessaire, la méthode de Heimlich adaptée", correct: true },
    { text: "D'une réanimation cardio-pulmonaire immédiate sans autre geste", correct: false },
    { text: "D'une tentative pour extraire le corps étranger avec les doigts, à l'aveugle", correct: false },
  ], "La désobstruction des voies aériennes suit un protocole spécifique avant d'envisager d'autres gestes de secours."),
  q("secours", "Après un choc à la tête, même léger, une victime doit être :", [
    { text: "Surveillée attentivement, certains symptômes pouvant apparaître différés", correct: true },
    { text: "Laissée sans surveillance si elle semble aller bien immédiatement", correct: false },
    { text: "Incitée à faire du sport pour vérifier qu'elle va bien", correct: false },
  ], "Les traumatismes crâniens peuvent avoir des conséquences différées, justifiant une surveillance prolongée."),

  // Mécanique
  q("mecanique", "La courroie de distribution doit être remplacée selon un intervalle précis car :", [
    { text: "Sa rupture peut causer une casse moteur grave et coûteuse", correct: true },
    { text: "Elle n'a aucun impact sur le fonctionnement du moteur", correct: false },
    { text: "Elle ne s'use jamais avec le temps", correct: false },
  ], "Le respect strict des intervalles de remplacement de la courroie de distribution évite une avarie moteur majeure."),
  q("mecanique", "Un rétroviseur cassé ou manquant sur un véhicule est :", [
    { text: "Un motif de contre-visite au contrôle technique et une source de danger", correct: true },
    { text: "Sans conséquence tant qu'il en reste au moins un", correct: false },
    { text: "Uniquement un problème esthétique", correct: false },
  ], "Chaque rétroviseur réglementaire contribue à la visibilité globale du conducteur et doit être en bon état."),

  // Environnement
  q("environnement", "L'utilisation de la climatisation en permanence, même sans besoin réel, entraîne :", [
    { text: "Une surconsommation de carburant évitable", correct: true },
    { text: "Aucun impact sur la consommation", correct: false },
    { text: "Une réduction de la consommation en refroidissant le moteur", correct: false },
  ], "La climatisation sollicite le moteur ; un usage raisonné limite son impact sur la consommation."),

  // Sécurité & chargement
  q("securite", "Le port de la ceinture par les passagers arrière protège également :", [
    { text: "Les occupants situés à l'avant, en cas de projection lors d'un choc", correct: true },
    { text: "Uniquement les passagers arrière eux-mêmes", correct: false },
    { text: "Uniquement le conducteur, jamais les passagers avant", correct: false },
  ], "Un passager arrière non attaché peut être projeté vers l'avant lors d'un choc, blessant également les occupants avant."),

  // Divers
  q("divers", "Le défaut de signalisation d'un véhicule en panne sur la chaussée expose son conducteur à :", [
    { text: "Une sanction et un risque accru de suraccident", correct: true },
    { text: "Aucune conséquence si le véhicule est visible de loin", correct: false },
    { text: "Une simple recommandation sans sanction", correct: false },
  ], "La signalisation d'un véhicule immobilisé (triangle, gilet, feux de détresse) est une obligation de sécurité essentielle."),
  q("divers", "Une place de stationnement réservée aux véhicules électriques avec borne de recharge est :", [
    { text: "Réservée à leur usage exclusif pendant la charge", correct: true },
    { text: "Ouverte à tout véhicule sans restriction", correct: false },
    { text: "Réservée uniquement aux véhicules hybrides", correct: false },
  ], "Ces emplacements sont dédiés aux véhicules en cours de recharge, leur usage abusif pouvant être sanctionné."),
  /* ===== VAGUE 10 ===== */

  // Signalisation
  q("signalisation", "Face à un panneau STOP à l'intersection de deux routes de campagne peu fréquentées, l'arrêt :", [
    { text: "Reste obligatoire, la faible fréquentation ne change rien à la règle", correct: true },
    { text: "Peut être omis si aucune voiture n'est visible à des kilomètres", correct: false },
    { text: "N'est requis qu'aux heures de pointe", correct: false },
  ], "La fréquentation d'une route n'a aucune incidence sur le caractère obligatoire de l'arrêt au STOP.", { image: WM("AB4") }),
  q("signalisation", "Un panneau cédez-le-passage à la sortie d'un giratoire signale que vous devez céder aux :", [
    { text: "Piétons et cyclistes engagés sur la traversée que vous coupez en sortant", correct: true },
    { text: "Véhicules restant sur l'anneau uniquement", correct: false },
    { text: "Véhicules garés à proximité du giratoire", correct: false },
  ], "En sortie de giratoire, la priorité doit souvent être laissée aux piétons et cyclistes traversant la voie de sortie.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger « projection de gravillons » invite à :", [
    { text: "Réduire sa vitesse pour limiter les risques d'impact et de perte d'adhérence", correct: true },
    { text: "Accélérer pour quitter rapidement la zone à risque", correct: false },
    { text: "Rouler au centre de la chaussée uniquement", correct: false },
  ], "Les zones récemment traitées en gravillons présentent un risque de projection et une adhérence réduite, nécessitant prudence.", { image: WM("A4") }),

  // Priorités
  q("priorites", "Un véhicule quittant une aire de stationnement en marche arrière pour rejoindre la chaussée doit :", [
    { text: "S'assurer qu'aucun usager n'est engagé avant de manœuvrer", correct: true },
    { text: "Klaxonner puis s'engager sans vérification supplémentaire", correct: false },
    { text: "Manœuvrer rapidement pour limiter le temps d'exposition", correct: false },
  ], "Toute sortie de stationnement, notamment en marche arrière, impose une vérification complète de l'environnement avant de manœuvrer."),
  q("priorites", "Sur une portion de route où alternent successivement plusieurs cédez-le-passage rapprochés, il convient de :", [
    { text: "Traiter chaque panneau indépendamment, sans présumer de la situation suivante", correct: true },
    { text: "Ne respecter que le premier panneau rencontré", correct: false },
    { text: "Ne respecter que le dernier panneau rencontré", correct: false },
  ], "Chaque signalisation rencontrée doit être respectée pour elle-même, indépendamment des panneaux précédents."),

  // Vitesse & distances
  q("vitesse", "La vitesse recommandée pour aborder un rond-point, même sans panneau de limitation spécifique, est :", [
    { text: "Réduite, afin de pouvoir céder le passage ou s'arrêter si nécessaire", correct: true },
    { text: "Identique à celle de la route qui y mène", correct: false },
    { text: "Augmentée pour dégager rapidement le giratoire", correct: false },
  ], "La configuration d'un giratoire impose naturellement une réduction de vitesse pour la sécurité de tous les usagers."),
  q("vitesse", "Une distance de sécurité trop courte lors d'un freinage d'urgence du véhicule précédent peut entraîner :", [
    { text: "Une collision par l'arrière dont vous seriez responsable", correct: true },
    { text: "Aucune conséquence si votre véhicule est équipé de l'ABS", correct: false },
    { text: "Une conséquence uniquement matérielle, jamais de responsabilité", correct: false },
  ], "L'ABS améliore le contrôle du freinage mais ne remplace jamais une distance de sécurité suffisante."),

  // Le conducteur
  q("conducteur", "Le fait de laisser un jeune conducteur en période probatoire consommer même une faible quantité d'alcool avant de conduire :", [
    { text: "L'expose à un risque de dépassement du seuil très bas autorisé (0,2 g/L)", correct: true },
    { text: "Ne présente aucun risque tant qu'il se sent en forme", correct: false },
    { text: "N'est un problème qu'à partir d'un verre complet", correct: false },
  ], "Le seuil très bas imposé aux conducteurs novices peut être atteint avec une quantité d'alcool minime."),
  q("conducteur", "Consulter des notifications sur son téléphone posé sur le tableau de bord, même sans le tenir, en conduisant est :", [
    { text: "Risqué et potentiellement sanctionnable en cas de défaut de maîtrise du véhicule", correct: true },
    { text: "Totalement sans danger puisque le téléphone n'est pas tenu en main", correct: false },
    { text: "Autorisé uniquement à l'arrêt à un feu rouge", correct: false },
  ], "La distraction visuelle et cognitive existe même sans manipulation physique du téléphone, et peut être retenue en cas d'incident."),

  // Autres usagers
  q("usagers", "Face à un utilisateur de fauteuil roulant électrique circulant sur la chaussée en l'absence de trottoir, vous devez :", [
    { text: "Le traiter avec la même prudence qu'un piéton vulnérable", correct: true },
    { text: "Le considérer comme un véhicule motorisé classique", correct: false },
    { text: "Le dépasser sans distance particulière", correct: false },
  ], "Les fauteuils roulants, même motorisés, sont assimilés à des piétons nécessitant une attention particulière."),
  q("usagers", "Les livreurs à deux-roues motorisés pressés par le temps restent soumis :", [
    { text: "Aux mêmes règles de circulation que tout autre usager motorisé", correct: true },
    { text: "À des règles assouplies compte tenu de leur activité", correct: false },
    { text: "À aucune règle en agglomération dense", correct: false },
  ], "Aucune activité professionnelle ne dispense du respect intégral du code de la route."),

  // Premiers secours
  q("secours", "Un témoin qui ne sait pas pratiquer un massage cardiaque peut néanmoins être guidé par :", [
    { text: "Le régulateur du SAMU au téléphone, qui peut donner des instructions en direct", correct: true },
    { text: "Personne, il doit s'abstenir totalement", correct: false },
    { text: "Uniquement une application mobile spécialisée", correct: false },
  ], "Les services d'urgence peuvent guider un témoin non formé par téléphone pour effectuer les gestes essentiels."),
  q("secours", "Face à une victime consciente qui a très froid après un accident, il convient de :", [
    { text: "La couvrir pour limiter l'hypothermie en attendant les secours", correct: true },
    { text: "Ne rien faire, la température n'est pas une priorité", correct: false },
    { text: "La faire bouger pour la réchauffer rapidement", correct: false },
  ], "Prévenir l'hypothermie fait partie des gestes de premiers secours de base, particulièrement après un choc."),

  // Mécanique
  q("mecanique", "Un jeu excessif détecté dans la direction d'un véhicule doit être :", [
    { text: "Signalé à un professionnel, il peut affecter la précision de conduite", correct: true },
    { text: "Ignoré s'il ne gêne pas au quotidien", correct: false },
    { text: "Corrigé soi-même en serrant le volant plus fort", correct: false },
  ], "Un jeu anormal dans la direction peut compromettre la réactivité du véhicule, notamment en situation d'urgence."),
  q("mecanique", "L'entretien du système de climatisation (recharge de gaz, filtre) contribue à :", [
    { text: "Maintenir un habitacle sain et une visibilité optimale (désembuage efficace)", correct: true },
    { text: "N'a aucun lien avec la sécurité de conduite", correct: false },
    { text: "Uniquement au confort thermique, jamais à la visibilité", correct: false },
  ], "Un système de climatisation défaillant peut nuire au désembuage rapide des vitres, affectant la visibilité."),

  // Environnement
  q("environnement", "Le choix d'un itinéraire évitant les zones très embouteillées permet de :", [
    { text: "Réduire le temps de trajet passé au ralenti, source de surconsommation", correct: true },
    { text: "N'a aucun effet sur la consommation globale", correct: false },
    { text: "Augmenter la consommation en roulant plus longtemps", correct: false },
  ], "Les phases de ralenti et d'arrêt répété en embouteillage sont particulièrement consommatrices de carburant."),

  // Sécurité & chargement
  q("securite", "Un chien transporté en liberté dans l'habitacle, sans harnais ni cage, constitue un risque car :", [
    { text: "Il peut gêner les mouvements du conducteur ou devenir un projectile en cas de choc", correct: true },
    { text: "Il n'existe aucun risque tant que l'animal est calme", correct: false },
    { text: "Le risque ne concerne que les gros chiens", correct: false },
  ], "Un animal libre dans l'habitacle peut se déplacer de façon imprévisible et représente un danger réel en cas de freinage ou choc."),

  // Divers
  q("divers", "Le stationnement prolongé sur une place de livraison, hors horaires de livraison, est :", [
    { text: "Considéré comme gênant et peut être sanctionné", correct: true },
    { text: "Toléré si aucun camion de livraison n'est présent", correct: false },
    { text: "Autorisé le week-end uniquement", correct: false },
  ], "Les places de livraison sont réservées à leur usage spécifique, indépendamment de la présence effective d'un véhicule de livraison."),
  q("divers", "Un véhicule immatriculé à l'étranger circulant en France doit respecter :", [
    { text: "Le code de la route français comme tout autre usager", correct: true },
    { text: "Uniquement les règles de son pays d'origine", correct: false },
    { text: "Un mélange des règles françaises et de son pays", correct: false },
  ], "Tout véhicule circulant sur le territoire français est soumis à la réglementation française, quelle que soit son immatriculation."),
  /* ===== VAGUE 11 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP à l'entrée d'un carrefour giratoire ancien, non conforme aux normes actuelles, reste :", [
    { text: "Applicable tant qu'il n'a pas été retiré ou remplacé officiellement", correct: true },
    { text: "Sans valeur s'il ne correspond plus aux normes récentes", correct: false },
    { text: "Applicable seulement aux poids lourds", correct: false },
  ], "Un panneau reste juridiquement contraignant tant qu'il est en place, indépendamment de son ancienneté.", { image: WM("AB4") }),
  q("signalisation", "Face à un cédez-le-passage à la sortie d'une zone industrielle, la prudence s'impose particulièrement à cause :", [
    { text: "De la présence possible de poids lourds à la visibilité réduite", correct: true },
    { text: "De l'absence totale de trafic dans ce type de zone", correct: false },
    { text: "De la présence exclusive de piétons", correct: false },
  ], "Les zones industrielles concentrent souvent un trafic de poids lourds nécessitant une vigilance accrue aux intersections.", { image: WM("AB3a") }),
  q("signalisation", "Un panneau de danger « feux tricolores » à l'approche d'un carrefour signifie que :", [
    { text: "Des feux de signalisation lumineuse réglementent prochainement la circulation", correct: true },
    { text: "Les feux sont en panne à cet endroit", correct: false },
    { text: "Les feux ne fonctionnent que la nuit", correct: false },
  ], "Ce panneau prévient simplement de la présence prochaine d'une signalisation lumineuse, permettant l'anticipation.", { image: WM("A4") }),

  // Priorités
  q("priorites", "Sur une voie où un marquage au sol « cédez le passage » (triangle blanc) est peint sans panneau associé visible, vous devez :", [
    { text: "Respecter cette obligation malgré l'absence du panneau, le marquage ayant valeur réglementaire", correct: true },
    { text: "Ignorer le marquage en l'absence de panneau", correct: false },
    { text: "Vous arrêter complètement par précaution", correct: false },
  ], "Le marquage au sol a la même valeur contraignante qu'un panneau, qu'il soit ou non doublé d'une signalisation verticale."),
  q("priorites", "Un cycliste effectuant un « tourne-à-droite » autorisé au feu rouge (panneau spécifique) doit néanmoins :", [
    { text: "Céder le passage aux piétons et aux véhicules prioritaires avant de s'engager", correct: true },
    { text: "S'engager sans vérification, l'autorisation suffisant", correct: false },
    { text: "Attendre le feu vert malgré l'autorisation", correct: false },
  ], "L'autorisation de tourner au feu rouge pour les cyclistes reste conditionnée au respect de la priorité des autres usagers engagés."),

  // Vitesse & distances
  q("vitesse", "Une conduite à vitesse constante et modérée sur autoroute favorise :", [
    { text: "Une meilleure anticipation et une réduction de la fatigue au volant", correct: true },
    { text: "Une augmentation du risque d'endormissement", correct: false },
    { text: "Une usure accélérée des pneus uniquement", correct: false },
  ], "Une vitesse stable et modérée permet une conduite plus sereine et moins fatigante sur de longs trajets."),
  q("vitesse", "Face à un ralentissement soudain en amont sur autoroute, la meilleure pratique est de :", [
    { text: "Activer ses feux de détresse brièvement pour avertir les véhicules suiveurs, puis freiner progressivement", correct: true },
    { text: "Freiner brutalement sans avertir les véhicules suiveurs", correct: false },
    { text: "Changer de voie brusquement sans ralentir", correct: false },
  ], "Avertir les véhicules suiveurs d'un ralentissement soudain contribue à éviter les collisions en chaîne."),

  // Le conducteur
  q("conducteur", "Le fait de rouler avec des vitres teintées non conformes à la réglementation peut entraîner :", [
    { text: "Une contravention et l'obligation de mise en conformité du véhicule", correct: true },
    { text: "Aucune conséquence si les vitres ont été teintées en usine", correct: false },
    { text: "Une simple recommandation sans sanction", correct: false },
  ], "La réglementation impose un seuil minimal de transparence pour les vitres avant, indépendamment de leur origine."),
  q("conducteur", "Un conducteur souffrant d'apnée du sommeil non traitée présente un risque accru de :", [
    { text: "Somnolence et d'endormissement au volant", correct: true },
    { text: "Aucun risque particulier tant qu'il se sent reposé", correct: false },
    { text: "Excès de vitesse uniquement", correct: false },
  ], "L'apnée du sommeil non traitée altère fortement la qualité du repos, augmentant le risque de somnolence diurne au volant."),

  // Autres usagers
  q("usagers", "Face à un utilisateur de vélo cargo transportant des enfants, la prudence de dépassement doit être :", [
    { text: "Renforcée du fait du gabarit et de la charge transportée", correct: true },
    { text: "Identique à celle appliquée pour un vélo classique", correct: false },
    { text: "Réduite car ce type de vélo roule plus lentement en sécurité", correct: false },
  ], "Un vélo cargo chargé a un comportement routier différent, nécessitant une marge de sécurité accrue lors du dépassement."),
  q("usagers", "Un motard filant entre les files de véhicules à l'arrêt (interfiles), là où c'est autorisé, doit :", [
    { text: "Rouler à vitesse modérée et rester vigilant aux changements de voie des autres véhicules", correct: true },
    { text: "Rouler aussi vite que possible pour limiter le temps d'exposition", correct: false },
    { text: "Klaxonner en continu pour signaler sa présence", correct: false },
  ], "La circulation interfiles, même autorisée dans certains départements à titre expérimental, impose une vitesse mesurée et une grande vigilance."),

  // Premiers secours
  q("secours", "Une victime présentant une plaie avec un corps étranger planté (couteau, débris) doit être traitée en :", [
    { text: "Ne retirant jamais l'objet, pour éviter d'aggraver l'hémorragie", correct: true },
    { text: "Retirant immédiatement l'objet pour nettoyer la plaie", correct: false },
    { text: "Retirant l'objet uniquement s'il est petit", correct: false },
  ], "Retirer un corps étranger planté peut déclencher ou aggraver une hémorragie ; il doit être laissé en place jusqu'à l'arrivée des secours."),
  q("secours", "Le message d'alerte au 15, 18 ou 112 doit préciser en priorité :", [
    { text: "La nature de l'événement et la localisation précise", correct: true },
    { text: "Uniquement le numéro de téléphone de l'appelant", correct: false },
    { text: "Uniquement le nombre de véhicules impliqués", correct: false },
  ], "Nature et localisation sont les informations essentielles permettant un déclenchement rapide et adapté des secours."),

  // Mécanique
  q("mecanique", "Le contrôle de l'usure des plaquettes de frein doit être réalisé :", [
    { text: "Régulièrement, selon la périodicité recommandée par le constructeur", correct: true },
    { text: "Uniquement lorsqu'un bruit anormal apparaît", correct: false },
    { text: "Seulement au moment du contrôle technique", correct: false },
  ], "Un contrôle préventif régulier permet d'anticiper l'usure avant qu'elle ne devienne dangereuse ou audible."),
  q("mecanique", "Une pédale de frein anormalement molle ou spongieuse peut indiquer :", [
    { text: "La présence d'air dans le circuit de freinage à faire purger", correct: true },
    { text: "Un simple réglage de confort du véhicule", correct: false },
    { text: "Un problème exclusivement lié aux pneus", correct: false },
    ], "Une pédale spongieuse est un signal d'alerte fréquent lié à un défaut du circuit hydraulique de freinage."),

  /* ===== VAGUE 12 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP implanté à une sortie d'usine sur une route départementale a la même valeur qu'un STOP :", [
    { text: "Sur n'importe quelle autre route publique, sans distinction", correct: true },
    { text: "Uniquement pendant les horaires d'ouverture de l'usine", correct: false },
    { text: "Uniquement pour les véhicules de l'usine", correct: false },
  ], "La nature de la voie desservie n'affecte pas la portée réglementaire d'un panneau STOP correctement implanté.", { image: WM("AB4") }),
  q("signalisation", "Le panneau cédez-le-passage à une intersection avec une piste cyclable oblige le conducteur à :", [
    { text: "Céder le passage aux cyclistes engagés sur la piste qu'il traverse", correct: true },
    { text: "Ne céder qu'aux véhicules motorisés", correct: false },
    { text: "Céder uniquement aux cyclistes portant un casque", correct: false },
  ], "Les cyclistes sur une piste protégée bénéficient de la même priorité que tout autre usager visé par le panneau.", { image: WM("AB3a") }),
  q("signalisation", "Face à un panneau de danger annonçant un « vent latéral », les véhicules les plus concernés sont :", [
    { text: "Les véhicules hauts (camping-cars, poids lourds, véhicules avec remorque)", correct: true },
    { text: "Uniquement les motos", correct: false },
    { text: "Uniquement les voitures de sport", correct: false },
  ], "La prise au vent est plus importante pour les véhicules à grande surface latérale, nécessitant une vigilance accrue.", { image: WM("A4") }),

  // Priorités
  q("priorites", "Un véhicule circulant sur une route prioritaire qui bifurque légèrement à un carrefour reste prioritaire :", [
    { text: "Uniquement si la signalisation de priorité continue clairement dans la direction empruntée", correct: true },
    { text: "Quelle que soit la direction prise, automatiquement", correct: false },
    { text: "Seulement s'il roule en ligne droite", correct: false },
  ], "Le statut prioritaire suit le tracé signalé de la route ; il ne s'applique pas automatiquement à toute direction prise au carrefour."),
  q("priorites", "Deux véhicules circulant en sens inverse veulent tous deux tourner à gauche au même carrefour. La prudence recommande de :", [
    { text: "Se croiser par l'arrière (petit rayon) sauf configuration locale contraire", correct: true },
    { text: "Se croiser systématiquement par l'avant", correct: false },
    { text: "Klaxonner pour décider qui passe en premier", correct: false },
  ], "La règle habituelle du croisement par l'arrière limite les angles morts et facilite la visibilité mutuelle, sauf signalisation locale différente."),

  // Vitesse & distances
  q("vitesse", "La vitesse excessive est identifiée par les études comme un facteur impliqué dans environ :", [
    { text: "Un accident mortel sur trois en France", correct: true },
    { text: "Moins de 5% des accidents mortels", correct: false },
    { text: "La quasi-totalité des accidents matériels uniquement", correct: false },
  ], "La vitesse reste l'une des toutes premières causes de mortalité routière en France selon les études officielles de sécurité routière."),
  q("vitesse", "Une distance de sécurité respectée permet également de réduire :", [
    { text: "Le stress et la fatigue liés à une conduite trop rapprochée", correct: true },
    { text: "Uniquement le risque d'amende", correct: false },
    { text: "Uniquement la consommation de carburant", correct: false },
  ], "Rouler trop près du véhicule précédent génère une tension inutile, accentuant la fatigue sur les longs trajets."),

  // Le conducteur
  q("conducteur", "Le permis moto A2 est limité en puissance et s'obtient généralement :", [
    { text: "Dès 18 ans, avec un accès progressif au permis A sans limitation après 2 ans", correct: true },
    { text: "Uniquement après 25 ans", correct: false },
    { text: "Dès 16 ans sans aucune limitation", correct: false },
  ], "Le permis A2, accessible dès 18 ans, permet un accès progressif à la pleine puissance après deux ans d'expérience sans infraction grave."),
  q("conducteur", "La consommation d'énergisants en grande quantité avant un trajet peut entraîner :", [
    { text: "Une excitation suivie d'un contrecoup de fatigue dangereux au volant", correct: true },
    { text: "Une vigilance stable et durable sur tout le trajet", correct: false },
    { text: "Une amélioration permanente des réflexes", correct: false },
  ], "Les effets stimulants de ces boissons sont temporaires et peuvent être suivis d'une baisse brutale de vigilance."),

  // Autres usagers
  q("usagers", "Face à un piéton hésitant au bord d'un passage protégé sans s'engager clairement, vous devez :", [
    { text: "Ralentir par précaution, son intention pouvant se confirmer brusquement", correct: true },
    { text: "Continuer sans ralentir tant qu'il n'a pas posé le pied sur la chaussée", correct: false },
    { text: "Klaxonner pour connaître son intention", correct: false },
  ], "L'anticipation prudente reste de mise face à toute incertitude sur l'intention d'un piéton proche d'un passage protégé."),
  q("usagers", "Un motard positionné en feu de croisement dans votre rétroviseur peut être plus difficile à évaluer en distance car :", [
    { text: "Un seul phare rend l'estimation de la distance et de la vitesse plus complexe qu'avec deux feux", correct: true },
    { text: "Les motos n'ont qu'un seul feu réglementaire, sans incidence sur la perception", correct: false },
    { text: "Les motards roulent toujours plus près que les voitures", correct: false },
  ], "La perception visuelle de distance est facilitée par deux points lumineux espacés ; un seul phare complique cette estimation."),

  // Premiers secours
  q("secours", "Face à un accident impliquant une matière dangereuse identifiée par un panneau orange sur le véhicule, vous devez :", [
    { text: "Vous tenir à distance et informer précisément les secours de cette information", correct: true },
    { text: "Vous approcher normalement comme pour tout accident", correct: false },
    { text: "Ouvrir les fenêtres du véhicule concerné pour aérer", correct: false },
  ], "La présence de matières dangereuses impose une distance de sécurité accrue et une information immédiate des secours spécialisés."),
  q("secours", "Un témoin d'accident doit-il déplacer les véhicules accidentés avant l'arrivée des secours ?", [
    { text: "Seulement si leur position constitue un danger immédiat pour la circulation", correct: true },
    { text: "Systématiquement, pour dégager la voie au plus vite", correct: false },
    { text: "Jamais, quelle que soit la situation", correct: false },
  ], "Le déplacement des véhicules ne se justifie qu'en cas de danger avéré, pour ne pas compromettre les constatations ultérieures."),

  // Mécanique
  q("mecanique", "Le remplacement périodique du filtre d'habitacle contribue à :", [
    { text: "Une meilleure qualité de l'air respiré et un désembuage plus efficace", correct: true },
    { text: "N'a aucun effet sur le confort de conduite", correct: false },
    { text: "Une réduction de la consommation de carburant uniquement", correct: false },
  ], "Un filtre d'habitacle encrassé réduit la qualité de l'air filtré et peut ralentir le désembuage des vitres."),
  q("mecanique", "Un pneu présentant une hernie (déformation visible) sur le flanc doit être :", [
    { text: "Remplacé immédiatement, le risque d'éclatement étant élevé", correct: true },
    { text: "Simplement surveillé sans urgence particulière", correct: false },
    { text: "Regonflé pour corriger la déformation", correct: false },
  ], "Une hernie traduit une rupture interne de la carcasse du pneu, avec un risque élevé d'éclatement soudain."),

  // Environnement
  q("environnement", "Un moteur qui tourne au ralenti pendant un arrêt prolongé en ville contribue à :", [
    { text: "Une pollution locale inutile, notamment pour les riverains proches", correct: true },
    { text: "Aucun impact notable sur la qualité de l'air locale", correct: false },
    { text: "Une amélioration de la qualité de l'air alentour", correct: false },
  ], "Les émissions au ralenti, bien que faibles individuellement, s'accumulent et affectent la qualité de l'air en zone dense."),

  // Sécurité & chargement
  q("securite", "Une galerie de toit vide (sans chargement) mais installée en permanence sur le véhicule entraîne :", [
    { text: "Une légère surconsommation liée à la résistance aérodynamique supplémentaire", correct: true },
    { text: "Aucun effet notable sur la conduite ou la consommation", correct: false },
    { text: "Une réduction de la consommation grâce à l'aérodynamisme", correct: false },
  ], "Toute augmentation de la prise au vent, même sans chargement, affecte légèrement la consommation de carburant."),

  // Divers
  q("divers", "Le stationnement payant non réglé (absence de ticket ou paiement) est sanctionné par :", [
    { text: "Un forfait post-stationnement (FPS) propre à chaque commune", correct: true },
    { text: "Un retrait de points automatique", correct: false },
    { text: "Une convocation systématique au tribunal", correct: false },
  ], "Depuis la dépénalisation du stationnement payant, l'absence de paiement est sanctionnée par un forfait post-stationnement local, sans retrait de points."),
  q("divers", "Un conducteur non-résident verbalisé à l'étranger dans l'Union européenne peut voir la sanction :", [
    { text: "Transmise et exécutée dans son pays d'origine grâce à la coopération européenne", correct: true },
    { text: "Systématiquement annulée dès le retour dans son pays", correct: false },
    { text: "Appliquée uniquement s'il revient dans le même pays", correct: false },
  ], "Des accords européens permettent l'échange d'informations et l'exécution transfrontalière de certaines sanctions routières."),

  /* ===== VAGUE 13 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP couplé à un panonceau « toutes directions » impose l'arrêt :", [
    { text: "Quelle que soit la direction que vous comptez prendre ensuite", correct: true },
    { text: "Uniquement si vous continuez tout droit", correct: false },
    { text: "Uniquement si vous tournez à gauche", correct: false },
  ], "Ce panonceau précise que l'obligation d'arrêt s'applique sans exception, peu importe la manœuvre prévue ensuite.", { image: WM("AB4") }),
  q("signalisation", "Le panneau cédez-le-passage reste valable même en cas de :", [
    { text: "Conditions météo dégradées réduisant la visibilité du carrefour", correct: true },
    { text: "Beau temps uniquement", correct: false },
    { text: "Trafic très faible uniquement", correct: false },
  ], "L'obligation de céder le passage ne dépend d'aucune condition météorologique particulière.", { image: WM("AB3a") }),

  // Priorités
  q("priorites", "Sur une portion de route en travaux avec une seule voie de circulation gérée par un panneau B15 (cédez le passage au sens inverse), vous devez :", [
    { text: "Céder le passage aux véhicules venant en face lorsque le panneau l'indique", correct: true },
    { text: "Passer en premier systématiquement", correct: false },
    { text: "Attendre l'accord d'un agent avant de vous engager", correct: false },
  ], "La signalisation de circulation alternée par panneaux B15/C18 détermine clairement qui doit céder le passage."),
  q("priorites", "Un motard doublant une file de voitures à l'arrêt (circulation interfiles) dans une zone où c'est autorisé doit céder le passage :", [
    { text: "À tout véhicule qui changerait subitement de voie", correct: true },
    { text: "À personne, il est prioritaire dans le couloir qu'il emprunte", correct: false },
    { text: "Uniquement aux autres motards", correct: false },
  ], "La circulation interfiles impose une vigilance renforcée car les autres véhicules peuvent changer de voie sans anticiper sa présence."),

  // Vitesse & distances
  q("vitesse", "Un panneau de rappel de vitesse après une sortie d'autoroute confirme que :", [
    { text: "La limitation affichée doit être immédiatement respectée dès l'entrée sur cette voie", correct: true },
    { text: "Une tolérance de 500 mètres est accordée avant application", correct: false },
    { text: "La limitation ne concerne que les poids lourds", correct: false },
  ], "Une limitation de vitesse s'applique dès le panneau, sans tolérance de distance pour s'y conformer."),
  q("vitesse", "La conduite à vitesse élevée par mauvaise visibilité (nuit, brouillard, pluie) augmente principalement le risque de :", [
    { text: "Ne pas pouvoir réagir à temps face à un obstacle détecté tardivement", correct: true },
    { text: "Aucun risque supplémentaire par rapport au jour", correct: false },
    { text: "Uniquement une usure accélérée des essuie-glaces", correct: false },
  ], "La combinaison vitesse élevée et faible visibilité réduit fortement la marge de réaction disponible face à un danger soudain."),

  // Le conducteur
  q("conducteur", "Un conducteur ayant subi une suspension de permis pour excès de vitesse doit, à l'issue de la suspension :", [
    { text: "Récupérer son permis sans repasser l'examen si la suspension est simple (non liée à une invalidation)", correct: true },
    { text: "Toujours repasser l'intégralité de l'examen du permis", correct: false },
    { text: "Attendre une décision judiciaire supplémentaire dans tous les cas", correct: false },
  ], "Une simple suspension, contrairement à une invalidation pour solde de points nul, ne nécessite pas de repasser l'examen."),
  q("conducteur", "Le stress chronique lié à la conduite (bouchons, retards) peut être atténué par :", [
    { text: "Une meilleure anticipation des trajets et une gestion du temps plus large", correct: true },
    { text: "Une conduite plus rapide pour compenser le retard", correct: false },
    { text: "L'utilisation systématique du téléphone pour se distraire", correct: false },
  ], "Anticiper son trajet et prévoir une marge de temps réduit le stress, contrairement à une prise de risque par excès de vitesse."),

  // Autres usagers
  q("usagers", "Face à un cycliste hésitant à une intersection sans marquage clair, la meilleure attitude est de :", [
    { text: "Ralentir et lui laisser le temps de se positionner clairement", correct: true },
    { text: "Le doubler rapidement pour ne pas perdre de temps", correct: false },
    { text: "Klaxonner pour accélérer sa décision", correct: false },
  ], "La prudence face à un usager vulnérable hésitant limite le risque de collision imprévue."),
  q("usagers", "Un piéton portant des écouteurs et absorbé par son téléphone en traversant présente un risque accru car :", [
    { text: "Sa vigilance à l'environnement sonore et visuel est réduite", correct: true },
    { text: "Cela n'a aucune incidence sur son comportement", correct: false },
    { text: "Il devient automatiquement prioritaire", correct: false },
  ], "La distraction du piéton, comme celle du conducteur, augmente le risque d'accident et impose une prudence renforcée du conducteur."),

  // Premiers secours
  q("secours", "Face à une victime présentant une hémorragie de nez importante après un choc, il faut :", [
    { text: "La pencher légèrement en avant et comprimer la narine concernée", correct: true },
    { text: "La pencher en arrière pour éviter que le sang ne coule", correct: false },
    { text: "L'allonger complètement à plat", correct: false },
  ], "Pencher la tête en arrière peut faire avaler le sang et masquer la gravité réelle du saignement ; la position penchée en avant est recommandée."),
  q("secours", "Un défibrillateur ne doit jamais être utilisé si la victime :", [
    { text: "Est consciente et respire normalement", correct: true },
    { text: "Est allongée sur une surface métallique", correct: false },
    { text: "Porte des vêtements mouillés", correct: false },
  ], "Le défibrillateur est réservé aux arrêts cardiaques confirmés chez une victime inconsciente ne respirant pas normalement."),

  // Mécanique
  q("mecanique", "Le témoin de pression des pneus (TPMS) allumé au tableau de bord signale :", [
    { text: "Une pression anormale détectée sur au moins un pneu", correct: true },
    { text: "Un problème de freinage", correct: false },
    { text: "Un problème de niveau d'huile", correct: false },
  ], "Ce témoin spécifique alerte sur un écart de pression détecté par le système de surveillance des pneumatiques."),
  q("mecanique", "L'entretien de la batterie (bornes propres, fixation correcte) prévient principalement :", [
    { text: "Les pannes de démarrage et les risques de court-circuit", correct: true },
    { text: "L'usure des pneus", correct: false },
    { text: "La surconsommation de carburant", correct: false },
  ], "Une batterie mal entretenue est une cause fréquente de panne, avec un risque de court-circuit en cas de mauvaise fixation."),

  // Environnement
  q("environnement", "Le suivi de son éco-score ou de ses statistiques de consommation via un boîtier connecté permet de :", [
    { text: "Identifier ses habitudes de conduite à améliorer pour réduire son impact", correct: true },
    { text: "N'a aucune utilité pratique", correct: false },
    { text: "Augmenter automatiquement les performances du moteur", correct: false },
  ], "Ces outils offrent un retour concret sur le style de conduite, facilitant les ajustements vers une conduite plus économique."),

  // Sécurité & chargement
  q("securite", "Le port de vêtements sombres sans élément réfléchissant pour un cycliste nocturne :", [
    { text: "Réduit fortement sa visibilité par les autres usagers", correct: true },
    { text: "N'a aucune incidence si l'éclairage du vélo est correct", correct: false },
    { text: "Est compensé automatiquement par l'éclairage public", correct: false },
  ], "Même avec un éclairage réglementaire, des vêtements sombres réduisent la détection précoce du cycliste par les automobilistes."),

  // Divers
  q("divers", "Une amende forfaitaire non contestée et non payée dans les délais peut voir son montant :", [
    { text: "Majoré automatiquement après le délai de paiement initial", correct: true },
    { text: "Rester identique indéfiniment sans majoration", correct: false },
    { text: "Réduit de moitié après un an", correct: false },
  ], "Le non-paiement dans les délais entraîne une majoration automatique du montant de l'amende forfaitaire."),
  q("divers", "Un jeune conducteur titulaire du permis depuis 2 ans souhaitant conduire un véhicule de location doit généralement :", [
    { text: "S'acquitter parfois d'une surprime ou de conditions spécifiques imposées par le loueur", correct: true },
    { text: "N'a jamais de condition différente d'un conducteur expérimenté", correct: false },
    { text: "Se voir systématiquement refuser la location", correct: false },
  ], "De nombreux loueurs appliquent des conditions particulières (surprime, franchise) aux conducteurs les moins expérimentés."),
  /* ===== VAGUE 14 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP à la sortie d'un chantier temporaire mobile (camion de travaux) a la même valeur qu'un panneau fixe :", [
    { text: "Oui, la signalisation temporaire de chantier a pleine valeur réglementaire", correct: true },
    { text: "Non, elle n'a qu'une valeur indicative", correct: false },
    { text: "Seulement si un agent est présent à proximité", correct: false },
  ], "Toute signalisation temporaire correctement mise en place par un gestionnaire habilité a la même force obligatoire qu'une signalisation permanente.", { image: WM("AB4") }),
  q("signalisation", "Un cédez-le-passage positionné à la jonction d'une voie verte (piste multi-usages) et d'une route impose de céder :", [
    { text: "Aux piétons, cyclistes et autres usagers non motorisés engagés sur la voie verte", correct: true },
    { text: "Uniquement aux véhicules motorisés éventuels", correct: false },
    { text: "Uniquement aux enfants", correct: false },
  ], "Les voies vertes accueillent une diversité d'usagers non motorisés à qui la priorité doit être cédée selon la signalisation en place.", { image: WM("AB3a") }),

  // Priorités
  q("priorites", "À un carrefour où un panneau de priorité ponctuelle (triangle inversé jaune isolé) est visible sans continuité de signalisation, celui-ci s'applique :", [
    { text: "Uniquement à ce carrefour précis, sans effet sur les suivants", correct: true },
    { text: "À tous les carrefours suivants sur plusieurs kilomètres", correct: false },
    { text: "À tout le département", correct: false },
  ], "Un panneau de priorité ponctuel ne concerne que le carrefour où il est implanté, sauf signalisation de continuité explicite."),
  q("priorites", "Sur une route où la priorité à droite s'applique, un vélo arrivant de la droite est traité :", [
    { text: "Exactement comme un véhicule motorisé pour l'application de cette règle", correct: true },
    { text: "Sans droit de priorité, réservé aux seuls véhicules motorisés", correct: false },
    { text: "Avec une priorité systématiquement supérieure", correct: false },
  ], "Le code de la route ne fait pas de distinction de mode de transport pour l'application de la priorité à droite."),

  // Vitesse & distances
  q("vitesse", "Sur une portion de route où la limite passe de 90 à 70 km/h sans transition progressive signalée, vous devez :", [
    { text: "Ralentir avant le panneau pour être en conformité dès son franchissement", correct: true },
    { text: "Ralentir progressivement sur les 200 mètres suivant le panneau", correct: false },
    { text: "Continuer à 90 km/h jusqu'au prochain panneau", correct: false },
  ], "La nouvelle limitation s'applique dès le panneau ; il faut donc avoir réduit sa vitesse avant de le franchir."),
  q("vitesse", "Un excès de vitesse constaté par un contrôle mobile embarqué (voiture radar) est traité :", [
    { text: "De la même façon qu'un radar fixe classique", correct: true },
    { text: "Avec une tolérance supplémentaire du fait du contrôle mobile", correct: false },
    { text: "Uniquement par un simple avertissement", correct: false },
  ], "Le type de dispositif de contrôle (fixe ou mobile) n'affecte pas la nature de la sanction appliquée à l'excès constaté."),

  // Le conducteur
  q("conducteur", "Un conducteur qui a fait l'objet d'un retrait de 6 points ou plus en une seule fois reçoit :", [
    { text: "Une lettre l'informant du solde de points restant et l'invitant à la vigilance", correct: true },
    { text: "Aucune notification particulière", correct: false },
    { text: "Une convocation immédiate au tribunal", correct: false },
  ], "Un retrait important de points fait systématiquement l'objet d'une notification officielle informant le conducteur de sa situation."),
  q("conducteur", "Les stages de récupération de points volontaires permettent de récupérer :", [
    { text: "Jusqu'à 4 points, dans la limite du plafond légal du permis", correct: true },
    { text: "La totalité des points perdus, sans limite", correct: false },
    { text: "2 points maximum, une seule fois dans sa vie", correct: false },
  ], "Ces stages permettent une récupération plafonnée à 4 points, une fois par période de 12 mois généralement."),

  // Autres usagers
  q("usagers", "Un piéton en situation de handicap moteur utilisant un déambulateur pour traverser doit bénéficier de :", [
    { text: "Suffisamment de temps pour traverser en toute sécurité, sans précipitation imposée", correct: true },
    { text: "D'aucune attention particulière différente des autres piétons", correct: false },
    { text: "D'un accompagnement obligatoire par un agent", correct: false },
  ], "La vulnérabilité et la lenteur de traversée de certains piétons imposent patience et anticipation de la part des conducteurs."),
  q("usagers", "Un cycliste circulant de nuit sans éclairage réglementaire est :", [
    { text: "En infraction et particulièrement difficile à détecter pour les autres usagers", correct: true },
    { text: "Toujours suffisamment visible grâce à l'éclairage public", correct: false },
    { text: "Uniquement en tort si un accident survient", correct: false },
  ], "L'éclairage public seul ne garantit pas une visibilité suffisante ; l'éclairage propre au vélo reste une obligation réglementaire."),

  // Premiers secours
  q("secours", "Une victime en hypoglycémie sévère (perte de connaissance) chez un témoin non médical nécessite avant tout :", [
    { text: "Une alerte immédiate aux secours, sans tenter d'administrer quoi que ce soit par la bouche", correct: true },
    { text: "De lui donner immédiatement du sucre à avaler", correct: false },
    { text: "De la faire marcher pour la réveiller", correct: false },
  ], "Chez une personne inconsciente, donner quelque chose à avaler comporte un risque d'étouffement ; l'alerte aux secours prime."),
  q("secours", "Après avoir sécurisé les lieux d'un accident, le geste suivant recommandé par la méthode PAS est :", [
    { text: "Alerter les secours avant tout autre geste envers les victimes", correct: true },
    { text: "Photographier la scène pour l'assurance", correct: false },
    { text: "Déplacer les véhicules accidentés", correct: false },
  ], "La méthode PAS (Protéger, Alerter, Secourir) place l'alerte comme étape intermédiaire essentielle avant les gestes de secours eux-mêmes."),

  // Mécanique
  q("mecanique", "Un voyant orange « moteur » (check engine) allumé en continu, sans clignoter, invite à :", [
    { text: "Faire contrôler le véhicule prochainement sans urgence absolue", correct: true },
    { text: "Vous arrêter immédiatement sur la chaussée", correct: false },
    { text: "Ignorer le voyant s'il disparaît après redémarrage", correct: false },
  ], "Un voyant moteur fixe signale une anomalie à vérifier rapidement, sans nécessiter un arrêt d'urgence contrairement à un voyant clignotant."),
  q("mecanique", "La vérification du niveau de liquide lave-glace avant un trajet contribue à :", [
    { text: "Maintenir une bonne visibilité en cas de projections sur le pare-brise", correct: true },
    { text: "N'a aucun rapport avec la sécurité de conduite", correct: false },
    { text: "Réduire la consommation de carburant", correct: false },
  ], "Un pare-brise sale sans possibilité de le nettoyer en roulant peut fortement réduire la visibilité, notamment sur autoroute."),

  // Environnement
  q("environnement", "Le stationnement moteur coupé lors d'un chargement ou déchargement prolongé permet de :", [
    { text: "Limiter les émissions inutiles et le bruit en zone urbaine", correct: true },
    { text: "N'a aucun intérêt particulier", correct: false },
    { text: "Endommager le moteur à chaque coupure", correct: false },
  ], "Couper le moteur lors des arrêts prolongés hors circulation réduit à la fois pollution et nuisance sonore pour les riverains."),

  // Sécurité & chargement
  q("securite", "Le port de la ceinture par le passager avant est particulièrement important car ce siège :", [
    { text: "Est statistiquement l'un des plus exposés en cas de choc frontal", correct: true },
    { text: "Est le siège le plus sûr du véhicule", correct: false },
    { text: "N'est concerné que par les chocs latéraux", correct: false },
  ], "La place avant passager est très exposée lors d'un choc frontal, rendant le port de la ceinture essentiel à cet endroit."),

  // Divers
  q("divers", "Le défaut de vignette Crit'Air dans une zone qui l'exige peut entraîner :", [
    { text: "Une amende, même si le véhicule serait éligible à la vignette", correct: true },
    { text: "Aucune sanction tant que le véhicule n'est pas trop ancien", correct: false },
    { text: "Une simple mise en fourrière immédiate", correct: false },
  ], "L'absence de vignette apposée est sanctionnable indépendamment de l'éligibilité réelle du véhicule à une catégorie favorable."),

  /* ===== VAGUE 15 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP à l'intersection d'une voie privée ouverte à la circulation publique (centre commercial) :", [
    { text: "Doit être respecté comme sur toute voie publique dès lors qu'il est correctement implanté", correct: true },
    { text: "N'a aucune valeur réglementaire sur terrain privé ouvert au public", correct: false },
    { text: "Ne s'applique qu'aux clients du centre commercial", correct: false },
  ], "Dès qu'une voie privée est ouverte à la circulation publique, la signalisation qui y est apposée doit être respectée.", { image: WM("AB4") }),
  q("signalisation", "Le cédez-le-passage à la sortie d'une station-service impose de céder aux :", [
    { text: "Usagers circulant sur la voie publique que vous rejoignez", correct: true },
    { text: "Autres véhicules également en sortie de station", correct: false },
    { text: "Véhicules faisant le plein à cet instant", correct: false },
  ], "La priorité doit être cédée aux usagers déjà engagés sur la voie publique rejointe, indépendamment de leur provenance.", { image: WM("AB3a") }),

  // Priorités
  q("priorites", "Sur une place où un flux de circulation principal croise perpendiculairement une allée secondaire sans signalisation, le principe à appliquer reste :", [
    { text: "La priorité à droite, sauf configuration locale contraire clairement signalée", correct: true },
    { text: "La priorité systématique au flux principal", correct: false },
    { text: "La priorité au véhicule le plus lourd", correct: false },
  ], "En l'absence de signalisation contraire explicite, la règle de la priorité à droite continue de s'appliquer par défaut."),
  q("priorites", "Un scooter et une voiture arrivent en même temps à un carrefour sans signalisation, le scooter venant de la gauche. La priorité va :", [
    { text: "À la voiture, venant de la droite du scooter", correct: true },
    { text: "Toujours au deux-roues quel que soit son sens d'arrivée", correct: false },
    { text: "Au véhicule le plus rapide au moment du croisement", correct: false },
  ], "La priorité à droite s'applique sans distinction de catégorie de véhicule ; seule la position géographique compte."),

  // Vitesse & distances
  q("vitesse", "Une route classée à 3 voies avec voie centrale bidirectionnelle de dépassement impose une vitesse :", [
    { text: "Adaptée avec une vigilance renforcée, ce type de configuration étant accidentogène", correct: true },
    { text: "Identique aux autoroutes classiques sans précaution particulière", correct: false },
    { text: "Réduite uniquement pour les poids lourds", correct: false },
  ], "Ces configurations à trois voies, où le sens de circulation de la voie centrale change, exigent une prudence particulière."),
  q("vitesse", "Rouler à vitesse excessive dans une zone commerçante dense multiplie le risque pour :", [
    { text: "Les piétons traversant de manière parfois imprévisible entre les véhicules stationnés", correct: true },
    { text: "Uniquement pour la carrosserie du véhicule", correct: false },
    { text: "Uniquement pour la consommation de carburant", correct: false },
  ], "Les zones commerçantes concentrent de nombreux piétons dont les traversées peuvent être moins prévisibles, imposant une vitesse réduite."),

  // Le conducteur
  q("conducteur", "Le permis B96 permet de :", [
    { text: "Tracter une remorque plus lourde que la limite standard du permis B, après une formation courte", correct: true },
    { text: "Conduire des véhicules de transport en commun", correct: false },
    { text: "Conduire des poids lourds sans autre condition", correct: false },
  ], "Le B96 est une extension du permis B obtenue après une formation pratique, sans passer un nouvel examen complet."),
  q("conducteur", "Le fait de conduire en tongs, bien que non explicitement interdit, peut être retenu en cas d'accident si :", [
    { text: "Cela a contribué à un défaut de maîtrise avéré du véhicule", correct: true },
    { text: "L'accident n'a aucun lien avec les chaussures portées", correct: false },
    { text: "Le conducteur roulait pieds nus", correct: false },
  ], "Ce n'est pas la chaussure en elle-même qui est sanctionnée, mais son rôle éventuel dans un défaut de maîtrise constaté."),

  // Autres usagers
  q("usagers", "Face à un cycliste circulant en ligne (peloton organisé) sur une route ouverte, le dépassement doit :", [
    { text: "Respecter la distance latérale réglementaire pour chaque cycliste dépassé", correct: true },
    { text: "Peut se faire au plus près pour limiter le temps sur la voie opposée", correct: false },
    { text: "Se faire uniquement en klaxonnant au préalable", correct: false },
  ], "Chaque cycliste dépassé, même en groupe, doit bénéficier de la distance latérale de sécurité réglementaire."),
  q("usagers", "Un piéton qui traverse alors que le petit bonhomme est rouge, sur un passage à feux, est :", [
    { text: "En infraction, même si le conducteur doit rester prudent", correct: true },
    { text: "Toujours dans son droit, le passage protégé primant sur les feux", correct: false },
    { text: "Prioritaire s'il traverse en courant", correct: false },
  ], "Le respect de la signalisation lumineuse s'impose aussi aux piétons ; leur infraction ne dispense toutefois pas le conducteur de prudence."),

  // Premiers secours
  q("secours", "La surveillance des fonctions vitales (conscience, respiration) d'une victime en attendant les secours doit être :", [
    { text: "Continue, avec réévaluation régulière de son état", correct: true },
    { text: "Ponctuelle, une seule vérification suffisant", correct: false },
    { text: "Inutile si la victime semble stable au premier examen", correct: false },
  ], "L'état d'une victime peut évoluer rapidement ; une surveillance continue permet de détecter toute dégradation."),
  q("secours", "Un témoin peut-il refuser de porter assistance à une personne en danger ?", [
    { text: "Non, la non-assistance à personne en danger est un délit pénalement sanctionné", correct: true },
    { text: "Oui, l'assistance reste entièrement facultative", correct: false },
    { text: "Oui, sauf si la personne est un proche", correct: false },
  ], "Le code pénal impose une obligation d'assistance dans la limite de ses moyens, sous peine de sanctions pénales en cas de non-assistance."),

  // Mécanique
  q("mecanique", "Le contrôle visuel rapide des feux (position, croisement, stop) avant un trajet permet de :", [
    { text: "S'assurer d'être vu correctement par les autres usagers", correct: true },
    { text: "N'a aucune importance en cas de trajet diurne", correct: false },
    { text: "Vérifier uniquement l'état de la batterie", correct: false },
  ], "Certains feux (stop notamment) sont utiles même de jour pour signaler un freinage aux véhicules suiveurs."),
  q("mecanique", "Une odeur inhabituelle de brûlé pendant la conduite doit inciter à :", [
    { text: "S'arrêter en sécurité pour identifier l'origine avant de poursuivre", correct: true },
    { text: "Poursuivre normalement si le véhicule roule sans problème apparent", correct: false },
    { text: "Ouvrir toutes les fenêtres et continuer à rouler", correct: false },
  ], "Une odeur de brûlé peut signaler un défaut mécanique ou électrique sérieux nécessitant une vérification immédiate."),

  // Environnement
  q("environnement", "Le choix de pneus adaptés à la saison (été/hiver) plutôt que des pneus toutes saisons peut :", [
    { text: "Optimiser à la fois la sécurité et parfois la consommation selon les conditions rencontrées", correct: true },
    { text: "N'a aucun impact sur la performance du véhicule", correct: false },
    { text: "Uniquement affecter l'esthétique du véhicule", correct: false },
  ], "Des pneus spécifiques à la saison offrent généralement de meilleures performances d'adhérence et parfois de consommation que des pneus universels."),

  // Sécurité & chargement
  q("securite", "Un chargement de type vélo sur porte-vélo arrière doit être vérifié :", [
    { text: "Régulièrement pendant le trajet pour s'assurer de sa bonne fixation", correct: true },
    { text: "Uniquement au moment de l'installation, sans contrôle ultérieur", correct: false },
    { text: "Seulement en cas de bruit suspect", correct: false },
  ], "Les vibrations de la route peuvent desserrer une fixation initialement correcte, justifiant des vérifications en cours de trajet."),

  // Divers
  q("divers", "Le stationnement en double file, même brièvement, est considéré comme :", [
    { text: "Gênant voire très gênant selon la configuration, et sanctionné en conséquence", correct: true },
    { text: "Toléré s'il dure moins de deux minutes", correct: false },
    { text: "Autorisé si les feux de détresse sont allumés", correct: false },
  ], "Le stationnement en double file entrave systématiquement la circulation, indépendamment de sa durée."),

  /* ===== VAGUE 16 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP masqué partiellement par la végétation reste :", [
    { text: "Obligatoire, mais sa dissimulation peut être signalée pour entretien", correct: true },
    { text: "Sans effet tant qu'il n'est pas parfaitement visible", correct: false },
    { text: "Valable uniquement de jour", correct: false },
  ], "Un panneau existant reste juridiquement en vigueur même si son entretien laisse à désirer ; il convient toutefois de signaler ce défaut.", { image: WM("AB4") }),
  q("signalisation", "Le cédez-le-passage combiné à une ligne pointillée au sol vous permet de :", [
    { text: "Vous engager sans arrêt complet si la voie est manifestement libre", correct: true },
    { text: "Ne jamais vous engager sans un arrêt total", correct: false },
    { text: "Vous engager uniquement de nuit", correct: false },
  ], "La ligne pointillée associée au cédez-le-passage confirme la possibilité de franchir sans arrêt total si aucun danger n'est détecté.", { image: WM("AB3a") }),

  // Priorités
  q("priorites", "Un véhicule prioritaire à l'arrêt sur la chaussée pour une intervention doit voir la circulation :", [
    { text: "S'écarter prudemment tout en respectant les distances de sécurité avec le personnel présent", correct: true },
    { text: "Continuer sans changement de comportement", correct: false },
    { text: "S'arrêter complètement et attendre la fin de l'intervention", correct: false },
  ], "La sécurité du personnel d'intervention impose un écartement prudent des véhicules qui les croisent."),
  q("priorites", "Dans un giratoire à deux voies, un véhicule sur la voie intérieure souhaitant sortir doit :", [
    { text: "Céder le passage aux véhicules circulant sur la voie extérieure avant de sortir", correct: true },
    { text: "Sortir directement sans vérification, ayant la priorité", correct: false },
    { text: "Klaxonner avant de changer de voie", correct: false },
  ], "Le changement de voie à l'intérieur d'un giratoire impose de céder le passage à la voie que l'on rejoint, comme tout changement de file."),

  // Vitesse & distances
  q("vitesse", "La vitesse excessive combinée à une route détrempée par la pluie multiplie le risque de :", [
    { text: "Aquaplaning, où les pneus perdent tout contact avec la chaussée", correct: true },
    { text: "Aucun risque supplémentaire par rapport à une route sèche", correct: false },
    { text: "Simple éclaboussure sans conséquence", correct: false },
  ], "L'aquaplaning survient lorsque le film d'eau ne peut plus être évacué par les rainures des pneus à vitesse trop élevée."),
  q("vitesse", "Sur une portion droite et dégagée, maintenir une distance de sécurité généreuse permet notamment de :", [
    { text: "Anticiper un freinage du véhicule précédent sans stress ni réaction brusque", correct: true },
    { text: "N'apporte aucun avantage particulier sur ligne droite", correct: false },
    { text: "Ralentir artificiellement la circulation générale", correct: false },
  ], "Même sur une portion simple, une distance confortable réduit la tension et améliore l'anticipation."),

  // Le conducteur
  q("conducteur", "Un conducteur ayant un handicap reconnu peut bénéficier d'un aménagement de son permis, comme :", [
    { text: "Des restrictions ou adaptations mentionnées sur le titre selon son aptitude évaluée médicalement", correct: true },
    { text: "Aucun aménagement n'existe en droit français", correct: false },
    { text: "Une dispense totale de toute règle de circulation", correct: false },
  ], "Le permis peut être délivré avec des restrictions ou obligations d'aménagement du véhicule selon l'avis de la commission médicale."),
  q("conducteur", "La formation continue à la sécurité routière (stages volontaires, e-learning) permet de :", [
    { text: "Actualiser ses connaissances face à l'évolution de la réglementation", correct: true },
    { text: "N'a aucun intérêt une fois le permis obtenu", correct: false },
    { text: "Récupérer automatiquement des points sans stage agréé", correct: false },
  ], "La réglementation évolue régulièrement ; une actualisation périodique des connaissances reste utile pour tout conducteur."),

  // Autres usagers
  q("usagers", "Un piéton qui traverse en marchant rapidement sur un passage protégé, feu vert pour les véhicules, doit voir sa priorité :", [
    { text: "Respectée, le conducteur devant s'assurer qu'il a terminé sa traversée avant de s'engager", correct: true },
    { text: "Ignorée puisque le feu est vert pour les véhicules", correct: false },
    { text: "Respectée uniquement s'il porte un gilet réfléchissant", correct: false },
  ], "Un piéton déjà engagé légitimement conserve sa priorité de traversée, même si le feu passe favorablement aux véhicules ensuite."),
  q("usagers", "Un cycliste transportant un chargement volumineux (sacoches, panier) doit veiller à :", [
    { text: "Ne pas compromettre sa stabilité ni gêner sa visibilité ou celle des autres", correct: true },
    { text: "N'a aucune limite de charge à respecter", correct: false },
    { text: "Rouler exclusivement sur le trottoir avec ce type de chargement", correct: false },
  ], "Un chargement mal réparti peut déséquilibrer le vélo et représenter un danger pour le cycliste comme pour les autres usagers."),

  // Premiers secours
  q("secours", "Un témoin isolé face à un accident grave avec une seule victime doit prioriser :", [
    { text: "Protéger, alerter puis secourir selon ses compétences, dans cet ordre", correct: true },
    { text: "Prendre des photos avant toute autre action", correct: false },
    { text: "Chercher immédiatement un autre témoin avant d'agir", correct: false },
  ], "L'ordre PAS reste la référence méthodologique, indépendamment du nombre de témoins présents sur les lieux."),
  q("secours", "Une victime qui reprend conscience après un malaise doit être :", [
    { text: "Maintenue au calme, allongée, en attendant l'avis des secours avant de la relever", correct: true },
    { text: "Immédiatement remise debout pour vérifier qu'elle va bien", correct: false },
    { text: "Incitée à boire immédiatement de l'eau sucrée", correct: false },
  ], "Se relever trop rapidement après un malaise peut provoquer une nouvelle perte de connaissance ; la prudence s'impose."),

  // Mécanique
  q("mecanique", "Le contrôle de la tension de la courroie d'accessoires (alternateur, climatisation) prévient :", [
    { text: "Les pannes électriques et les dysfonctionnements associés", correct: true },
    { text: "N'a aucun lien avec le système électrique du véhicule", correct: false },
    { text: "Uniquement l'usure des pneus", correct: false },
  ], "Une courroie détendue ou usée peut affecter le bon fonctionnement de l'alternateur et donc l'alimentation électrique du véhicule."),

  // Environnement
  q("environnement", "L'utilisation d'un plan de trajet optimisé (GPS avec info trafic) permet de :", [
    { text: "Éviter les zones congestionnées et donc réduire consommation et stress", correct: true },
    { text: "N'a aucun effet sur la consommation réelle", correct: false },
    { text: "Augmenter systématiquement la durée du trajet", correct: false },
  ], "Éviter les embouteillages via une application connectée limite les phases de conduite les plus consommatrices."),

  // Sécurité & chargement
  q("securite", "Le port de vêtements amples ou d'une écharpe non attachée à moto ou en cabriolet présente un risque de :", [
    { text: "Happement dans une pièce mobile ou gêne de la visibilité/conduite", correct: true },
    { text: "Aucun risque particulier", correct: false },
    { text: "Simple inconfort esthétique uniquement", correct: false },
  ], "Certains vêtements amples peuvent se prendre dans des éléments mécaniques ou gêner les mouvements, un risque à ne pas négliger."),

  // Divers
  q("divers", "Un contrôle routier de nuit avec signalisation lumineuse (gyrophares, panneaux lumineux) impose de :", [
    { text: "Ralentir et se conformer aux indications données par les forces de l'ordre", correct: true },
    { text: "Accélérer pour dégager rapidement la zone", correct: false },
    { text: "Éteindre ses phares en approchant", correct: false },
  ], "Toute zone de contrôle signalée impose un ralentissement et le respect strict des instructions des agents présents."),
  q("divers", "La revente d'un véhicule sans effectuer le changement de titulaire de la carte grise expose l'ancien propriétaire à :", [
    { text: "Être potentiellement tenu responsable d'infractions commises par le nouveau conducteur", correct: true },
    { text: "Aucune conséquence une fois la vente réalisée", correct: false },
    { text: "Une simple amende forfaitaire unique", correct: false },
  ], "Tant que le changement de titulaire n'est pas effectif, le vendeur reste juridiquement lié au véhicule pour certaines infractions."),
  /* ===== VAGUE 17 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP à l'approche d'une voie ferrée sans barrière, avec présence d'un feu clignotant rouge activé, impose :", [
    { text: "Un arrêt impératif, la double signalisation renforçant le danger", correct: true },
    { text: "Le libre choix entre les deux signalisations", correct: false },
    { text: "Un simple ralentissement suffisant", correct: false },
  ], "Feu rouge clignotant et panneau STOP se cumulent pour renforcer l'obligation d'arrêt face à un danger ferroviaire.", { image: WM("AB4") }),
  q("signalisation", "Un cédez-le-passage à une intersection en T (route secondaire rejoignant une route principale) impose de céder :", [
    { text: "À la totalité de la circulation de la route principale, dans les deux sens", correct: true },
    { text: "Uniquement au sens de circulation le plus proche", correct: false },
    { text: "Uniquement aux véhicules prioritaires", correct: false },
  ], "La cession de priorité s'applique à l'ensemble du trafic de la voie principale rejointe, quel que soit son sens.", { image: WM("AB3a") }),

  // Priorités
  q("priorites", "Sur une place où la priorité est donnée par un panneau à l'anneau du giratoire, un véhicule entrant doit vérifier :", [
    { text: "Qu'aucun véhicule n'est engagé sur l'anneau à proximité de son point d'insertion", correct: true },
    { text: "Uniquement les véhicules venant de sa droite immédiate", correct: false },
    { text: "Uniquement les véhicules déjà signalés au clignotant", correct: false },
  ], "L'insertion en giratoire nécessite une vérification large de l'anneau, pas seulement du point d'entrée immédiat."),
  q("priorites", "Un véhicule quittant une route pour emprunter un chemin rural non classé doit céder le passage :", [
    { text: "À tous les usagers de la route qu'il quitte", correct: true },
    { text: "Uniquement s'il tourne à gauche", correct: false },
    { text: "Uniquement aux véhicules agricoles", correct: false },
  ], "Toute sortie vers une voie non classée impose de céder le passage à la circulation de la route principale, quel que soit le sens de la manœuvre."),

  // Vitesse & distances
  q("vitesse", "Une réduction de vitesse préventive à l'approche d'une zone accidentogène signalée par un panonceau statistique est :", [
    { text: "Une bonne pratique même si aucune limitation n'est formellement abaissée", correct: true },
    { text: "Inutile si la limite affichée reste identique", correct: false },
    { text: "Obligatoire uniquement les jours de pluie", correct: false },
  ], "Ces panonceaux informatifs incitent à une prudence accrue sans nécessairement modifier la limitation réglementaire affichée."),
  q("vitesse", "La distance de freinage sur pavés mouillés est généralement :", [
    { text: "Plus longue que sur asphalte mouillé, ce revêtement étant plus glissant", correct: true },
    { text: "Identique à celle sur asphalte sec", correct: false },
    { text: "Plus courte que sur asphalte, quelle que soit la météo", correct: false },
  ], "Les pavés offrent une adhérence réduite par rapport à l'asphalte, particulièrement lorsqu'ils sont mouillés."),

  // Le conducteur
  q("conducteur", "Le fait d'avoir consommé de l'alcool la veille et de se sentir parfaitement lucide ne garantit pas :", [
    { text: "Un taux d'alcoolémie nul, celui-ci dépendant de facteurs physiologiques variables", correct: true },
    { text: "Rien, la sensation subjective correspond toujours au taux réel", correct: false },
    { text: "Une élimination totale garantie après 6 heures de sommeil", correct: false },
  ], "La perception personnelle de sobriété n'est pas un indicateur fiable du taux réel d'alcoolémie mesuré."),
  q("conducteur", "Un conducteur senior peut voir son aptitude à la conduite réévaluée notamment en cas de :", [
    { text: "Signalement médical ou administratif justifiant un doute sur ses capacités", correct: true },
    { text: "Simple atteinte d'un âge déterminé, automatiquement", correct: false },
    { text: "Renouvellement systématique tous les 5 ans après 60 ans", correct: false },
  ], "En France, il n'existe pas de limite d'âge automatique pour conduire ; une réévaluation intervient sur signalement spécifique."),

  // Autres usagers
  q("usagers", "Face à un utilisateur d'engin de déplacement personnel (gyroroue, skateboard électrique) sur la chaussée, vous devez :", [
    { text: "Le traiter avec la même prudence qu'un cycliste, notamment côté distance de dépassement", correct: true },
    { text: "L'ignorer, ces engins n'étant pas reconnus par le code de la route", correct: false },
    { text: "Le considérer comme un piéton en toutes circonstances", correct: false },
  ], "Ces engins de déplacement personnel motorisés sont désormais encadrés par le code de la route et méritent la même prudence qu'un cycliste."),
  q("usagers", "Un piéton qui s'engage brusquement entre deux véhicules stationnés doit inciter le conducteur à :", [
    { text: "Ralentir systématiquement à l'approche de zones de stationnement dense en agglomération", correct: true },
    { text: "N'a aucune incidence sur la conduite à adopter", correct: false },
    { text: "Klaxonner immédiatement et systématiquement", correct: false },
  ], "Les zones de stationnement dense masquent souvent la visibilité sur d'éventuels piétons surgissant entre les véhicules."),

  // Premiers secours
  q("secours", "Une victime présentant des signes de détresse respiratoire (respiration sifflante, panique) doit être :", [
    { text: "Rassurée et installée en position semi-assise en attendant les secours", correct: true },
    { text: "Allongée à plat dos systématiquement", correct: false },
    { text: "Incitée à respirer dans un sac en papier", correct: false },
  ], "La position semi-assise facilite généralement la respiration d'une personne en détresse respiratoire consciente."),

  // Mécanique
  q("mecanique", "Le remplacement des bougies d'allumage usées, sur un moteur essence, permet de :", [
    { text: "Maintenir une combustion efficace et éviter les ratés moteur", correct: true },
    { text: "N'a aucun effet sur le fonctionnement du moteur", correct: false },
    { text: "Réduire uniquement le bruit du moteur", correct: false },
  ], "Des bougies usées perturbent la combustion, entraînant une perte de puissance et une surconsommation."),

  // Environnement
  q("environnement", "Le choix d'un mode de transport alternatif (vélo, transports en commun) pour les trajets courts en ville permet de :", [
    { text: "Réduire la congestion et la pollution locale liées à l'usage systématique de la voiture", correct: true },
    { text: "N'a aucun impact à l'échelle collective", correct: false },
    { text: "Augmenter le trafic automobile ailleurs", correct: false },
  ], "La multiplication des trajets courts en voiture contribue significativement à la congestion et à la pollution urbaine."),

  // Sécurité & chargement
  q("securite", "Un enfant de plus de 10 ans mais de petite taille doit continuer d'utiliser :", [
    { text: "Un rehausseur adapté tant que la ceinture ne lui est pas correctement ajustée", correct: true },
    { text: "La ceinture standard sans aucun dispositif, l'âge suffisant", correct: false },
    { text: "Aucun dispositif à partir de 1,35 m peu importe l'âge", correct: false },
  ], "Le critère déterminant reste l'ajustement correct de la ceinture, la taille primant parfois sur l'âge légal minimal."),

  // Divers
  q("divers", "Un panneau de limitation de vitesse à validité saisonnière (été/hiver) doit être respecté :", [
    { text: "Selon la période effectivement indiquée par le panonceau associé", correct: true },
    { text: "En toute saison, sans distinction", correct: false },
    { text: "Uniquement les jours fériés", correct: false },
  ], "Le panonceau de validité temporelle précise les conditions d'application de la limitation à respecter scrupuleusement."),
  /* ===== VAGUE 18 ===== */

  // Signalisation
  q("signalisation", "Un panneau STOP à l'intersection avec une voie de bus protégée impose de vérifier également :", [
    { text: "L'absence de bus engagé, qui bénéficie souvent d'une priorité renforcée", correct: true },
    { text: "Uniquement les véhicules particuliers", correct: false },
    { text: "Uniquement les taxis", correct: false },
  ], "Les voies de bus protégées accueillent des véhicules prioritaires dont il faut impérativement tenir compte avant de s'engager.", { image: WM("AB4") }),
  q("signalisation", "Le cédez-le-passage à la sortie d'un rond-point mini (à faible diamètre, souvent franchissable) reste :", [
    { text: "Pleinement applicable malgré la petite taille de l'aménagement", correct: true },
    { text: "Facultatif compte tenu de la faible dimension du giratoire", correct: false },
    { text: "Applicable uniquement aux poids lourds", correct: false },
  ], "La taille d'un giratoire n'a aucune influence sur le caractère obligatoire de la signalisation qui y est associée.", { image: WM("AB3a") }),

  // Priorités
  q("priorites", "Sur une portion de route à trois voies où le marquage central indique un usage alterné, la priorité d'usage de la voie centrale revient :", [
    { text: "Au sens de circulation autorisé par le marquage lumineux ou la signalisation en vigueur à ce moment", correct: true },
    { text: "Toujours au sens montant", correct: false },
    { text: "Toujours au sens le plus emprunté", correct: false },
  ], "Ces aménagements réversibles sont régis par une signalisation dynamique qu'il faut impérativement suivre."),
  q("priorites", "Un véhicule circulant sur une bretelle de sortie d'autoroute déjà engagée doit céder le passage à un véhicule qui souhaiterait y entrer en sens inverse :", [
    { text: "Cette situation ne devrait jamais se produire, les bretelles étant à sens unique", correct: true },
    { text: "Selon la règle de la priorité à droite", correct: false },
    { text: "Selon l'ordre d'arrivée des deux véhicules", correct: false },
  ], "Les bretelles d'autoroute sont conçues en sens unique strict ; une telle situation résulterait d'une erreur de conduite grave à éviter absolument."),

  // Vitesse & distances
  q("vitesse", "Une vitesse excessive combinée à un chargement mal réparti augmente le risque de :", [
    { text: "Perte de contrôle dans les virages du fait d'un centre de gravité déstabilisé", correct: true },
    { text: "Aucun risque supplémentaire par rapport à un véhicule bien chargé", correct: false },
    { text: "Simple gêne sonore uniquement", correct: false },
  ], "La combinaison vitesse et chargement mal réparti amplifie les effets déstabilisants en virage."),
  q("vitesse", "Circuler à vitesse excessive à proximité d'un chantier signalé, même sans ouvrier visible, est :", [
    { text: "Dangereux et sanctionnable, la zone restant à risque", correct: true },
    { text: "Sans risque si aucun ouvrier n'est visible sur le moment", correct: false },
    { text: "Toléré en dehors des horaires de travail", correct: false },
  ], "La signalisation de chantier impose le respect des limitations qui y sont associées, indépendamment de la présence visible de personnel."),

  // Le conducteur
  q("conducteur", "Le fait d'avoir un solde de points élevé n'exempte pas un conducteur de :", [
    { text: "Respecter scrupuleusement le code de la route à chaque trajet", correct: true },
    { text: "D'aucune règle, un solde élevé donnant plus de latitude", correct: false },
    { text: "Se soumettre uniquement aux contrôles d'identité", correct: false },
  ], "Le capital de points ne modifie en rien les obligations réglementaires de conduite qui s'appliquent à tous de façon identique."),

  // Autres usagers
  q("usagers", "Un cycliste roulant à contresens dans une rue à sens unique équipée du panonceau « sauf vélos » est :", [
    { text: "Dans son droit si cette configuration est explicitement signalée", correct: true },
    { text: "Toujours en infraction quelle que soit la signalisation", correct: false },
    { text: "Autorisé uniquement de nuit", correct: false },
  ], "De nombreuses rues à sens unique autorisent explicitement les cyclistes à circuler à contresens via une signalisation dédiée."),

  // Premiers secours
  q("secours", "Le suivi des instructions données par le régulateur du SAMU au téléphone doit être :", [
    { text: "Rigoureux, ces instructions étant adaptées en temps réel à la situation décrite", correct: true },
    { text: "Facultatif si le témoin pense savoir mieux faire", correct: false },
    { text: "Limité aux seules instructions écrites reçues par SMS", correct: false },
  ], "Les régulateurs médicaux adaptent leurs instructions à la situation précise décrite par le témoin ; leur suivi rigoureux optimise les chances de la victime."),

  // Mécanique
  q("mecanique", "L'état des balais d'essuie-glace doit être vérifié particulièrement avant :", [
    { text: "La saison des pluies ou un long trajet sous conditions météo incertaines", correct: true },
    { text: "Uniquement avant un contrôle technique", correct: false },
    { text: "Uniquement au moment de l'achat du véhicule", correct: false },
  ], "Anticiper l'entretien des essuie-glaces avant les périodes pluvieuses évite une perte de visibilité au moment critique."),

  // Environnement
  q("environnement", "Le nettoyage régulier des capteurs et caméras d'aide à la conduite contribue à :", [
    { text: "Garantir leur bon fonctionnement, notamment pour les systèmes de sécurité actifs", correct: true },
    { text: "N'a aucune influence sur ces systèmes", correct: false },
    { text: "Réduire la consommation de carburant", correct: false },
  ], "Des capteurs encrassés peuvent fausser ou désactiver certaines aides à la conduite essentielles à la sécurité."),

  // Sécurité & chargement
  q("securite", "La vérification du serrage des roues après un changement de pneu doit être :", [
    { text: "Recontrôlée après quelques dizaines de kilomètres de roulage", correct: true },
    { text: "Inutile si le serrage initial semblait correct", correct: false },
    { text: "Effectuée uniquement au contrôle technique suivant", correct: false },
  ], "Un nouveau serrage peut se tasser légèrement avec les premiers kilomètres, justifiant une vérification complémentaire."),

  // Divers
  q("divers", "Un radar de chantier temporaire installé sur une zone de travaux a la même valeur qu'un radar fixe permanent :", [
    { text: "Oui, sa nature temporaire n'affecte pas la validité des sanctions appliquées", correct: true },
    { text: "Non, ses relevés ne peuvent jamais être utilisés à des fins de sanction", correct: false },
    { text: "Uniquement s'il est annoncé par un panneau spécifique 48h à l'avance", correct: false },
  ], "Un dispositif de contrôle homologué, temporaire ou permanent, produit des relevés ayant la même valeur légale."),

  /* ===== VAGUE 19 -- barèmes précis 2026 ===== */

  q("vitesse", "Depuis le 1er janvier 2024, un excès de vitesse inférieur à 5 km/h entraîne :", [
    { text: "Une amende forfaitaire mais aucun retrait de point", correct: true },
    { text: "Toujours un retrait d'un point comme avant", correct: false },
    { text: "Ni amende ni retrait de point", correct: false },
  ], "Cette évolution récente supprime le retrait de point pour les tout petits excès, tout en maintenant l'amende forfaitaire."),
  q("vitesse", "Un excès de vitesse de 20 à 30 km/h au-dessus de la limite autorisée entraîne une amende forfaitaire de :", [
    { text: "135 € et un retrait de 2 points", correct: true },
    { text: "35 € et un retrait de 1 point", correct: false },
    { text: "68 € et un retrait de 3 points", correct: false },
  ], "Cette infraction est une contravention de 4e classe sanctionnée par 135 € d'amende et 2 points retirés."),
  q("vitesse", "Depuis le 29 décembre 2025, un excès de vitesse de 50 km/h ou plus au-dessus de la limite autorisée est désormais :", [
    { text: "Un délit, et non plus une simple contravention", correct: true },
    { text: "Toujours une contravention de 5e classe", correct: false },
    { text: "Une infraction sans changement depuis 2024", correct: false },
  ], "Cette requalification récente en délit entraîne des sanctions bien plus lourdes : amende jusqu'à 3 750 €, suspension, voire confiscation du véhicule."),
  
  /* ===== VAGUE 20 -- catégories de permis (données vérifiées) ===== */

  q("conducteur", "Depuis 2024, le permis B (voiture) est accessible dès l'âge de :", [
    { text: "17 ans, en filière classique comme en conduite accompagnée", correct: true },
    { text: "18 ans uniquement, sans exception", correct: false },
    { text: "16 ans, en conduite accompagnée uniquement", correct: false },
  ], "Cette évolution récente a abaissé l'âge d'accès au permis B, aligné entre la filière classique et la conduite accompagnée."),
  q("conducteur", "Le permis AM, anciennement appelé BSR, est accessible dès l'âge de :", [
    { text: "14 ans, pour conduire un cyclomoteur ou une voiturette", correct: true },
    { text: "16 ans uniquement", correct: false },
    { text: "12 ans, sous condition parentale", correct: false },
  ], "Le permis AM permet une première autonomie de déplacement dès 14 ans, sous conditions de formation."),
  q("conducteur", "Le permis moto A1, limitant la conduite à des motos de 125 cm³ maximum, est accessible dès :", [
    { text: "16 ans", correct: true },
    { text: "18 ans", correct: false },
    { text: "17 ans", correct: false },
  ], "Le permis A1 constitue la première étape d'accès aux deux-roues motorisés de cylindrée moyenne, dès 16 ans."),
  q("conducteur", "Le permis moto A2, limitant la puissance à 35 kW, est accessible dès :", [
    { text: "18 ans", correct: true },
    { text: "20 ans", correct: false },
    { text: "21 ans", correct: false },
  ], "Le permis A2 s'obtient dès la majorité et constitue une étape intermédiaire avant l'accès à la pleine puissance."),
  q("conducteur", "L'accès au permis A (motos sans limitation de puissance) nécessite d'être titulaire du permis A2 depuis :", [
    { text: "Au moins 2 ans, avec une formation complémentaire de 7 heures", correct: true },
    { text: "Au moins 5 ans, sans formation complémentaire", correct: false },
    { text: "Au moins 1 an, avec un nouvel examen théorique complet", correct: false },
  ], "Cette progression encadrée permet d'accéder à la pleine puissance après une expérience minimale confirmée sur une moto bridée."),
  q("conducteur", "Un titulaire du permis B peut conduire une moto de 125 cm³ après :", [
    { text: "2 ans de permis B et une formation de 7 heures", correct: true },
    { text: "Automatiquement, sans aucune formation complémentaire", correct: false },
    { text: "5 ans de permis B, sans formation complémentaire", correct: false },
  ], "Cette équivalence limitée nécessite malgré tout une formation pratique spécifique de 7 heures, bien qu'aucun nouvel examen ne soit requis."),
  q("securite", "Avec le seul permis B, un conducteur peut tracter une remorque dont le poids ne dépasse pas :", [
    { text: "750 kg sans formation supplémentaire", correct: true },
    { text: "3,5 tonnes sans aucune restriction", correct: false },
    { text: "1 500 kg sans formation supplémentaire", correct: false },
  ], "Au-delà de 750 kg, une formation complémentaire (B96) ou un permis BE devient nécessaire selon le poids total de l'ensemble."),
  q("securite", "Pour un ensemble routier (véhicule + remorque) dont le poids total dépasse 4,25 tonnes, le permis nécessaire est :", [
    { text: "Le permis BE", correct: true },
    { text: "Le permis B96 suffit dans tous les cas", correct: false },
    { text: "Le permis B classique suffit toujours", correct: false },
  ], "Au-delà de 4,25 tonnes de poids total, seul le permis BE, avec son propre examen, permet de tracter légalement l'ensemble."),
  q("conducteur", "L'épreuve théorique moto (ETM), obligatoire pour les permis A1 et A2 depuis mars 2020, comporte :", [
    { text: "40 questions, avec un seuil de réussite fixé à 35 bonnes réponses", correct: true },
    { text: "20 questions, avec un seuil de réussite fixé à 15 bonnes réponses", correct: false },
    { text: "30 questions, avec un seuil de réussite fixé à 25 bonnes réponses", correct: false },
  ], "L'ETM reprend un format proche de l'examen du code de la route classique, avec des thématiques spécifiques aux deux-roues."),
  q("conducteur", "L'épreuve théorique moto (ETM) porte notamment sur des thématiques spécifiques comme :", [
    { text: "L'angle mort, le freinage, la mécanique moto et l'équipement de protection", correct: true },
    { text: "Exactement les mêmes questions que le code de la route voiture, sans aucune spécificité", correct: false },
    { text: "Uniquement la mécanique moto, sans autre thématique", correct: false },
  ], "Le code moto adapte le contenu aux risques propres aux deux-roues motorisés, absents du code de la route classique."),

  /* ===== VAGUE 21 -- trottinettes électriques / EDPM (données 2026) ===== */

  q("usagers", "Depuis septembre 2023, l'âge minimum pour conduire une trottinette électrique (EDPM) sur la voie publique est de :", [
    { text: "14 ans, contre 12 ans auparavant", correct: true },
    { text: "16 ans, comme pour un cyclomoteur", correct: false },
    { text: "12 ans, inchangé depuis toujours", correct: false },
  ], "Ce relèvement de l'âge minimum vise à réduire l'accidentalité chez les plus jeunes utilisateurs de ces engins."),
  q("usagers", "Une trottinette électrique circulant sur la voie publique doit obligatoirement être couverte par :", [
    { text: "Une assurance responsabilité civile spécifique aux EDPM", correct: true },
    { text: "Aucune assurance n'est nécessaire pour ce type d'engin", correct: false },
    { text: "L'assurance habitation du foyer suffit automatiquement", correct: false },
  ], "L'assurance auto classique du foyer ne couvre pas les EDPM ; une garantie responsabilité civile dédiée est obligatoire."),
  q("usagers", "Le transport d'un passager sur une trottinette électrique est :", [
    { text: "Interdit, ces engins étant conçus pour un usage strictement individuel", correct: true },
    { text: "Autorisé si le passager est un enfant", correct: false },
    { text: "Autorisé sur les pistes cyclables uniquement", correct: false },
  ], "Les EDPM sont homologués pour une seule personne ; transporter un passager constitue une infraction sanctionnée."),
  q("usagers", "En agglomération, en l'absence de piste cyclable, une trottinette électrique doit circuler :", [
    { text: "Sur la chaussée, limitée aux voies dont la vitesse maximale autorisée ne dépasse pas 50 km/h", correct: true },
    { text: "Toujours sur le trottoir pour la sécurité de l'utilisateur", correct: false },
    { text: "Sur n'importe quelle voie, quelle que soit sa limitation", correct: false },
  ], "La circulation sur trottoir reste strictement interdite ; à défaut de piste cyclable, la chaussée à faible vitesse devient la voie par défaut."),
  q("usagers", "Hors agglomération, une trottinette électrique est en principe autorisée à circuler :", [
    { text: "Uniquement sur les pistes cyclables et voies vertes", correct: true },
    { text: "Sur toutes les routes sans restriction", correct: false },
    { text: "Uniquement sur les routes départementales secondaires", correct: false },
  ], "En dehors des agglomérations, l'usage de la chaussée classique reste interdit aux EDPM, sauf dérogation préfectorale spécifique."),
  q("usagers", "Le débridage d'une trottinette électrique pour dépasser sa vitesse de construction est :", [
    { text: "Strictement interdit et lourdement sanctionné", correct: true },
    { text: "Toléré tant que la vitesse reste raisonnable", correct: false },
    { text: "Autorisé hors agglomération uniquement", correct: false },
  ], "Le débridage expose à une amende substantielle, l'engin devenant alors non conforme à son homologation EDPM."),
  q("usagers", "Circuler en trottinette électrique sur un trottoir, sauf autorisation municipale expresse, est sanctionné par une amende de :", [
    { text: "135 €", correct: true },
    { text: "15 €", correct: false },
    { text: "35 €", correct: false },
  ], "Cette infraction, fréquente en ville, est sanctionnée comme une contravention de 4e classe."),
  q("usagers", "Le port d'écouteurs en conduisant une trottinette électrique est :", [
    { text: "Interdit, comme pour tout conducteur, pour préserver la perception de l'environnement sonore", correct: true },
    { text: "Autorisé sans restriction particulière", correct: false },
    { text: "Autorisé si un seul écouteur est utilisé", correct: false },
  ], "La réglementation applicable aux EDPM interdit le port d'écouteurs pour les mêmes raisons de sécurité que pour les automobilistes."),
  q("usagers", "Un conducteur de trottinette électrique contrôlé avec une alcoolémie de 0,6 g/L de sang est :", [
    { text: "En infraction, les mêmes seuils d'alcoolémie que pour les automobilistes s'appliquant aux EDPM", correct: true },
    { text: "Non concerné par la réglementation sur l'alcool au volant", correct: false },
    { text: "En infraction seulement au-delà de 1 g/L", correct: false },
  ], "Les conducteurs d'EDPM sont soumis aux mêmes limitations d'alcoolémie que les conducteurs de véhicules à moteur classiques."),
  q("usagers", "Dans une zone piétonne, un EDPM autorisé à y circuler doit respecter une vitesse maximale de :", [
    { text: "6 km/h, soit l'allure du pas", correct: true },
    { text: "25 km/h comme sur la chaussée", correct: false },
    { text: "15 km/h", correct: false },
  ], "La vitesse est fortement réduite dans les zones à forte présence piétonne pour garantir la sécurité de tous."),
  q("usagers", "Aucun permis de conduire n'est nécessaire pour utiliser une trottinette électrique conforme, mais son usage requiert néanmoins :", [
    { text: "Une assurance et le respect du code de la route, sans formation obligatoire", correct: true },
    { text: "Le permis AM obligatoire dans tous les cas", correct: false },
    { text: "Une simple déclaration en mairie", correct: false },
  ], "Contrairement à un cyclomoteur, l'EDPM conforme ne nécessite aucun permis, mais reste soumis à des obligations d'assurance et de respect du code."),

  /* ===== VAGUE 22 -- gilet, triangle, équipements (données vérifiées) ===== */

  q("securite", "Le gilet de haute visibilité et le triangle de présignalisation sont obligatoires dans tout véhicule depuis :", [
    { text: "2008", correct: true },
    { text: "1995", correct: false },
    { text: "2016", correct: false },
  ], "Cette obligation résulte d'une décision du Comité interministériel de la sécurité routière de février 2008, appliquée dans les mois suivants."),
  q("securite", "Le triangle de présignalisation doit être placé à une distance du véhicule immobilisé d'au moins :", [
    { text: "30 mètres", correct: true },
    { text: "5 mètres", correct: false },
    { text: "10 mètres", correct: false },
  ], "Cette distance minimale laisse le temps aux autres usagers de percevoir le danger et de ralentir en conséquence."),
  q("securite", "L'obligation de disposer d'un gilet de haute visibilité concerne, depuis janvier 2016, également :", [
    { text: "Les conducteurs de deux-roues et trois-roues motorisés", correct: true },
    { text: "Uniquement les conducteurs de voitures particulières", correct: false },
    { text: "Uniquement les conducteurs de poids lourds", correct: false },
  ], "Cette extension récente vise à améliorer la visibilité des motards et scootéristes lors d'un arrêt d'urgence."),
  q("securite", "L'éthylotest, longtemps obligatoire à bord des véhicules, ne l'est en réalité plus depuis :", [
    { text: "Le 22 mai 2020", correct: true },
    { text: "Il reste obligatoire aujourd'hui", correct: false },
    { text: "Le 1er janvier 2015", correct: false },
  ], "L'obligation de disposer d'un éthylotest dans son véhicule a été supprimée en 2020, bien que son usage reste recommandé."),
  q("securite", "Ne pas être en mesure de présenter le gilet et le triangle lors d'un contrôle expose à une amende pouvant atteindre :", [
    { text: "135 € (amende forfaitaire de 4e classe)", correct: true },
    { text: "1 500 €", correct: false },
    { text: "35 €", correct: false },
  ], "Le défaut de ces équipements obligatoires constitue une contravention de 4e classe sanctionnée par une amende forfaitaire."),
  q("securite", "Le gilet de haute visibilité doit être rangé dans le véhicule :", [
    { text: "À portée de main du conducteur, plutôt que dans le coffre", correct: true },
    { text: "Obligatoirement dans le coffre pour éviter qu'il ne traîne dans l'habitacle", correct: false },
    { text: "Peu importe l'endroit, aucune règle ne s'applique", correct: false },
  ], "L'objectif est de pouvoir l'enfiler avant même de sortir du véhicule, ce qui suppose un rangement facilement accessible depuis le siège conducteur."),
  q("securite", "Sur autoroute, après avoir revêtu le gilet, le conducteur doit sortir de son véhicule immobilisé sur la bande d'arrêt d'urgence :", [
    { text: "Du côté passager, pour se mettre en sécurité derrière la glissière", correct: true },
    { text: "Du côté conducteur, directement vers la chaussée", correct: false },
    { text: "Par le côté le plus rapide, sans consigne particulière", correct: false },
  ], "Sortir côté passager permet d'éviter de s'exposer directement à la circulation et de rejoindre rapidement un espace sécurisé derrière les glissières."),
  q("securite", "La mise en place du triangle de présignalisation n'est pas obligatoire si :", [
    { text: "Cette action représente un danger manifeste pour la vie du conducteur", correct: true },
    { text: "Il pleut légèrement", correct: false },
    { text: "La panne survient de nuit", correct: false },
  ], "La réglementation prévoit explicitement une dérogation lorsque poser le triangle exposerait le conducteur à un risque vital."),
  /* ===== VAGUE 23 -- contrôle technique (données précises 2026) ===== */

  q("mecanique", "Le premier contrôle technique d'une voiture particulière doit être réalisé :", [
    { text: "Dans les 6 mois précédant son 4e anniversaire de mise en circulation", correct: true },
    { text: "Dès la première année suivant l'achat", correct: false },
    { text: "Dans les 6 mois précédant son 2e anniversaire", correct: false },
  ], "Cette règle dite du « 4-2 » encadre précisément le calendrier du premier contrôle technique obligatoire."),
  q("mecanique", "Une fois le premier contrôle technique favorable obtenu, le renouvellement doit intervenir :", [
    { text: "Tous les 2 ans", correct: true },
    { text: "Tous les 5 ans", correct: false },
    { text: "Tous les 3 ans", correct: false },
  ], "La périodicité standard du contrôle technique automobile reste fixée à deux ans après le premier passage."),
  q("mecanique", "Le contrôle technique d'une voiture particulière porte sur un total de :", [
    { text: "133 points de vérification", correct: true },
    { text: "Environ 20 points seulement", correct: false },
    { text: "Environ 50 points seulement", correct: false },
  ], "Le contrôle technique français est structuré autour de 133 points répartis en plusieurs grandes familles (freinage, pollution, structure, sécurité...)."),
  q("mecanique", "Un contrôle technique classé « défavorable critique » entraîne :", [
    { text: "L'interdiction de circuler dès le lendemain, jusqu'à réparation et contre-visite favorable", correct: true },
    { text: "Aucune conséquence immédiate sur la possibilité de circuler", correct: false },
    { text: "Un simple avertissement écrit sans autre conséquence", correct: false },
  ], "Cette classification signale un danger direct et immédiat, imposant l'arrêt de la circulation du véhicule sans délai."),
  q("mecanique", "Un contrôle technique classé « défavorable majeur » (sans danger immédiat) permet au véhicule de circuler encore :", [
    { text: "Jusqu'à 2 mois maximum, le temps d'effectuer les réparations et la contre-visite", correct: true },
    { text: "Indéfiniment, sans limite de temps", correct: false },
    { text: "Jusqu'à 6 mois maximum", correct: false },
  ], "Le délai de 2 mois pour la contre-visite laisse le temps au propriétaire d'effectuer les réparations sans imposer un arrêt immédiat de circulation."),
  q("mecanique", "Lors de la vente d'un véhicule de plus de 4 ans entre particuliers, le vendeur doit fournir :", [
    { text: "Un procès-verbal de contrôle technique de moins de 6 mois", correct: true },
    { text: "Aucun document technique n'est requis", correct: false },
    { text: "Un procès-verbal de moins de 2 ans", correct: false },
  ], "Ce document est indispensable pour permettre à l'acheteur d'immatriculer le véhicule à son nom."),
  q("mecanique", "Le contrôle technique pour les motos et deux-roues de plus de 125 cm³ est devenu obligatoire en France :", [
    { text: "Depuis avril 2024", correct: true },
    { text: "Depuis toujours, comme pour les voitures", correct: false },
    { text: "Depuis 2010", correct: false },
  ], "Cette obligation, plus récente que pour les véhicules légers, s'est progressivement généralisée sur le territoire."),
  q("mecanique", "Circuler avec un contrôle technique expiré, en dehors de tout autre problème constaté, expose à une amende pouvant atteindre :", [
    { text: "750 €", correct: true },
    { text: "15 €", correct: false },
    { text: "135 €", correct: false },
  ], "Cette amende maximale illustre le caractère sérieux de cette obligation, même en l'absence de défaut mécanique avéré."),

  /* ===== VAGUE 24 -- sièges auto enfant, norme i-Size (données 2026) ===== */

  q("securite", "Un enfant doit voyager dans un dispositif de retenue homologué jusqu'à :", [
    { text: "10 ans ou 135 cm, selon le critère atteint en premier", correct: true },
    { text: "6 ans uniquement, sans considération de taille", correct: false },
    { text: "12 ans, sans considération de taille", correct: false },
  ], "La loi française fixe un double critère d'âge et de taille pour déterminer la fin de l'obligation du siège ou rehausseur homologué."),
  q("securite", "La norme R129, dite « i-Size », classe les sièges auto selon :", [
    { text: "La taille de l'enfant plutôt que son poids", correct: true },
    { text: "Exclusivement le poids de l'enfant, comme l'ancienne norme", correct: false },
    { text: "L'âge de l'enfant uniquement", correct: false },
  ], "Cette approche par la taille, plus précise que le poids seul, mieux corrélée à la morphologie réelle de l'enfant, a progressivement remplacé l'ancienne norme R44."),
  q("securite", "Selon la norme i-Size, la position dos à la route est obligatoire pour un enfant jusqu'à au moins :", [
    { text: "15 mois", correct: true },
    { text: "6 mois", correct: false },
    { text: "9 mois", correct: false },
  ], "Cette durée minimale, plus longue que sous l'ancienne norme, réduit significativement les contraintes exercées sur la nuque en cas de choc frontal."),
  q("securite", "Un rehausseur sans dossier n'est autorisé, selon la norme i-Size, qu'à partir d'une taille de :", [
    { text: "125 cm", correct: true },
    { text: "80 cm", correct: false },
    { text: "100 cm", correct: false },
  ], "En dessous de cette taille, le dossier reste indispensable pour assurer une protection latérale de la tête et du tronc."),
  q("securite", "Le non-respect de l'obligation de dispositif de retenue homologué pour un enfant est sanctionné par une amende de :", [
    { text: "135 € et un retrait de 3 points sur le permis du conducteur", correct: true },
    { text: "15 € sans retrait de points", correct: false },
    { text: "35 € et un retrait de 1 point", correct: false },
  ], "Cette sanction, relativement lourde, souligne l'importance accordée à la sécurité des jeunes passagers en France."),
  q("securite", "La vente de nouveaux sièges auto homologués selon l'ancienne norme R44 est interdite dans l'Union européenne depuis :", [
    { text: "Septembre 2024", correct: true },
    { text: "Cette norme reste en vente librement aujourd'hui", correct: false },
    { text: "Janvier 2020", correct: false },
  ], "Seuls les sièges conformes à la norme i-Size (R129) peuvent désormais être commercialisés neufs, bien que les sièges R44 déjà en usage restent légaux."),
  q("securite", "Le système de fixation Isofix, généralisé sur les sièges auto récents, est obligatoire sur les voitures neuves depuis :", [
    { text: "2011", correct: true },
    { text: "1990", correct: false },
    { text: "2000", correct: false },
  ], "Cette généralisation a permis de réduire fortement les erreurs d'installation, très fréquentes avec une fixation par ceinture classique."),
  q("securite", "Un siège auto ayant subi un accident, même léger, doit être :", [
    { text: "Remplacé, ses capacités de protection pouvant être compromises même sans dommage visible", correct: true },
    { text: "Conservé s'il ne présente aucune fissure apparente", correct: false },
    { text: "Réutilisé après un simple nettoyage", correct: false },
  ], "Un choc peut créer des micro-fissures invisibles qui réduisent fortement l'efficacité du siège lors d'un accident ultérieur."),
  /* ===== VAGUE 25 -- assurance automobile (données vérifiées) ===== */

  q("divers", "L'obligation légale d'assurer tout véhicule terrestre à moteur en France résulte d'une loi datant de :", [
    { text: "1958", correct: true },
    { text: "1990", correct: false },
    { text: "1972", correct: false },
  ], "Cette obligation historique, codifiée à l'article L211-1 du code des assurances, reste la base légale de l'assurance automobile aujourd'hui."),
  q("divers", "L'assurance dite « au tiers » correspond à la garantie minimale légale, qui est :", [
    { text: "La responsabilité civile", correct: true },
    { text: "La garantie tous risques", correct: false },
    { text: "La garantie vol et incendie", correct: false },
  ], "Cette garantie couvre les dommages causés à autrui, mais jamais les propres dommages du conducteur responsable ni ceux de son véhicule."),
  q("divers", "L'assurance au tiers ne prend pas en charge :", [
    { text: "Les réparations de votre propre véhicule en cas d'accident dont vous êtes responsable", correct: true },
    { text: "Les dommages corporels ou matériels causés à un tiers", correct: false },
    { text: "Les frais médicaux du tiers blessé", correct: false },
  ], "Seule une garantie complémentaire (dommages tous accidents, propre à l'assurance tous risques) permet de couvrir son propre véhicule en cas de responsabilité."),
  q("divers", "Mettre en circulation un véhicule sans assurance constitue :", [
    { text: "Un délit puni d'une amende pouvant atteindre 3 750 €", correct: true },
    { text: "Une simple contravention mineure", correct: false },
    { text: "Une simple irrégularité administrative", correct: false },
  ], "Le défaut d'assurance est sévèrement sanctionné en droit français, avec des peines complémentaires possibles (confiscation, suspension de permis)."),
  q("divers", "L'obligation d'assurance d'un véhicule s'applique :", [
    { text: "Même si le véhicule reste stationné sans circuler, y compris dans un garage privé", correct: true },
    { text: "Uniquement lorsque le véhicule circule effectivement sur la voie publique", correct: false },
    { text: "Uniquement sur la voie publique, jamais sur terrain privé", correct: false },
  ], "Un véhicule immobile représente toujours un risque potentiel (incendie, déplacement accidentel), justifiant le maintien de l'obligation d'assurance."),
  q("divers", "Si aucune compagnie n'accepte d'assurer un véhicule, le propriétaire peut saisir :", [
    { text: "Le Bureau central de tarification (BCT)", correct: true },
    { text: "Directement le tribunal administratif", correct: false },
    { text: "La préfecture de son département", correct: false },
  ], "Le BCT peut contraindre un assureur à fournir au minimum la garantie responsabilité civile obligatoire."),
  q("divers", "Les forces de l'ordre vérifient aujourd'hui l'assurance d'un véhicule principalement via :", [
    { text: "Le Fichier des véhicules assurés (FVA), consulté électroniquement", correct: true },
    { text: "La vignette verte apposée sur le pare-brise, toujours obligatoire", correct: false },
    { text: "Un appel téléphonique systématique à l'assureur", correct: false },
  ], "La vignette verte et l'attestation papier ont été remplacées par une vérification informatisée via le FVA."),
  q("conducteur", "Un accident responsable causé sous l'emprise de l'alcool ou de stupéfiants peut entraîner une majoration de la prime d'assurance jusqu'à :", [
    { text: "400 % en cas de sanctions multiples", correct: true },
    { text: "10 % maximum, quelle que soit la gravité", correct: false },
    { text: "50 % maximum, quelle que soit la gravité", correct: false },
  ], "Les majorations de prime peuvent être très importantes en cas de comportement gravement fautif, notamment en cumul d'infractions."),

  /* ===== VAGUE 26 -- numéros d'urgence (données vérifiées) ===== */

  q("secours", "Le numéro national réservé aux personnes sourdes et malentendantes pour alerter les secours est le :", [
    { text: "114, accessible par SMS, tchat ou visiophonie", correct: true },
    { text: "115, réservé aux personnes sans domicile fixe", correct: false },
    { text: "119, réservé à l'enfance en danger", correct: false },
  ], "Ce numéro unique et gratuit permet une communication écrite ou visuelle avec les services d'urgence, sans appel vocal."),
  q("secours", "En France, un appel au 112 depuis un téléphone mobile est automatiquement redirigé vers :", [
    { text: "Le SAMU (15) ou les pompiers (18) selon la situation décrite", correct: true },
    { text: "Un standard unique européen basé à Bruxelles", correct: false },
    { text: "La police municipale la plus proche", correct: false },
  ], "Le 112 sert de point d'entrée unique qui oriente ensuite l'appel vers le service national compétent le plus adapté."),
  q("secours", "Le 112 peut être composé même :", [
    { text: "Sans carte SIM ou depuis un téléphone verrouillé", correct: true },
    { text: "Uniquement depuis un téléphone fixe", correct: false },
    { text: "Uniquement avec un forfait actif", correct: false },
  ], "Cette particularité technique du 112 en fait un numéro accessible en toutes circonstances, y compris en cas de perte de la carte SIM."),
  q("secours", "Pour signaler une situation dangereuse ou une agression dans les transports en commun, le numéro dédié est le :", [
    { text: "3117, ou par SMS au 31 177", correct: true },
    { text: "18, comme pour tout accident", correct: false },
    { text: "17, comme pour la police", correct: false },
  ], "Ce numéro spécifique aux transports permet une intervention rapide et ciblée des agents compétents sur le réseau concerné."),
  q("secours", "En cas d'appel accidentel à un numéro d'urgence (15, 17, 18 ou 112), il est recommandé de :", [
    { text: "Ne pas raccrocher immédiatement et expliquer l'erreur à l'opérateur", correct: true },
    { text: "Raccrocher aussitôt pour libérer la ligne au plus vite", correct: false },
    { text: "Rappeler immédiatement un autre numéro d'urgence pour prévenir", correct: false },
  ], "Raccrocher brusquement peut laisser penser à l'opérateur que l'appelant est en danger, mobilisant des ressources inutilement pour le localiser."),
  q("secours", "Le numéro des sapeurs-pompiers, sollicité pour un accident de la route ou un départ de feu, est le :", [
    { text: "18", correct: true },
    { text: "17", correct: false },
    { text: "15", correct: false },
  ], "Les pompiers interviennent sur de nombreuses situations d'urgence : accidents, incendies, fuites de gaz, noyades, entre autres."),
  /* ===== VAGUE 27 -- conduite en tunnel (données vérifiées) ===== */

  q("signalisation", "Le panneau C111, placé à l'entrée d'un tunnel, impose notamment :", [
    { text: "L'allumage obligatoire des feux de croisement et l'interdiction de faire demi-tour", correct: true },
    { text: "Une obligation de klaxonner à l'entrée", correct: false },
    { text: "Une obligation de s'arrêter avant d'entrer", correct: false },
  ], "Ce panneau réglementaire, défini par arrêté, encadre strictement le comportement à adopter dès l'entrée dans un tunnel.", { image: WM("C111") }),
  q("divers", "S'arrêter ou stationner dans un tunnel est :", [
    { text: "Interdit, sauf en cas d'absolue nécessité comme une panne ou un malaise", correct: true },
    { text: "Autorisé quelques minutes sans restriction", correct: false },
    { text: "Autorisé uniquement sur la voie de droite", correct: false },
  ], "L'espace confiné d'un tunnel rend tout arrêt non justifié particulièrement dangereux pour l'ensemble des usagers."),
  q("divers", "Dans les grands tunnels, la distance de sécurité pour une voiture se mesure grâce à :", [
    { text: "Des points bleus lumineux au sol, espacés d'environ 150 mètres, dont deux doivent rester visibles", correct: true },
    { text: "Un simple marquage au sol identique à celui des routes classiques", correct: false },
    { text: "Des panneaux numérotés tous les 500 mètres", correct: false },
  ], "Ce repère visuel spécifique aux tunnels aide les conducteurs à évaluer concrètement la distance à respecter avec le véhicule précédent."),
  q("divers", "Pour un poids lourd circulant en tunnel, la distance de sécurité recommandée correspond à :", [
    { text: "Trois points bleus visibles, soit environ 300 mètres", correct: true },
    { text: "Un seul point bleu visible, comme pour une voiture", correct: false },
    { text: "Deux points bleus visibles", correct: false },
  ], "Le poids et la distance de freinage plus longue des poids lourds justifient une distance de sécurité doublée en tunnel."),
  q("divers", "Le non-respect des distances de sécurité en tunnel est sanctionné par :", [
    { text: "Une amende de 135 €, un retrait de 3 points et une possible suspension de permis jusqu'à 3 ans", correct: true },
    { text: "Un simple avertissement sans conséquence", correct: false },
    { text: "Une amende de 35 € sans retrait de points", correct: false },
  ], "Cette infraction est particulièrement sévèrement sanctionnée du fait du risque accru d'accident en chaîne dans un espace confiné."),
  q("divers", "En cas de ralentissement important dans un tunnel, vous devez :", [
    { text: "Allumer vos feux de détresse tout en conservant la distance de sécurité, même à l'arrêt", correct: true },
    { text: "Vous rapprocher du véhicule qui précède pour ne pas gêner la circulation", correct: false },
    { text: "Faire demi-tour pour ressortir du tunnel", correct: false },
  ], "Maintenir une distance de sécurité même à l'arrêt permet de laisser un passage possible aux secours en cas de besoin."),
  q("divers", "En tunnel, une flèche verte lumineuse au-dessus d'une voie signifie que :", [
    { text: "Cette voie est ouverte à la circulation", correct: true },
    { text: "Il faut immédiatement s'y arrêter", correct: false },
    { text: "Cette voie est réservée aux secours", correct: false },
  ], "Ce signal lumineux indique aux conducteurs les voies effectivement disponibles, notamment en cas d'incident sur une autre voie."),
  q("divers", "En cas de panne dans un tunnel, la procédure recommandée est de :", [
    { text: "Serrer à droite, allumer les feux de détresse, revêtir le gilet et rejoindre à pied la niche de sécurité la plus proche", correct: true },
    { text: "Rester dans le véhicule en attendant les secours sans sortir", correct: false },
    { text: "Sortir et attendre à côté de son véhicule sans gilet", correct: false },
  ], "Sortir du véhicule en sécurité et s'éloigner vers une niche équipée d'un téléphone d'urgence limite les risques en cas d'incident grave."),


/* ===== VAGUE 28 — loi Badinter, indemnisation des victimes ===== */

  q("divers", "La loi dite « loi Badinter », qui facilite l'indemnisation des victimes d'accidents de la circulation, date de :", [
    { text: "1985", correct: true },
    { text: "2005", correct: false },
  ], "Cette loi du 5 juillet 1985 a profondément transformé le régime d'indemnisation des victimes de la route en France."),
  q("divers", "Avant la loi Badinter, une victime d'accident de la route devait, pour être indemnisée :", [
    { text: "Prouver la faute du conducteur responsable", correct: true },
    { text: "Simplement démontrer l'existence de son dommage", correct: false },
  ], "Ce principe classique de la responsabilité civile rendait les procédures longues et incertaines avant la réforme de 1985."),
  q("divers", "Grâce à la loi Badinter, un piéton ou un cycliste victime d'un accident impliquant un véhicule à moteur est en principe indemnisé :", [
    { text: "Même si une faute simple de sa part a contribué à l'accident", correct: true },
    { text: "Uniquement s'il n'a commis absolument aucune erreur", correct: false },
  ], "Seule une faute dite « inexcusable », cause exclusive de l'accident, peut priver ces usagers vulnérables de leur droit à indemnisation, un cas rarement retenu en pratique."),
  q("divers", "Concernant le conducteur victime d'un accident, la loi Badinter prévoit un régime :", [
    { text: "Différent, où sa propre faute peut réduire ou exclure son droit à indemnisation", correct: true },
    { text: "Strictement identique à celui des piétons et cyclistes", correct: false },
  ], "Le conducteur, considéré comme acteur potentiel du risque, bénéficie d'une protection moins automatique que les usagers non motorisés."),
  q("divers", "La loi Badinter accorde une protection encore renforcée à certaines victimes, notamment :", [
    { text: "Les moins de 16 ans, les plus de 70 ans, et les personnes ayant un taux d'invalidité d'au moins 80 %", correct: true },
    { text: "Uniquement aux personnes possédant un véhicule assuré tous risques", correct: false },
  ], "Ces catégories bénéficient d'un régime encore plus protecteur, quasiment sans possibilité pour l'assureur d'opposer une faute de leur part."),

  /* ===== VAGUE 28 -- loi Badinter, indemnisation des victimes ===== */

  q("divers", "La loi dite « loi Badinter », qui facilite l'indemnisation des victimes d'accidents de la circulation, date de :", [
    { text: "1985", correct: true },
    { text: "2005", correct: false },
    { text: "1972", correct: false },
  ], "Cette loi du 5 juillet 1985 a profondément transformé le régime d'indemnisation des victimes de la route en France."),
  q("divers", "Avant la loi Badinter, une victime d'accident de la route devait, pour être indemnisée :", [
    { text: "Prouver la faute du conducteur responsable", correct: true },
    { text: "Simplement démontrer l'existence de son dommage", correct: false },
    { text: "Obtenir l'accord amiable de l'assureur adverse", correct: false },
  ], "Ce principe classique de la responsabilité civile rendait les procédures longues et incertaines avant la réforme de 1985."),
  q("divers", "Grâce à la loi Badinter, un piéton ou un cycliste victime d'un accident impliquant un véhicule à moteur est en principe indemnisé :", [
    { text: "Même si une faute simple de sa part a contribué à l'accident", correct: true },
    { text: "Uniquement s'il n'a commis absolument aucune erreur", correct: false },
    { text: "Uniquement si le conducteur reconnaît sa responsabilité", correct: false },
  ], "Seule une faute dite « inexcusable », cause exclusive de l'accident, peut priver ces usagers vulnérables de leur droit à indemnisation, un cas rarement retenu en pratique."),
  q("divers", "Concernant le conducteur victime d'un accident, la loi Badinter prévoit un régime :", [
    { text: "Différent, où sa propre faute peut réduire ou exclure son droit à indemnisation", correct: true },
    { text: "Strictement identique à celui des piétons et cyclistes", correct: false },
    { text: "Plus favorable que celui des piétons", correct: false },
  ], "Le conducteur, considéré comme acteur potentiel du risque, bénéficie d'une protection moins automatique que les usagers non motorisés."),
  q("divers", "La loi Badinter accorde une protection encore renforcée à certaines victimes, notamment :", [
    { text: "Les moins de 16 ans, les plus de 70 ans, et les personnes ayant un taux d'invalidité d'au moins 80 %", correct: true },
    { text: "Uniquement aux personnes possédant un véhicule assuré tous risques", correct: false },
    { text: "Uniquement aux résidents de la commune où survient l'accident", correct: false },
  ], "Ces catégories bénéficient d'un régime encore plus protecteur, quasiment sans possibilité pour l'assureur d'opposer une faute de leur part."),

  /* ===== VAGUE 29 -- délit de fuite (sanctions précises) ===== */

  q("divers", "Le délit de fuite consiste à :", [
    { text: "Ne pas s'arrêter après avoir causé ou occasionné un accident, pour échapper à sa responsabilité", correct: true },
    { text: "Ne pas s'arrêter à une sommation de la police", correct: false },
    { text: "Ne pas s'arrêter à un péage sans payer", correct: false },
  ], "Cette seconde situation constitue en réalité une infraction distincte, appelée refus d'obtempérer, et non un délit de fuite."),
  q("divers", "Le délit de fuite, sans circonstance aggravante, est puni au maximum de :", [
    { text: "3 ans d'emprisonnement et 75 000 € d'amende", correct: true },
    { text: "1 mois d'emprisonnement et 1 500 € d'amende", correct: false },
    { text: "6 mois d'emprisonnement et 15 000 € d'amende", correct: false },
  ], "Ces peines maximales, prévues par l'article 434-10 du code pénal, reflètent la gravité de ce comportement, même en l'absence de blessé."),
  q("divers", "Le délit de fuite entraîne, dès que la condamnation est définitive, un retrait de :", [
    { text: "6 points sur le permis de conduire", correct: true },
    { text: "1 point sur le permis de conduire", correct: false },
    { text: "3 points sur le permis de conduire", correct: false },
  ], "Ce retrait représente la moitié du capital de points d'un conducteur expérimenté, illustrant la gravité de cette infraction."),
  q("divers", "Un délit de fuite constitue une circonstance qui, en cas d'accident mortel, peut :", [
    { text: "Aggraver significativement les peines encourues par le conducteur responsable", correct: true },
    { text: "N'a aucune incidence sur les peines liées à l'accident lui-même", correct: false },
    { text: "Remplacer les poursuites pour homicide routier", correct: false },
  ], "Le cumul du délit de fuite avec des blessures ou un homicide involontaire alourdit considérablement les peines encourues."),
  q("divers", "Le délit de fuite peut être commis :", [
    { text: "Par tout conducteur, y compris un cycliste, pas uniquement un automobiliste", correct: true },
    { text: "Uniquement par le conducteur d'un véhicule à moteur", correct: false },
    { text: "Uniquement par le conducteur d'un poids lourd", correct: false },
  ], "L'article 434-10 du code pénal vise tout conducteur d'un véhicule ou engin terrestre, ce qui inclut notamment les cyclistes."),
  q("divers", "Refuser de signer un constat amiable après un accrochage constitue-t-il un délit de fuite ?", [
    { text: "Non, à condition de s'être arrêté et d'avoir échangé les informations nécessaires sur les lieux", correct: true },
    { text: "Oui, systématiquement", correct: false },
    { text: "Oui, mais seulement en cas de désaccord sur les circonstances", correct: false },
  ], "Le délit de fuite est caractérisé par le fait de ne pas s'arrêter, non par un simple désaccord sur le contenu ou la signature du constat."),
  /* ===== VAGUE 30 -- usage des feux (données vérifiées) ===== */

  q("mecanique", "Les feux de route doivent être remplacés par les feux de croisement dès qu'un véhicule arrive à environ :", [
    { text: "150 mètres", correct: true },
    { text: "10 mètres", correct: false },
    { text: "50 mètres", correct: false },
  ], "Cette anticipation permet d'éviter d'éblouir le conducteur venant en sens inverse au moment du croisement."),
  q("mecanique", "Les feux de brouillard arrière ne doivent être utilisés que :", [
    { text: "En cas de brouillard ou de chute de neige, jamais par simple pluie", correct: true },
    { text: "Chaque fois que la chaussée est mouillée", correct: false },
    { text: "De nuit, quelles que soient les conditions météo", correct: false },
  ], "Ces feux très puissants éblouiraient dangereusement les véhicules suiveurs s'ils étaient utilisés hors des conditions de très faible visibilité."),
  q("vitesse", "Lorsque la visibilité descend en dessous de 50 mètres (brouillard dense, forte chute de neige), la vitesse est limitée à :", [
    { text: "50 km/h, sur toutes les routes y compris l'autoroute", correct: true },
    { text: "90 km/h, sans changement particulier", correct: false },
    { text: "30 km/h, uniquement en agglomération", correct: false },
  ], "Cette limitation uniforme s'applique à tout type de route dès que la visibilité est fortement réduite, pour compenser la perte de perception du danger."),
  q("mecanique", "Maintenir ses feux de route allumés au moment de croiser un autre véhicule, provoquant son éblouissement, est :", [
    { text: "Une infraction sanctionnée, pouvant aller jusqu'à la mise en danger d'autrui dans les cas les plus graves", correct: true },
    { text: "Sans conséquence tant qu'aucun accident ne survient", correct: false },
    { text: "Sanctionné uniquement en cas d'accident avéré", correct: false },
  ], "L'éblouissement volontaire ou par négligence constitue une infraction, avec des sanctions pouvant être aggravées en cas de comportement délibéré et répété."),
  q("mecanique", "Les feux de croisement ont une portée d'éclairage d'environ :", [
    { text: "30 mètres", correct: true },
    { text: "150 mètres", correct: false },
    { text: "80 mètres", correct: false },
  ], "Cette portée plus limitée que les feux de route permet d'éclairer suffisamment sans éblouir les autres usagers."),
  q("mecanique", "En agglomération, de nuit, sur une route suffisamment éclairée par l'éclairage public, un conducteur doit circuler avec :", [
    { text: "Au moins ses feux de position, sans obligation d'utiliser les feux de croisement", correct: true },
    { text: "Obligatoirement ses feux de route allumés en permanence", correct: false },
    { text: "Aucun feu allumé si l'éclairage public est suffisant", correct: false },
  ], "Un éclairage public suffisant permet de circuler avec un éclairage réduit, à condition que la visibilité reste bonne pour tous les usagers."),
  q("mecanique", "Les feux de brouillard avant peuvent, hors agglomération, compléter les feux de route :", [
    { text: "Sur une route étroite et sinueuse, sous certaines conditions précises", correct: true },
    { text: "Dans absolument toutes les situations de conduite nocturne", correct: false },
    { text: "Uniquement en cas de pluie forte", correct: false },
  ], "Cet usage complémentaire reste encadré et limité à des configurations de route spécifiques, non généralisable à toute circonstance."),

  /* ===== VAGUE 31 -- conduite accompagnée AAC (données vérifiées) ===== */

  q("conducteur", "L'apprentissage anticipé de la conduite (AAC), ou conduite accompagnée, est accessible dès l'âge de :", [
    { text: "15 ans", correct: true },
    { text: "17 ans", correct: false },
    { text: "16 ans", correct: false },
  ], "Ce dispositif permet de commencer à se former très tôt, avec une formation initiale suivie d'une longue période de conduite accompagnée."),
  q("conducteur", "Pendant la phase de conduite accompagnée, l'élève doit parcourir un minimum de :", [
    { text: "3 000 km sur une durée d'au moins un an", correct: true },
    { text: "500 km sur un mois", correct: false },
    { text: "1 000 km sur six mois", correct: false },
  ], "Ce seuil garantit une expérience suffisamment variée (routes, météo, horaires) avant de se présenter à l'examen pratique."),
  q("conducteur", "Pour être accompagnateur dans le cadre de l'AAC, il faut être titulaire du permis B depuis au moins :", [
    { text: "5 ans sans interruption", correct: true },
    { text: "1 an seulement", correct: false },
    { text: "3 ans sans interruption", correct: false },
  ], "Cette ancienneté minimale garantit une expérience suffisante de l'accompagnateur pour transmettre de bonnes pratiques."),
  q("conducteur", "Pendant la conduite accompagnée, conduire à l'étranger est :", [
    { text: "Interdit, les trajets devant se dérouler exclusivement en France", correct: true },
    { text: "Autorisé sans restriction particulière", correct: false },
    { text: "Autorisé uniquement dans l'Union européenne", correct: false },
  ], "Cette limitation est notamment liée aux conditions de l'extension de garantie d'assurance spécifique à l'AAC."),
  q("conducteur", "Un jeune conducteur issu de la filière AAC bénéficie d'une période probatoire réduite à :", [
    { text: "2 ans, au lieu de 3 ans pour la filière classique", correct: true },
    { text: "5 ans, plus longue que la filière classique", correct: false },
    { text: "1 an, au lieu de 3 ans pour la filière classique", correct: false },
  ], "Cette réduction récompense l'expérience de conduite accumulée durant la phase d'accompagnement, jugée bénéfique pour la sécurité routière."),
  q("conducteur", "Durant la conduite accompagnée, le véhicule doit être équipé, entre autres, de :", [
    { text: "Deux rétroviseurs latéraux et d'un disque « conduite accompagnée » apposé à l'arrière", correct: true },
    { text: "Aucun équipement particulier n'est requis", correct: false },
    { text: "D'un simple autocollant « débutant » sans autre exigence", correct: false },
  ], "Ces équipements sont obligatoires pour signaler la situation d'apprentissage et permettre à l'accompagnateur d'avoir une vue complète."),
  q("conducteur", "Le taux de réussite à l'examen pratique du permis B est généralement plus élevé pour les candidats issus de :", [
    { text: "La filière AAC (conduite accompagnée) que pour la filière classique", correct: true },
    { text: "La filière classique, sans conduite accompagnée", correct: false },
    { text: "Aucune différence n'est observée entre les deux filières", correct: false },
  ], "L'expérience accumulée pendant la longue phase de conduite accompagnée se traduit statistiquement par un meilleur taux de réussite à l'examen."),
  /* ===== VAGUE 32 -- loi homicide routier, juillet 2025 (très récent) ===== */

  q("conducteur", "Depuis juillet 2025, un conducteur qui cause la mort d'autrui dans certaines circonstances aggravantes (alcool, stupéfiants, grand excès de vitesse...) peut être poursuivi pour :", [
    { text: "Homicide routier, un délit désormais autonome et distinct de l'homicide involontaire classique", correct: true },
    { text: "Une simple contravention de 5e classe", correct: false },
    { text: "Un simple délit de blessures involontaires", correct: false },
  ], "Cette nouvelle qualification pénale, créée par la loi du 9 juillet 2025, reconnaît la spécificité de la violence routière."),
  q("conducteur", "L'homicide routier, en présence d'une seule circonstance aggravante, est puni au maximum de :", [
    { text: "7 ans d'emprisonnement et 100 000 € d'amende", correct: true },
    { text: "6 mois d'emprisonnement et 1 500 € d'amende", correct: false },
    { text: "3 ans d'emprisonnement et 45 000 € d'amende", correct: false },
  ], "Ces peines maximales illustrent la gravité reconnue à un décès causé au volant dans des circonstances aggravantes précises."),
  q("conducteur", "En cas de cumul d'au moins deux circonstances aggravantes, l'homicide routier peut être puni jusqu'à :", [
    { text: "10 ans d'emprisonnement et 150 000 € d'amende", correct: true },
    { text: "1 an d'emprisonnement et 3 750 € d'amende", correct: false },
    { text: "7 ans d'emprisonnement et 100 000 € d'amende", correct: false },
  ], "Le cumul de plusieurs comportements à risque (alcool et vitesse excessive, par exemple) alourdit considérablement la peine encourue."),
  q("conducteur", "Depuis la réforme de juillet 2025, un excès de vitesse d'au moins 30 km/h au-dessus de la limite autorisée constitue :", [
    { text: "L'une des circonstances aggravantes pouvant caractériser un homicide routier en cas d'accident mortel", correct: true },
    { text: "Un critère sans lien avec cette nouvelle infraction", correct: false },
    { text: "Une circonstance atténuante si le conducteur est novice", correct: false },
  ], "Le grand excès de vitesse figure explicitement parmi les circonstances aggravantes listées par la nouvelle loi."),
  q("conducteur", "L'usage d'un téléphone tenu en main au moment d'un accident mortel est désormais reconnu comme :", [
    { text: "Une circonstance aggravante pouvant caractériser un homicide routier", correct: true },
    { text: "Un facteur totalement neutre dans la qualification pénale", correct: false },
    { text: "Une circonstance atténuante en cas de premier accident", correct: false },
  ], "Cette inclusion souligne la reconnaissance légale du danger que représente la distraction au volant, notamment via le téléphone."),
  q("conducteur", "Depuis la loi de juillet 2025, en cas de conduite sous l'emprise de l'alcool ou de stupéfiants, la suspension administrative du permis par le préfet est devenue :", [
    { text: "Automatique, sans marge d'appréciation laissée au préfet", correct: true },
    { text: "Facultative, selon le contexte apprécié au cas par cas", correct: false },
    { text: "Réservée aux seuls cas de récidive", correct: false },
  ], "Cette automatisation renforce l'effectivité immédiate de la sanction dès la constatation de l'infraction, indépendamment de la procédure judiciaire ultérieure."),

  /* ===== VAGUE 33 -- catégories de stationnement (données vérifiées) ===== */

  q("divers", "Le stationnement dit « gênant » (article R417-10 du code de la route) est sanctionné par une amende forfaitaire de :", [
    { text: "35 €", correct: true },
    { text: "135 €", correct: false },
    { text: "68 €", correct: false },
  ], "Cette contravention de 2e classe couvre les stationnements qui perturbent la circulation sans présenter de danger direct."),
  q("divers", "Le stationnement dit « très gênant » (article R417-11), notamment sur un passage piéton ou une place handicapée, est sanctionné par une amende forfaitaire de :", [
    { text: "135 €", correct: true },
    { text: "35 €", correct: false },
    { text: "68 €", correct: false },
  ], "Cette contravention de 4e classe vise des situations plus graves compromettant la sécurité ou l'accès de certains usagers vulnérables."),
  q("divers", "Le stationnement est qualifié de « dangereux » notamment lorsqu'il a lieu :", [
    { text: "À proximité d'un virage, d'un sommet de côte ou d'une intersection où la visibilité est insuffisante", correct: true },
    { text: "Devant n'importe quel commerce fermé", correct: false },
    { text: "Sur un emplacement payant non réglé", correct: false },
  ], "Cette catégorie distincte vise les emplacements où la visibilité réduite crée un risque de collision direct."),
  q("divers", "Un stationnement qualifié de « dangereux » entraîne généralement, en plus de l'amende, :", [
    { text: "Un retrait de points sur le permis de conduire", correct: true },
    { text: "Aucune conséquence sur le permis, contrairement au stationnement gênant", correct: false },
    { text: "Une suspension automatique du permis", correct: false },
  ], "Contrairement au simple stationnement gênant ou très gênant, le stationnement dangereux entraîne un retrait de points du fait du risque direct qu'il crée."),
  q("divers", "Un véhicule laissé immobile plus de 7 jours consécutifs au même endroit sur la voie publique est qualifié de stationnement :", [
    { text: "Abusif", correct: true },
    { text: "Dangereux, automatiquement", correct: false },
    { text: "Gênant, automatiquement", correct: false },
  ], "Cette durée maximale, pouvant être réduite par arrêté municipal, vise à limiter l'occupation prolongée de l'espace public par un même véhicule."),
  q("divers", "Stationner devant l'entrée carrossable d'un immeuble riverain, empêchant l'accès, est considéré comme un stationnement :", [
    { text: "Gênant", correct: true },
    { text: "Toujours autorisé si le véhicule ne reste pas plus de 5 minutes", correct: false },
    { text: "Simplement déconseillé, sans sanction prévue", correct: false },
  ], "Ce type de stationnement, même bref, entrave l'usage normal d'un accès et constitue une infraction sanctionnable."),

  /* ===== VAGUE 34 -- téléphone/GPS au volant (données précises 2026) ===== */

  q("conducteur", "Utiliser son smartphone comme GPS au volant est :", [
    { text: "Autorisé, à condition qu'il soit fixé sur un support et non manipulé en conduisant", correct: true },
    { text: "Strictement interdit dans tous les cas, au même titre qu'un appel téléphonique", correct: false },
    { text: "Autorisé uniquement sur autoroute", correct: false },
  ], "L'interdiction vise le fait de tenir ou de manipuler le téléphone, pas son usage comme aide à la navigation lorsqu'il est correctement fixé."),
  q("conducteur", "L'itinéraire d'un GPS sur smartphone doit être programmé :", [
    { text: "Avant de démarrer, véhicule à l'arrêt", correct: true },
    { text: "À tout moment, y compris en roulant, tant que le geste est rapide", correct: false },
    { text: "Uniquement par le passager, jamais par le conducteur", correct: false },
  ], "Toute manipulation de l'écran en circulation constitue une infraction, y compris pour modifier un simple itinéraire GPS."),
  q("conducteur", "Un téléphone fixé sur un support mais affichant une application autre que la navigation (réseau social, notifications) dans le champ de vision du conducteur :", [
    { text: "Constitue une infraction spécifique, distincte de l'usage tenu en main", correct: true },
    { text: "Est parfaitement toléré tant que l'appareil est fixé", correct: false },
    { text: "N'est sanctionné que si le conducteur touche l'écran", correct: false },
  ], "Seul un écran dédié à une aide à la conduite ou à la navigation est autorisé dans le champ de vision ; tout autre affichage est sanctionné."),
  q("conducteur", "Les avertisseurs et détecteurs de radars (boîtiers ou applications) sont :", [
    { text: "Interdits et sanctionnés par une amende pouvant atteindre 1 500 € avec retrait de 6 points", correct: true },
    { text: "Autorisés s'ils se limitent à afficher les zones de danger", correct: false },
    { text: "Autorisés uniquement hors agglomération", correct: false },
  ], "Ces dispositifs, qu'ils prennent la forme d'un boîtier dédié ou d'une application, sont strictement interdits en France."),
  q("conducteur", "Un véhicule arrêté à un feu rouge est-il juridiquement considéré comme « en circulation » pour l'application de l'interdiction du téléphone tenu en main ?", [
    { text: "Oui, tant qu'il n'est pas garé sur un emplacement de stationnement autorisé", correct: true },
    { text: "Non, l'arrêt à un feu suspend cette interdiction", correct: false },
    { text: "Non, uniquement si le moteur est coupé", correct: false },
  ], "La jurisprudence considère qu'un véhicule reste en circulation dès lors qu'il n'est pas stationné sur un emplacement dédié, même à l'arrêt temporaire."),
  q("conducteur", "Depuis 2025-2026, certains départements expérimentent, en plus de l'amende classique, une mesure de :", [
    { text: "Suspension administrative immédiate du permis pour usage du téléphone tenu en main, décidée par arrêté préfectoral local", correct: true },
    { text: "Suppression définitive et nationale du droit d'utiliser un GPS", correct: false },
    { text: "Confiscation systématique du téléphone", correct: false },
  ], "Cette expérimentation locale, non généralisée à tout le territoire, vient s'ajouter aux sanctions nationales déjà existantes (amende et retrait de points)."),

  /* ===== VAGUE 35 -- rodéos urbains (données vérifiées, loi 2018) ===== */

  q("divers", "Le rodéo urbain (ou rodéo motorisé) est une infraction autonome créée par une loi de :", [
    { text: "2018", correct: true },
    { text: "2005", correct: false },
    { text: "2022", correct: false },
  ], "Cette loi du 3 août 2018 a inséré dans le code de la route une incrimination spécifique pour ces comportements dangereux et répétés."),
  q("divers", "Le rodéo urbain, dans sa version simple, est puni au maximum de :", [
    { text: "1 an d'emprisonnement et 15 000 € d'amende", correct: true },
    { text: "1 mois d'emprisonnement et 500 € d'amende", correct: false },
    { text: "6 mois d'emprisonnement et 7 500 € d'amende", correct: false },
  ], "Ces peines s'appliquent même en l'absence d'accident ou de dommage matériel, la seule mise en danger suffisant à caractériser l'infraction."),
  q("divers", "Pour être qualifié de rodéo urbain, un comportement dangereux au volant doit être :", [
    { text: "Répété de façon intentionnelle, et non un acte isolé", correct: true },
    { text: "Commis obligatoirement à plusieurs véhicules", correct: false },
    { text: "Commis exclusivement de nuit", correct: false },
  ], "Un seul conducteur agissant seul peut être poursuivi pour rodéo urbain, à condition que ses manœuvres dangereuses soient répétées intentionnellement."),
  q("divers", "En cas de rodéo urbain commis sous l'emprise de l'alcool ou de stupéfiants, la peine encourue peut atteindre :", [
    { text: "3 ans d'emprisonnement et 45 000 € d'amende", correct: true },
    { text: "1 semaine d'emprisonnement et 150 € d'amende", correct: false },
    { text: "1 an d'emprisonnement et 15 000 € d'amende", correct: false },
  ], "La présence de circonstances aggravantes comme l'alcool ou les stupéfiants alourdit significativement les peines prévues pour cette infraction."),
  q("divers", "La confiscation du véhicule ayant servi à commettre un rodéo urbain est, en principe :", [
    { text: "Obligatoire si le conducteur en est propriétaire, sauf décision spécialement motivée du tribunal", correct: true },
    { text: "Impossible, seule une amende pouvant être prononcée", correct: false },
    { text: "Facultative et rarement appliquée en pratique", correct: false },
  ], "Le caractère obligatoire de cette peine complémentaire vise à dissuader fortement la pratique des rodéos motorisés."),
  q("divers", "Inciter autrui à participer à un rodéo urbain ou en faire la promotion sur les réseaux sociaux est :", [
    { text: "Également un délit, puni de 2 ans d'emprisonnement et 30 000 € d'amende", correct: true },
    { text: "Sans conséquence juridique, seule la participation physique étant punissable", correct: false },
    { text: "Une simple contravention de 5e classe", correct: false },
  ], "La loi vise aussi les personnes qui encouragent ou organisent ces comportements, sans nécessairement y participer directement."),
  /* ===== VAGUE 36 -- pictogrammes médicaments et conduite (données précises) ===== */

  q("conducteur", "Le pictogramme de niveau 1 (fond jaune) sur une boîte de médicament signifie :", [
    { text: "Un risque faible, dépendant surtout de la tolérance individuelle, sans interdiction de conduire", correct: true },
    { text: "Une interdiction totale et systématique de prendre le volant", correct: false },
    { text: "Un risque identique au niveau 3", correct: false },
  ], "Ce niveau invite simplement à la prudence et à la lecture de la notice, sans remettre en cause la conduite pour la plupart des personnes."),
  q("conducteur", "Le pictogramme de niveau 2 (fond orange) recommande :", [
    { text: "De ne pas conduire sans l'avis d'un professionnel de santé", correct: true },
    { text: "De conduire normalement sans précaution particulière", correct: false },
    { text: "D'arrêter totalement de conduire pendant toute la durée du traitement", correct: false },
  ], "Ce niveau intermédiaire signale un risque réel pour la conduite, nécessitant l'avis d'un médecin ou pharmacien avant de prendre le volant."),
  q("conducteur", "Le pictogramme de niveau 3 (fond rouge) signifie que la conduite est :", [
    { text: "Formellement déconseillée, l'effet pouvant se prolonger après l'arrêt du traitement", correct: true },
    { text: "Possible sans restriction particulière", correct: false },
    { text: "Autorisée uniquement de jour", correct: false },
  ], "Ce niveau maximal de risque concerne des médicaments dont les effets sur la vigilance rendent la conduite dangereuse pour tous les patients."),
  q("conducteur", "La prise combinée de plusieurs médicaments classés en niveau 1 ou 2 peut :", [
    { text: "Produire un effet cumulé équivalent à un niveau 3", correct: true },
    { text: "N'a jamais d'effet cumulatif, chaque médicament restant indépendant", correct: false },
    { text: "Annuler les effets de chaque médicament pris isolément", correct: false },
  ], "L'association de plusieurs traitements, même de niveau modéré, peut renforcer les effets sur la vigilance et justifier une prudence accrue."),
  q("conducteur", "Les médicaments les plus fréquemment associés aux accidents liés à un défaut de vigilance sont notamment :", [
    { text: "Les somnifères et les anxiolytiques", correct: true },
    { text: "Les vitamines et compléments alimentaires", correct: false },
    { text: "Les antibiotiques classiques", correct: false },
  ], "Ces traitements agissant sur le système nerveux central sont particulièrement concernés par les niveaux de risque 2 et 3."),

  /* ===== VAGUE 37 -- loi Montagne, équipements hiver (données 2025-2026) ===== */

  q("mecanique", "La loi Montagne impose des équipements hivernaux obligatoires, chaque année, sur la période :", [
    { text: "Du 1er novembre au 31 mars, dans les communes concernées", correct: true },
    { text: "Toute l'année, sans limitation de dates", correct: false },
    { text: "Du 1er décembre au 28 février uniquement", correct: false },
  ], "Cette période hivernale, fixée chaque année par décret, correspond aux mois où les conditions de neige et de verglas sont les plus fréquentes en zone de montagne."),
  q("mecanique", "Pour être conformes à la loi Montagne, les pneus hiver ou 4 saisons doivent porter le marquage :", [
    { text: "3PMSF (montagne à trois pics avec flocon de neige)", correct: true },
    { text: "M+S (Mud and Snow) uniquement, qui reste pleinement suffisant", correct: false },
    { text: "E-mark (marquage européen général des pneus)", correct: false },
  ], "Depuis novembre 2024, le seul marquage M+S ne suffit plus ; seul le marquage 3PMSF, plus exigeant, atteste d'une réelle performance hivernale certifiée."),
  q("signalisation", "L'entrée dans une zone où s'applique la loi Montagne est signalée par le panneau :", [
    { text: "B58", correct: true },
    { text: "AB4", correct: false },
    { text: "A4", correct: false },
  ], "Ce panneau spécifique, complété par un panonceau de dates, indique le début d'une zone où l'équipement hivernal devient obligatoire."),
  q("mecanique", "En zone soumise à la loi Montagne, à défaut de pneus hiver homologués, un conducteur doit disposer de :", [
    { text: "Chaînes ou chaussettes à neige pour équiper au moins les roues motrices", correct: true },
    { text: "Aucune alternative n'existe en dehors des pneus hiver", correct: false },
    { text: "D'un simple triangle de signalisation supplémentaire", correct: false },
  ], "Les dispositifs antidérapants amovibles constituent une alternative acceptée, à condition d'équiper au minimum les roues motrices du véhicule."),
  q("mecanique", "La loi Montagne s'applique dans un total de :", [
    { text: "34 départements français situés en zone de massifs montagneux", correct: true },
    { text: "Tous les départements de France sans exception", correct: false },
    { text: "5 départements uniquement, situés dans les Alpes", correct: false },
  ], "Seuls les départements concernés par des massifs montagneux (Alpes, Pyrénées, Massif central, Jura, Vosges, Corse) sont soumis à cette obligation spécifique."),
  q("mecanique", "Le non-respect de la loi Montagne dans une commune concernée expose le conducteur à :", [
    { text: "Une amende de 4e classe (135 €) et une possible immobilisation du véhicule", correct: true },
    { text: "Un simple avertissement écrit sans aucune amende", correct: false },
    { text: "Une amende de 1re classe (11 €) sans autre conséquence", correct: false },
  ], "Au-delà de l'amende, l'absence d'équipement conforme peut aussi compliquer l'indemnisation par l'assurance en cas d'accident lié aux conditions hivernales."),

  /* ===== VAGUE 38 -- bonus-malus assurance (données précises) ===== */

  q("divers", "Le coefficient de bonus-malus (CRM) d'un nouvel assuré souscrivant son premier contrat automobile est fixé à :", [
    { text: "1, un niveau neutre sans bonus ni malus", correct: true },
    { text: "0,50, le bonus maximal accordé d'emblée", correct: false },
    { text: "1,25, un léger malus de départ", correct: false },
  ], "Ce coefficient de référence évolue ensuite chaque année selon la survenue ou non d'accidents responsables."),
  q("divers", "Chaque année sans accident responsable, le coefficient de bonus-malus est réduit de :", [
    { text: "5 %", correct: true },
    { text: "25 %", correct: false },
    { text: "10 %", correct: false },
  ], "Cette réduction progressive de 5 % par an permet d'atteindre le bonus maximal après plusieurs années consécutives sans sinistre responsable."),
  q("divers", "Un accident entièrement responsable entraîne une majoration du coefficient de bonus-malus de :", [
    { text: "25 %", correct: true },
    { text: "5 %", correct: false },
    { text: "50 %", correct: false },
  ], "Cette majoration, bien plus importante que le bonus annuel, illustre l'effet dissuasif recherché par ce système envers les comportements responsables d'accidents."),
  q("divers", "En cas d'accident partiellement responsable (50/50), la majoration du coefficient est réduite à :", [
    { text: "12,5 %", correct: true },
    { text: "25 %, comme pour une responsabilité totale", correct: false },
    { text: "0 %, aucune majoration n'étant appliquée", correct: false },
  ], "Le partage de responsabilité entre les conducteurs impliqués se traduit par une majoration proportionnellement réduite de moitié."),
  q("divers", "Le bonus maximal, correspondant à un coefficient de 0,50, est atteint après combien d'années consécutives sans accident responsable ?", [
    { text: "13 ans", correct: true },
    { text: "3 ans", correct: false },
    { text: "5 ans", correct: false },
  ], "Cette longue durée récompense une conduite prudente et régulière sur une période étendue."),
  q("divers", "Le coefficient de bonus-malus ne peut en aucun cas dépasser :", [
    { text: "3,50, quel que soit le nombre d'accidents responsables cumulés", correct: true },
    { text: "Il n'existe aucun plafond légal au malus", correct: false },
    { text: "2,00, au-delà duquel l'assurance devient automatiquement résiliée", correct: false },
  ], "Ce plafond réglementaire évite une majoration illimitée de la prime, même pour les conducteurs cumulant plusieurs sinistres responsables."),
  q("divers", "La règle dite de « descente rapide » permet à un conducteur malussé de revenir à un coefficient de 1 après :", [
    { text: "2 années consécutives sans accident responsable", correct: true },
    { text: "10 années consécutives sans accident responsable", correct: false },
    { text: "5 années consécutives sans accident responsable", correct: false },
  ], "Ce mécanisme favorable évite qu'un malus important ne pénalise indéfiniment un conducteur qui a ensuite adopté une conduite prudente."),
  q("divers", "Un conducteur bénéficiant du bonus maximal (0,50) depuis au moins 3 ans voit son premier accident responsable :", [
    { text: "Ne pas entraîner de majoration de son coefficient", correct: true },
    { text: "Immédiatement sanctionné par la majoration standard de 25 %", correct: false },
    { text: "Sanctionné par une majoration réduite de 10 % seulement", correct: false },
  ], "Cet avantage légal protège les conducteurs les plus expérimentés et prudents lors d'un premier incident après une longue période sans sinistre."),

  /* ===== VAGUE 39 -- passages à niveau (données précises, article R422-3) ===== */

  q("signalisation", "Le franchissement d'un passage à niveau alors que les barrières sont en cours de fermeture est sanctionné par :", [
    { text: "Une amende de 135 € et un retrait de 4 points", correct: true },
    { text: "Un simple avertissement sans amende ni retrait", correct: false },
    { text: "Une amende de 35 € sans retrait de points", correct: false },
  ], "Cette contravention de 4e classe, prévue à l'article R422-3 du code de la route, peut également entraîner une suspension du permis jusqu'à 3 ans.", { image: WM("AB1") }),
  q("divers", "Sur un passage à niveau sans barrière, signalé par une croix de Saint-André, le conducteur doit :", [
    { text: "S'arrêter et s'assurer qu'aucun train n'approche avant de s'engager", correct: true },
    { text: "Ralentir simplement sans obligation de s'arrêter", correct: false },
    { text: "Klaxonner avant de s'engager, sans autre précaution", correct: false },
  ], "L'article R422-3 impose un arrêt et une vérification systématique avant de s'engager sur un passage non protégé par des barrières."),
  q("divers", "Un train lancé à 90 km/h nécessite, pour s'arrêter complètement, une distance d'environ :", [
    { text: "800 mètres", correct: true },
    { text: "80 mètres", correct: false },
    { text: "200 mètres", correct: false },
  ], "Cette distance de freinage considérable explique pourquoi les trains bénéficient d'une priorité absolue sur tout passage à niveau."),
  q("divers", "Le dépassement d'un autre véhicule est interdit sur les passages à niveau non munis de barrières ou demi-barrières :", [
    { text: "Systématiquement, en vertu de l'article R414-12 du code de la route", correct: true },
    { text: "Uniquement si un train est visible au moment du dépassement", correct: false },
    { text: "Uniquement de nuit", correct: false },
  ], "Cette interdiction s'applique indépendamment de la présence visible d'un train, pour éviter tout risque d'immobilisation sur les voies."),
  q("divers", "Si votre véhicule reste bloqué sur un passage à niveau au moment où les barrières commencent à descendre, vous devez :", [
    { text: "Évacuer immédiatement le véhicule et enfoncer la barrière si nécessaire, celle-ci étant conçue pour céder", correct: true },
    { text: "Rester dans le véhicule en attendant les secours", correct: false },
    { text: "Klaxonner pour alerter le conducteur du train", correct: false },
  ], "La priorité absolue est de dégager la voie et de mettre les occupants en sécurité, la barrière étant volontairement conçue pour ne pas résister à un tel choc."),
  q("divers", "Hors agglomération, les balises annonçant l'approche d'un passage à niveau sont généralement positionnées à :", [
    { text: "150, 100 et 50 mètres du passage, selon le nombre de bandes rouges", correct: true },
    { text: "Une seule balise unique, à 500 mètres", correct: false },
    { text: "300, 200 et 100 mètres du passage", correct: false },
  ], "Ce système de trois balises successives permet une anticipation progressive de l'approche du passage à niveau."),

  /* ===== VAGUE 40 -- refus de priorité piéton, article R415-11 (données précises) ===== */

  q("usagers", "Depuis un décret de septembre 2018, le refus de priorité à un piéton engagé sur un passage protégé entraîne un retrait de :", [
    { text: "6 points, contre 4 points auparavant", correct: true },
    { text: "1 point seulement", correct: false },
    { text: "3 points, contre 4 points auparavant", correct: false },
  ], "Ce durcissement de 2018 illustre la volonté de mieux protéger les piétons, usagers particulièrement vulnérables en cas de choc."),
  q("usagers", "L'article R415-11 du code de la route impose de céder le passage à un piéton dès qu'il :", [
    { text: "S'engage régulièrement dans la traversée ou manifeste clairement son intention de le faire", correct: true },
    { text: "A terminé plus de la moitié de sa traversée", correct: false },
    { text: "Lève la main pour demander le passage", correct: false },
  ], "La simple manifestation claire de l'intention de traverser suffit à déclencher l'obligation de céder le passage, sans attendre un engagement effectif."),
  q("usagers", "Un piéton qui traverse en dehors des clous alors qu'un passage protégé existe à moins de 50 mètres risque une amende de :", [
    { text: "4 €", correct: true },
    { text: "135 €, comme un automobiliste en infraction", correct: false },
    { text: "35 €", correct: false },
  ], "Cette amende symbolique, bien plus faible que celle du conducteur, reflète le risque très inégal encouru par chacun des deux usagers en cas de collision."),
  q("usagers", "Le refus de priorité à un piéton peut désormais être constaté :", [
    { text: "Par vidéo-verbalisation, sans interception physique du conducteur", correct: true },
    { text: "Uniquement lors d'un contrôle routier avec interpellation directe", correct: false },
    { text: "Uniquement sur plainte du piéton concerné", correct: false },
  ], "Cette évolution technique permet de sanctionner l'infraction même en l'absence de tout contact direct entre l'agent et le conducteur au moment des faits."),
  q("usagers", "L'obligation de céder le passage à un piéton s'applique également dans :", [
    { text: "Les aires piétonnes et les zones de rencontre, même en l'absence de passage clouté", correct: true },
    { text: "Uniquement sur les passages cloutés matérialisés au sol", correct: false },
    { text: "Uniquement dans le centre des grandes villes", correct: false },
  ], "L'article R415-11 étend explicitement cette priorité aux espaces où les piétons circulent librement, au-delà des seuls passages protégés traditionnels."),
  /* ===== VAGUE 41 -- panneau M12, cédez-le-passage cycliste au feu (données précises) ===== */

  q("signalisation", "Le panonceau M12, placé sous un feu tricolore, autorise :", [
    { text: "Les cyclistes à franchir le feu rouge dans la direction indiquée, en cédant le passage", correct: true },
    { text: "Tous les véhicules à franchir le feu rouge sans restriction", correct: false },
    { text: "Uniquement les piétons à traverser en dehors du passage clouté", correct: false },
  ], "Ce dispositif, propre aux cyclistes (et depuis 2024 aux utilisateurs d'EDPM), transforme localement le feu rouge en simple cédez-le-passage.", { image: WM("M12") }),
  q("usagers", "En présence d'un panneau M12, un cycliste franchissant le feu rouge doit malgré tout :", [
    { text: "Céder le passage aux piétons engagés sur le passage et aux véhicules bénéficiant du feu vert", correct: true },
    { text: "Avoir une priorité absolue sur tous les autres usagers du carrefour", correct: false },
    { text: "Attendre l'autorisation expresse d'un agent", correct: false },
  ], "Le M12 ne confère jamais de priorité automatique : il s'agit d'un cédez-le-passage, imposant une vérification active avant de s'engager."),
  q("usagers", "Le panonceau M12a, le plus répandu en France, autorise le cycliste à :", [
    { text: "Tourner à droite uniquement", correct: true },
    { text: "Continuer tout droit uniquement", correct: false },
    { text: "Tourner à gauche uniquement", correct: false },
  ], "Cette variante, la plus fréquente, correspond au mouvement le moins risqué à autoriser au feu rouge pour un cycliste."),
  q("usagers", "Un cycliste qui franchit un feu rouge équipé d'un panneau M12 autorisant uniquement le tourne-à-droite, mais qui va tout droit, s'expose à :", [
    { text: "Une amende de 135 € pour non-respect du feu rouge", correct: true },
    { text: "Aucune sanction, le panneau M12 couvrant toutes les directions", correct: false },
    { text: "Un simple avertissement, sans amende", correct: false },
  ], "L'autorisation du M12 est strictement limitée à la ou les directions indiquées par ses flèches ; toute autre direction reste une infraction classique."),
  q("usagers", "Depuis mars 2024, le bénéfice du panneau M12 a été étendu :", [
    { text: "Aux utilisateurs de trottinettes électriques et autres engins de déplacement personnel motorisés", correct: true },
    { text: "Aux automobilistes circulant seuls dans leur véhicule", correct: false },
    { text: "Aux conducteurs de deux-roues motorisés de plus de 125 cm³", correct: false },
  ], "Cette extension reconnaît que les EDPM sont désormais assimilés aux cyclistes pour l'essentiel de la réglementation routière."),
  q("usagers", "L'installation d'un panneau M12 à un carrefour donné relève de la décision :", [
    { text: "De la collectivité territoriale compétente, après étude de la configuration du carrefour", correct: true },
    { text: "D'une obligation nationale identique partout en France", correct: false },
    { text: "Du préfet de région uniquement", correct: false },
  ], "Contrairement à de nombreux panneaux standardisés, la pose d'un M12 dépend d'une analyse locale au cas par cas menée par les gestionnaires de voirie."),

  /* ===== VAGUE 42 -- confiscation du véhicule, grand excès de vitesse (données 2025-2026) ===== */

  q("vitesse", "Depuis 2016, un grand excès de vitesse (50 km/h ou plus) permet aux forces de l'ordre de procéder, dès le contrôle, à :", [
    { text: "Une immobilisation immédiate du véhicule et sa mise en fourrière à titre provisoire", correct: true },
    { text: "Uniquement un simple avertissement oral", correct: false },
    { text: "Une confiscation définitive immédiate, sans jugement", correct: false },
  ], "Cette possibilité d'immobilisation immédiate, autrefois réservée à la récidive, s'applique désormais dès la première infraction constatée."),
  q("vitesse", "La confiscation définitive du véhicule pour grand excès de vitesse est prononcée par :", [
    { text: "Un juge, à l'issue d'un jugement", correct: true },
    { text: "L'agent verbalisateur, directement sur place", correct: false },
    { text: "Le préfet, par simple arrêté administratif", correct: false },
  ], "Seule une décision de justice peut prononcer la confiscation définitive ; les forces de l'ordre ne peuvent qu'immobiliser provisoirement le véhicule."),
  q("vitesse", "En cas de récidive de grand excès de vitesse dans les 5 ans, la confiscation du véhicule devient :", [
    { text: "Obligatoire si le conducteur en est propriétaire, sauf décision spécialement motivée du tribunal", correct: true },
    { text: "Impossible, seule une amende pouvant être prononcée en récidive", correct: false },
    { text: "Facultative, laissée à la libre appréciation de l'agent verbalisateur", correct: false },
  ], "La récidive aggrave significativement les conséquences, rendant la confiscation quasi systématique en cas de propriété du véhicule par le contrevenant."),
  q("vitesse", "Un conducteur ayant commis un grand excès de vitesse au volant d'un véhicule de location ou de fonction :", [
    { text: "Ne peut pas voir ce véhicule confisqué, n'en étant pas propriétaire", correct: true },
    { text: "Risque la confiscation au même titre qu'un propriétaire", correct: false },
    { text: "Engage la responsabilité de l'entreprise de location pour la confiscation", correct: false },
  ], "La confiscation ne peut porter que sur un bien appartenant au condamné ; un véhicule loué ou prêté échappe donc à cette sanction."),
  q("vitesse", "Après une immobilisation pour grand excès de vitesse, si le procureur n'autorise pas la mise en fourrière dans un délai de :", [
    { text: "7 jours, le véhicule est restitué à son propriétaire", correct: true },
    { text: "24 heures, le véhicule est définitivement confisqué", correct: false },
    { text: "30 jours, le véhicule reste immobilisé sans limite", correct: false },
  ], "Ce délai encadre strictement la durée pendant laquelle un véhicule peut rester immobilisé sans décision judiciaire confirmant la mesure."),
  /* ===== VAGUE 43 -- stationnement en pente (données vérifiées) ===== */

  q("securite", "Lors d'un stationnement en pente, il est recommandé de braquer les roues avant :", [
    { text: "Vers le trottoir en descente, vers la chaussée en montée", correct: true },
    { text: "Toujours tout droit, quel que soit le sens de la pente", correct: false },
    { text: "Vers la chaussée en descente, vers le trottoir en montée", correct: false },
  ], "Cette orientation permet, en cas de défaillance du frein à main, que le véhicule soit stoppé par le trottoir plutôt que de dévaler la pente."),
  q("securite", "Sur un véhicule à boîte manuelle stationné en montée, il est conseillé d'enclencher :", [
    { text: "La marche arrière", correct: true },
    { text: "La première vitesse", correct: false },
    { text: "Le point mort", correct: false },
  ], "En montée, la marche arrière bloque efficacement le véhicule contre un éventuel mouvement vers l'avant en cas de défaillance du frein à main."),
  q("securite", "Sur un véhicule à boîte manuelle stationné en descente, il est conseillé d'enclencher :", [
    { text: "La première vitesse", correct: true },
    { text: "La marche arrière", correct: false },
    { text: "Le point mort", correct: false },
  ], "La première vitesse offre la meilleure résistance mécanique pour empêcher le véhicule de reculer vers l'avant de la pente."),
  q("securite", "Sur un véhicule à boîte automatique, en stationnement, le levier doit être positionné sur :", [
    { text: "La position P (parking)", correct: true },
    { text: "La position N (point mort)", correct: false },
    { text: "La position D (drive)", correct: false },
  ], "La position P verrouille mécaniquement la transmission, contrairement au point mort qui laisse les roues libres de tourner."),
  q("securite", "Le rôle du frein à main est de :", [
    { text: "Bloquer une ou plusieurs roues sur un même essieu pour empêcher tout déplacement du véhicule", correct: true },
    { text: "Ralentir le véhicule en cas de défaillance du freinage principal en roulant", correct: false },
    { text: "Remplacer totalement le freinage classique en usage quotidien", correct: false },
  ], "Contrairement à une idée reçue, le frein à main (ou de stationnement) est avant tout conçu pour immobiliser un véhicule à l'arrêt, pas pour freiner en roulant."),

  /* ===== VAGUE 44 -- dispositif sonore AVAS des véhicules électriques (données vérifiées) ===== */

  q("environnement", "Le dispositif AVAS, obligatoire sur les véhicules électriques et hybrides neufs, sert à :", [
    { text: "Émettre un son artificiel à basse vitesse pour signaler le véhicule aux piétons et cyclistes", correct: true },
    { text: "Réduire davantage le bruit déjà très faible de ces véhicules", correct: false },
    { text: "Avertir le conducteur d'un défaut de batterie", correct: false },
  ], "Ce système compense le silence de ces véhicules, particulièrement dangereux pour les piétons malvoyants qui se repèrent au bruit."),
  q("environnement", "Le son émis par l'AVAS se déclenche automatiquement :", [
    { text: "En dessous d'environ 20 km/h et en marche arrière", correct: true },
    { text: "Uniquement au-dessus de 50 km/h", correct: false },
    { text: "En permanence, quelle que soit la vitesse", correct: false },
  ], "Au-delà de cette vitesse, le bruit de roulement des pneus et l'aérodynamisme suffisent généralement à signaler la présence du véhicule."),
  q("environnement", "L'obligation d'équiper les véhicules électriques et hybrides neufs d'un système AVAS dans l'Union européenne est entrée en vigueur :", [
    { text: "Le 1er juillet 2019", correct: true },
    { text: "Dès les années 1990", correct: false },
    { text: "Le 1er janvier 2023", correct: false },
  ], "Ce règlement européen a accompagné la démocratisation des véhicules électriques, dont le silence posait un enjeu de sécurité nouveau."),
  q("environnement", "Les associations de défense des personnes malvoyantes ont particulièrement milité pour l'AVAS car :", [
    { text: "Elles s'appuient largement sur le bruit des véhicules pour évaluer leur approche et traverser en sécurité", correct: true },
    { text: "Elles n'ont aucun lien avec cette problématique spécifique", correct: false },
    { text: "Elles souhaitaient surtout réduire la pollution sonore globale", correct: false },
  ], "Le repère sonore est essentiel pour les personnes déficientes visuelles, qui ne peuvent pas compter sur la perception visuelle d'un véhicule approchant."),

  /* ===== VAGUE 45 -- dépistage stupéfiants, test salivaire (données précises 2025-2026) ===== */

  q("conducteur", "Contrairement à l'alcoolémie, la législation française sur les stupéfiants au volant prévoit :", [
    { text: "Aucun seuil minimal : la moindre trace détectée constitue une infraction", correct: true },
    { text: "Un seuil identique à celui de l'alcool, soit 0,5 g/L", correct: false },
    { text: "Un seuil de tolérance de 0,2 g/L", correct: false },
  ], "L'article L235-1 du code de la route sanctionne l'usage de stupéfiants dès qu'une trace est détectée, sans notion de seuil comme pour l'alcool."),
  q("conducteur", "Lors d'un contrôle routier, le premier outil utilisé pour dépister les stupéfiants est généralement :", [
    { text: "Un test salivaire, rapide et réalisable directement sur place", correct: true },
    { text: "Une prise de sang systématique", correct: false },
    { text: "Un test urinaire réalisé au commissariat", correct: false },
  ], "Le test salivaire, non invasif et donnant un résultat en quelques minutes, est privilégié lors des contrôles routiers, la prise de sang intervenant en confirmation."),
  q("conducteur", "En cas de test salivaire positif aux stupéfiants, le permis de conduire peut être retenu pour une durée maximale de :", [
    { text: "120 heures, le temps d'obtenir les résultats d'analyse de confirmation", correct: true },
    { text: "24 heures maximum, sans possibilité de prolongation", correct: false },
    { text: "48 heures maximum", correct: false },
  ], "Cette rétention prolongée permet d'attendre les résultats du laboratoire d'analyses toxicologiques avant une décision définitive."),
  q("conducteur", "Le THC (cannabis) reste généralement détectable dans la salive, après une consommation occasionnelle, pendant environ :", [
    { text: "6 à 24 heures", correct: true },
    { text: "Seulement 30 minutes", correct: false },
    { text: "1 semaine complète", correct: false },
  ], "Cette durée varie fortement selon la fréquence de consommation, pouvant s'étendre à plusieurs jours chez un consommateur régulier."),
  q("conducteur", "Refuser de se soumettre à un dépistage de stupéfiants lors d'un contrôle routier est :", [
    { text: "Sanctionné aussi sévèrement qu'un test positif confirmé", correct: true },
    { text: "Sans conséquence particulière, le refus étant un droit du conducteur", correct: false },
    { text: "Sanctionné par une simple amende de 4e classe uniquement", correct: false },
  ], "Le refus de dépistage est assimilé pénalement à une infraction avérée, dissuadant fortement les conducteurs de s'y soustraire."),

  /* ===== VAGUE 46 -- manœuvre de Heimlich, étouffement (données vérifiées) ===== */

  q("secours", "Face à une personne qui s'étouffe mais qui parvient encore à tousser fortement, il faut :", [
    { text: "L'encourager à tousser plutôt que d'intervenir immédiatement par des gestes de désobstruction", correct: true },
    { text: "Pratiquer immédiatement la manœuvre de Heimlich", correct: false },
    { text: "Lui donner immédiatement à boire de l'eau", correct: false },
  ], "Tant que la toux reste efficace, elle demeure le mécanisme naturel le plus efficace pour expulser un corps étranger ; intervenir peut être contre-productif."),
  q("secours", "Face à une personne en obstruction totale des voies aériennes (aucun son, mains à la gorge), le premier geste à réaliser est :", [
    { text: "Des tapes vigoureuses entre les omoplates", correct: true },
    { text: "Directement la manœuvre de Heimlich (compressions abdominales)", correct: false },
    { text: "Un massage cardiaque immédiat", correct: false },
  ], "Les claques dans le dos constituent la première étape recommandée, avant de passer aux compressions abdominales si elles restent inefficaces."),
  q("secours", "Si les claques dans le dos ne suffisent pas à désobstruer les voies aériennes d'un adulte, il faut ensuite pratiquer :", [
    { text: "Des compressions abdominales (manœuvre de Heimlich)", correct: true },
    { text: "Un massage cardiaque immédiat", correct: false },
    { text: "De nouvelles claques dans le dos, plus fortes", correct: false },
  ], "Le massage cardiaque n'intervient que si la victime perd connaissance et cesse de respirer ; tant qu'elle reste consciente, les compressions abdominales sont indiquées."),
  q("secours", "Chez une femme enceinte ou une personne en forte surcharge pondérale qui s'étouffe, la manœuvre de Heimlich classique est remplacée par :", [
    { text: "Des compressions thoraciques plutôt qu'abdominales", correct: true },
    { text: "Aucune alternative n'existe, il faut attendre les secours", correct: false },
    { text: "De simples claques dans le dos uniquement", correct: false },
  ], "Cette adaptation évite d'exercer une pression dangereuse sur l'abdomen dans ces situations particulières."),
  q("secours", "Si une personne étouffée perd connaissance pendant la manœuvre de désobstruction, il faut :", [
    { text: "L'accompagner au sol et débuter un massage cardiaque", correct: true },
    { text: "Continuer les compressions abdominales sans changer de position", correct: false },
    { text: "La laisser debout en attendant les secours", correct: false },
  ], "La perte de connaissance impose de basculer vers les gestes de réanimation cardio-pulmonaire, la victime étant alors en situation d'urgence vitale."),

  /* ===== VAGUE 47 -- feu orange fixe, article R412-31 (données précises) ===== */

  q("signalisation", "Selon l'article R412-31 du code de la route, devant un feu orange fixe, le conducteur doit :", [
    { text: "S'arrêter, sauf s'il ne peut le faire en toute sécurité", correct: true },
    { text: "Continuer normalement, l'orange n'étant qu'un simple avertissement", correct: false },
    { text: "Ralentir fortement sans obligation d'arrêt", correct: false },
  ], "Contrairement à une idée répandue, le feu orange fixe est un feu d'arrêt à part entière, avec une exception limitée aux situations où freiner serait dangereux.", { image: WM("A2b") }),
  q("signalisation", "Le franchissement injustifié d'un feu orange fixe est sanctionné par une amende forfaitaire de :", [
    { text: "35 €, sans retrait de points sur le permis", correct: true },
    { text: "135 € et un retrait de 4 points, comme pour un feu rouge", correct: false },
    { text: "11 €, sans retrait de points", correct: false },
  ], "La sanction du feu orange est nettement plus légère que celle du feu rouge, catégorisée comme contravention de 2e classe."),
  q("signalisation", "Les radars automatiques de feux tricolores se déclenchent :", [
    { text: "Uniquement lors du franchissement d'un feu rouge, jamais pour un feu orange", correct: true },
    { text: "Dès le passage au feu orange", correct: false },
    { text: "Dès l'entrée dans le carrefour, quel que soit le feu", correct: false },
  ], "Seule la constatation par des agents présents sur place permet de sanctionner un franchissement injustifié du feu orange."),
  q("signalisation", "La durée d'affichage du feu orange fixe avant de passer au rouge est généralement de :", [
    { text: "3 secondes en agglomération, 5 secondes hors agglomération", correct: true },
    { text: "30 secondes, quelle que soit la zone", correct: false },
    { text: "1 seconde, quelle que soit la zone", correct: false },
  ], "Cette durée, plus longue hors agglomération où les vitesses sont plus élevées, laisse un temps d'anticipation suffisant au conducteur."),
  q("signalisation", "Un feu orange clignotant (isolé, sans cycle tricolore complet) signifie :", [
    { text: "Un danger particulier nécessitant prudence, sans obligation d'arrêt automatique", correct: true },
    { text: "Exactement la même chose qu'un feu orange fixe", correct: false },
    { text: "Un carrefour définitivement fermé", correct: false },
  ], "Contrairement au feu fixe, le feu orange clignotant n'impose pas d'arrêt mais appelle à une vigilance renforcée, avec application des règles de priorité habituelles."),

  /* ===== VAGUE 48 -- voies réservées au covoiturage (données 2025-2026) ===== */

  q("divers", "Une voie réservée au covoiturage active est signalée au sol et sur panneau par le symbole :", [
    { text: "Un losange blanc", correct: true },
    { text: "Un triangle rouge", correct: false },
    { text: "Un cercle bleu", correct: false },
  ], "Ce marquage, inspiré des voies HOV nord-américaines, s'est généralisé sur les axes français équipés de voies réservées."),
  q("divers", "Circuler seul dans son véhicule sur une voie réservée au covoiturage active est sanctionné par une amende de :", [
    { text: "135 €, sans retrait de points dans la plupart des cas", correct: true },
    { text: "1 500 € et un retrait de 6 points", correct: false },
    { text: "35 €, sans retrait de points", correct: false },
  ], "Cette contravention de 4e classe, comparable à celle d'une voie de bus, n'entraîne généralement pas de retrait de points sur le permis."),
  q("divers", "Sur une voie réservée au covoiturage, le nombre minimal d'occupants généralement exigé (conducteur inclus) est de :", [
    { text: "2 personnes", correct: true },
    { text: "4 personnes", correct: false },
    { text: "3 personnes", correct: false },
  ], "La configuration la plus répandue en France (dite V2+) exige au moins deux occupants, conducteur compris, sauf mention contraire sur la signalisation locale."),
  q("divers", "Sur certaines voies réservées au covoiturage, les véhicules 100 % électriques peuvent parfois circuler :", [
    { text: "Même seuls, si la signalisation locale le prévoit explicitement", correct: true },
    { text: "Jamais, ces voies étant réservées exclusivement au covoiturage", correct: false },
    { text: "Uniquement le week-end", correct: false },
  ], "Certains arrêtés locaux étendent l'accès aux véhicules à très faibles émissions, indépendamment du nombre d'occupants, selon les axes concernés."),
  q("divers", "Le contrôle du respect des voies réservées au covoiturage repose de plus en plus sur :", [
    { text: "Des caméras intelligentes capables de détecter le nombre d'occupants d'un véhicule", correct: true },
    { text: "Uniquement des contrôles visuels aléatoires par des agents au bord de la route", correct: false },
    { text: "Des péages spécifiques dédiés à ces voies", correct: false },
  ], "La vidéo-verbalisation automatisée se généralise sur ces voies, en complément ou en remplacement des contrôles humains traditionnels."),
  /* ===== VAGUE 49 -- feu orange clignotant et priorités (données précises) ===== */

  q("priorites", "Face à un feu orange clignotant sans aucun panneau associé, la règle qui s'applique est :", [
    { text: "La priorité à droite, comme à tout carrefour non signalé", correct: true },
    { text: "Le passage libre sans aucune règle de priorité", correct: false },
    { text: "L'arrêt obligatoire, comme à un STOP", correct: false },
  ], "Le feu orange clignotant ne confère aucune priorité automatique : il rappelle simplement d'appliquer les règles habituelles, la priorité à droite par défaut."),
  q("priorites", "Si un panneau STOP est positionné sous un feu orange clignotant, le conducteur doit :", [
    { text: "Marquer l'arrêt, la signalisation verticale prévalant sur le feu clignotant", correct: true },
    { text: "Ignorer le panneau, seul le feu clignotant faisant foi", correct: false },
    { text: "Ralentir seulement, sans arrêt complet", correct: false },
  ], "En présence d'un panneau associé au feu clignotant, c'est toujours la signalisation verticale (panneau) qui détermine la règle de priorité à suivre."),
  q("priorites", "Le non-respect de la priorité à un carrefour équipé d'un feu orange clignotant est sanctionné par :", [
    { text: "Une amende de 135 € et un retrait de points, comme tout refus de priorité", correct: true },
    { text: "Aucune sanction, ce type de carrefour n'étant pas surveillé", correct: false },
    { text: "Une simple amende de 35 € sans retrait de points", correct: false },
  ], "Le feu clignotant ne réduit en rien la portée des règles de priorité classiques ; leur non-respect reste sanctionné comme n'importe quel refus de priorité."),
  q("priorites", "Le feu orange clignotant est parfois utilisé la nuit pour :", [
    { text: "Remplacer le cycle tricolore complet lorsque le trafic est très faible", correct: true },
    { text: "Signaler un carrefour définitivement fermé à la circulation", correct: false },
    { text: "Signaler un radar automatique à proximité", correct: false },
  ], "Cette utilisation nocturne évite des arrêts inutiles aux rares véhicules circulant lorsque le trafic est très réduit, tout en maintenant la prudence requise."),

  /* ===== VAGUE 50 -- règles de dépassement, article R414-6 (données précises) ===== */

  q("divers", "Selon l'article R414-6 du code de la route, le principe général du dépassement impose de doubler :", [
    { text: "Par la gauche, sauf exceptions précises prévues par la loi", correct: true },
    { text: "Indifféremment par la gauche ou par la droite selon la circulation", correct: false },
    { text: "Toujours par la droite en agglomération", correct: false },
  ], "Le dépassement par la droite reste l'exception, strictement encadrée, et non la règle générale de circulation française."),
  q("divers", "Un dépassement par la droite est exceptionnellement autorisé lorsque :", [
    { text: "Le véhicule à dépasser a signalé son intention de tourner à gauche", correct: true },
    { text: "Le conducteur est simplement pressé", correct: false },
    { text: "La voie de gauche est temporairement plus lente", correct: false },
  ], "Cette exception légale évite de rester bloqué derrière un véhicule qui va tourner à gauche et libère la voie de droite pour le contourner en sécurité."),
  q("divers", "Depuis 2015, il est toléré de chevaucher (sans la franchir complètement) une ligne blanche continue pour :", [
    { text: "Dépasser un cycliste, en respectant la distance latérale de sécurité", correct: true },
    { text: "Dépasser n'importe quel véhicule motorisé lent", correct: false },
    { text: "Doubler un piéton marchant sur le bas-côté", correct: false },
  ], "Cette tolérance spécifique aux cyclistes permet de respecter la distance latérale minimale sans commettre d'infraction de franchissement de ligne continue."),
  q("divers", "Un dépassement effectué sans respecter la distance latérale minimale envers un cycliste est classé comme :", [
    { text: "Un dépassement dangereux, sanctionné comme une contravention de 4e classe", correct: true },
    { text: "Une simple recommandation sans valeur contraignante", correct: false },
    { text: "Une contravention de 1re classe, la plus légère", correct: false },
  ], "Le non-respect de cette distance minimale (1 m en agglomération, 1,5 m hors agglomération) constitue une infraction à part entière, indépendamment d'un éventuel accident."),
  q("divers", "Lorsqu'un conducteur est en train d'être dépassé, le code de la route lui demande de :", [
    { text: "Maintenir son allure et serrer à droite, sans accélérer", correct: true },
    { text: "Accélérer légèrement pour raccourcir la durée du dépassement", correct: false },
    { text: "Freiner pour laisser passer plus rapidement", correct: false },
  ], "Accélérer pendant qu'on est dépassé prolonge dangereusement la manœuvre et augmente le risque de collision frontale pour le véhicule doublant."),
  /* ===== VAGUE 51 -- règles spécifiques poids lourds, article R413-8 (données précises) ===== */

  q("usagers", "Sur autoroute, un poids lourd de plus de 3,5 tonnes est limité, sauf exception, à une vitesse maximale de :", [
    { text: "90 km/h", correct: true },
    { text: "130 km/h, comme les voitures particulières", correct: false },
    { text: "110 km/h", correct: false },
  ], "Cette limitation, nettement inférieure à celle des véhicules légers, tient compte du poids et des distances de freinage bien plus importantes de ces véhicules."),
  q("usagers", "Sur une autoroute à trois voies ou plus, un poids lourd effectuant un dépassement doit utiliser :", [
    { text: "La voie du milieu, jamais la voie la plus à gauche", correct: true },
    { text: "N'importe quelle voie disponible, y compris la plus à gauche", correct: false },
    { text: "La voie de droite exclusivement, même pour dépasser", correct: false },
  ], "La voie la plus à gauche reste réservée aux véhicules légers, les poids lourds étant cantonnés aux deux voies de droite."),
  q("usagers", "Les poids lourds de plus de 7,5 tonnes de PTAC sont interdits de circulation sur l'ensemble du réseau routier français :", [
    { text: "Du samedi 22h au dimanche 22h, ainsi que les jours fériés", correct: true },
    { text: "Uniquement la nuit, tous les jours de la semaine", correct: false },
    { text: "Toute la journée du dimanche uniquement", correct: false },
  ], "Cette interdiction hebdomadaire vise à limiter la présence de poids lourds sur les routes aux moments de plus forte affluence des usagers de loisir."),
  q("usagers", "Un poids lourd articulé ou tractant une remorque, dont le poids dépasse 12 tonnes, voit sa vitesse sur route classique hors agglomération limitée à :", [
    { text: "60 km/h", correct: true },
    { text: "80 km/h, comme les poids lourds plus légers", correct: false },
    { text: "70 km/h", correct: false },
  ], "Le poids et la longueur supplémentaires de ces ensembles routiers justifient une limitation encore plus restrictive que pour un poids lourd simple."),
  q("usagers", "Les poids lourds soumis à des vitesses spécifiques doivent afficher, à l'arrière du véhicule, un macaron indiquant :", [
    { text: "Les vitesses maximales autorisées selon le type de route (par exemple 90/80/60)", correct: true },
    { text: "Le nom de la société de transport uniquement", correct: false },
    { text: "Le poids total du véhicule uniquement", correct: false },
  ], "Ce macaron informe les autres usagers des limitations spécifiques applicables à ce véhicule, différentes de celles des voitures particulières."),
  q("usagers", "Un poids lourd est-il autorisé à dépasser un autre véhicule sur autoroute ?", [
    { text: "Oui, sous réserve de bonnes conditions de visibilité et sans gêner excessivement la circulation", correct: true },
    { text: "Non, le dépassement leur est totalement interdit sur autoroute", correct: false },
    { text: "Oui, mais uniquement de nuit", correct: false },
  ], "Contrairement à une idée reçue répandue, aucune interdiction générale n'empêche un poids lourd de dépasser, à condition de respecter les règles de sécurité applicables."),

  /* ===== VAGUE 52 -- permis de conduire international (données précises 2026) ===== */

  q("conducteur", "Le permis de conduire international n'est en principe pas nécessaire pour circuler dans :", [
    { text: "Les pays de l'Espace économique européen, ainsi qu'au Royaume-Uni et en Suisse", correct: true },
    { text: "Aucun pays, il est toujours obligatoire hors de France", correct: false },
    { text: "Uniquement les pays francophones", correct: false },
  ], "Le permis français suffit directement dans ces pays, sans besoin d'un document complémentaire de traduction officielle."),
  q("conducteur", "Le permis de conduire international est en réalité :", [
    { text: "Une traduction officielle du permis national, sans valeur juridique autonome", correct: true },
    { text: "Un permis totalement distinct, remplaçant le permis national à l'étranger", correct: false },
    { text: "Un simple visa de circulation temporaire", correct: false },
  ], "Il doit impérativement être présenté accompagné du permis national, dont il facilite seulement la compréhension par les autorités étrangères."),
  q("conducteur", "La durée de validité du permis de conduire international, depuis le décret du 1er janvier 2025, est de :", [
    { text: "3 ans, ou jusqu'à l'expiration du permis national si elle survient avant", correct: true },
    { text: "10 ans, sans lien avec le permis national", correct: false },
    { text: "1 an, renouvelable indéfiniment", correct: false },
  ], "Cette durée reste limitée à la validité du permis national qu'il traduit, ne pouvant jamais dépasser celle-ci."),
  q("conducteur", "Un conducteur dont le permis français est suspendu peut-il tout de même conduire à l'étranger avec un permis international ?", [
    { text: "Non, la suspension du permis national s'applique également à l'étranger", correct: true },
    { text: "Oui, le permis international reste valable même en cas de suspension du permis français", correct: false },
    { text: "Oui, mais uniquement dans les pays hors Union européenne", correct: false },
  ], "Le permis international n'étant qu'une traduction du permis national, toute suspension de ce dernier prive automatiquement de son usage à l'étranger également."),
  q("conducteur", "La demande de permis de conduire international en France s'effectue :", [
    { text: "En ligne, via le site de l'ANTS", correct: true },
    { text: "Uniquement en préfecture, sur rendez-vous physique obligatoire", correct: false },
    { text: "Auprès de son auto-école exclusivement", correct: false },
  ], "La dématérialisation des démarches administratives liées au permis de conduire concerne également la demande de permis international."),
  /* ===== VAGUE 53 -- voitures sans permis / quadricycles (données précises 2026) ===== */

  q("conducteur", "Un quadricycle léger (voiture sans permis classique) est accessible dès l'âge de :", [
    { text: "14 ans, sous réserve d'être titulaire du permis AM", correct: true },
    { text: "18 ans, comme un véhicule classique", correct: false },
    { text: "16 ans, sans condition de permis AM", correct: false },
  ], "Cette accessibilité dès 14 ans, sous condition de formation, constitue l'un des atouts principaux de ce type de véhicule pour une première autonomie."),
  q("conducteur", "La vitesse maximale d'un quadricycle léger (voiture sans permis classique) est limitée à :", [
    { text: "45 km/h", correct: true },
    { text: "90 km/h", correct: false },
    { text: "70 km/h", correct: false },
  ], "Cette limitation technique, propre à la catégorie L6e, exclut de fait ces véhicules des voies rapides et autoroutes."),
  q("conducteur", "Un quadricycle lourd, plus puissant qu'un quadricycle léger, nécessite d'être titulaire du permis :", [
    { text: "B1, accessible dès 16 ans", correct: true },
    { text: "AM, comme pour le quadricycle léger", correct: false },
    { text: "B classique uniquement", correct: false },
  ], "Le quadricycle lourd, plus proche d'une petite voiture, impose des exigences de formation plus poussées que le simple permis AM."),
  q("conducteur", "Les voitures sans permis sont interdites de circulation sur :", [
    { text: "Les autoroutes et les voies rapides", correct: true },
    { text: "Aucune voie particulière, elles peuvent circuler partout", correct: false },
    { text: "Les routes départementales uniquement", correct: false },
  ], "Leur vitesse maximale limitée les rend incompatibles avec la circulation sur des voies conçues pour des vitesses bien plus élevées."),
  q("conducteur", "Le contrôle technique des voitures sans permis est devenu obligatoire, de façon progressive, depuis :", [
    { text: "2024, selon un calendrier basé sur l'année d'immatriculation du véhicule", correct: true },
    { text: "Cette obligation n'existe pas pour les voitures sans permis", correct: false },
    { text: "1995, comme pour les voitures classiques", correct: false },
  ], "Ces véhicules, longtemps exemptés, sont désormais progressivement intégrés à l'obligation de contrôle technique, comme les autres véhicules motorisés."),
  q("conducteur", "Une personne née avant le 1er janvier 1988 souhaitant conduire un quadricycle léger :", [
    { text: "N'a besoin d'aucune condition d'âge ni de permis AM spécifique", correct: true },
    { text: "Doit obligatoirement repasser le permis AM comme tout le monde", correct: false },
    { text: "Doit simplement présenter une pièce d'identité en cours de validité", correct: false },
  ], "Une clause de droits acquis dispense les personnes nées avant cette date de l'obligation de formation créée ultérieurement."),

  /* ===== VAGUE 54 -- double sens cyclable, article R412-28-1 (données précises) ===== */

  q("usagers", "Dans une zone 30 ou une zone de rencontre, le double sens cyclable dans les rues à sens unique est :", [
    { text: "La règle par défaut depuis 2008, sauf décision contraire du maire", correct: true },
    { text: "Toujours interdit sans arrêté municipal spécifique l'autorisant", correct: false },
    { text: "Réservé aux seuls résidents de la zone", correct: false },
  ], "Depuis le décret de 2008, c'est l'inverse qui prévaut : le double sens cyclable est automatique dans ces zones apaisées, sauf exception motivée."),
  q("signalisation", "Le panonceau M9v2, placé sous un panneau de sens interdit, signifie :", [
    { text: "« Sauf vélos », autorisant les cyclistes à circuler à contresens", correct: true },
    { text: "Une interdiction totale sans aucune exception", correct: false },
    { text: "« Sauf riverains », autorisant les seuls résidents", correct: false },
  ], "Ce panonceau est l'élément de signalisation obligatoire signalant explicitement un double sens cyclable en dehors des zones 30."),
  q("usagers", "Un automobiliste qui s'engage par erreur à contresens dans une rue à sens unique réservée aux cyclistes en double sens risque :", [
    { text: "Une amende de 135 € et un retrait de 4 points", correct: true },
    { text: "Aucune sanction, seuls les cyclistes étant concernés par cette règle", correct: false },
    { text: "Une amende de 35 € sans retrait de points", correct: false },
  ], "Le contresens reste une infraction pour tout véhicule motorisé, seuls les cyclistes bénéficiant de l'autorisation de circuler dans les deux sens."),
  q("usagers", "En l'absence de panneau spécifique, à l'intérieur d'une zone 30 signalée à l'entrée, le double sens cyclable est :", [
    { text: "Applicable de façon implicite dans toutes les rues à sens unique de la zone", correct: true },
    { text: "Toujours interdit sans signalisation rue par rue", correct: false },
    { text: "Applicable uniquement aux heures de faible circulation", correct: false },
  ], "Le classement en zone 30 suffit à instaurer le double sens cyclable par défaut, sans nécessiter une signalisation répétée à chaque rue."),
  q("usagers", "Face à un cycliste arrivant en double sens cyclable, un automobiliste qui tourne dans cette rue doit :", [
    { text: "Vérifier les deux sens de circulation, et non uniquement celui des véhicules motorisés", correct: true },
    { text: "Ne surveiller que le sens de circulation autorisé aux voitures", correct: false },
    { text: "Klaxonner avant de s'engager, sans autre vérification", correct: false },
  ], "L'existence d'un double sens cyclable impose une vigilance dans les deux directions, y compris celle habituellement réservée aux seuls cyclistes."),
  /* ===== VAGUE 55 -- gyrophares, article R313-27 (données précises) ===== */

  q("priorites", "Un gyrophare bleu associé à une sirène à deux temps équipe exclusivement des véhicules :", [
    { text: "Prioritaires, comme la police, la gendarmerie, le SAMU ou les pompiers", correct: true },
    { text: "Agricoles ou de chantier circulant lentement", correct: false },
    { text: "De transport scolaire", correct: false },
  ], "Cette combinaison précise, encadrée par l'article R313-27 du code de la route, est strictement réservée aux véhicules d'intervention prioritaires."),
  q("priorites", "Un gyrophare bleu associé à une sirène à trois temps signale un véhicule :", [
    { text: "D'intérêt général bénéficiant d'une simple facilité de passage, non prioritaire au sens strict", correct: true },
    { text: "Exactement aussi prioritaire qu'un véhicule à sirène deux temps", correct: false },
    { text: "Réservé exclusivement aux transports de fonds", correct: false },
  ], "Ces véhicules (ambulances privées, certaines missions spécifiques) doivent seulement se voir faciliter le passage, sans bénéficier des mêmes franchissements dérogatoires."),
  q("priorites", "Un gyrophare orange, sur un tracteur agricole ou un engin de chantier, signale :", [
    { text: "Un véhicule lent ou encombrant, sans aucune priorité de passage", correct: true },
    { text: "Un véhicule prioritaire au même titre qu'un gyrophare bleu", correct: false },
    { text: "Un véhicule appartenant à une administration publique", correct: false },
  ], "Ce gyrophare a une simple fonction d'avertissement de danger lié à la lenteur ou à l'encombrement du véhicule, sans conférer aucune priorité."),
  q("priorites", "L'utilisation d'un gyrophare bleu par un particulier non habilité constitue :", [
    { text: "Une usurpation de fonction, passible d'une amende pouvant atteindre 15 000 € et d'un an de prison", correct: true },
    { text: "Une simple contravention mineure sans gravité particulière", correct: false },
    { text: "Une infraction sanctionnée uniquement par la confiscation du gyrophare", correct: false },
  ], "Cette sanction sévère reflète la gravité de se faire passer pour un service prioritaire, ce qui pourrait tromper dangereusement les autres usagers."),
  q("priorites", "Le gyrophare de couleur verte, utilisé dans certains pays voisins, est en France :", [
    { text: "Non reconnu par la réglementation, pour éviter toute confusion sur le domaine routier", correct: true },
    { text: "Réservé aux véhicules de secours en montagne", correct: false },
    { text: "Réservé aux véhicules électriques prioritaires", correct: false },
  ], "Les autorités françaises ont volontairement limité le nombre de couleurs de gyrophares afin de préserver la clarté du dispositif pour tous les usagers."),

  /* ===== VAGUE 56 -- dépannage/remorquage sur autoroute (données précises 2026) ===== */

  q("divers", "En cas de panne sur autoroute, seul un dépanneur peut légalement intervenir :", [
    { text: "Une entreprise agréée par la préfecture, désignée par tour de garde pour le secteur concerné", correct: true },
    { text: "N'importe quel dépanneur choisi librement par le conducteur", correct: false },
    { text: "Le garagiste habituel du conducteur, sur simple appel", correct: false },
  ], "Il est impossible de faire appel à son propre garagiste ou assureur directement sur le réseau autoroutier ; seul le dépanneur agréé du secteur peut intervenir."),
  q("divers", "Après avoir signalé une panne sur autoroute via une borne d'urgence, le dépanneur agréé doit arriver sur place dans un délai de :", [
    { text: "30 minutes", correct: true },
    { text: "5 minutes", correct: false },
    { text: "2 heures", correct: false },
  ], "Ce délai maximal réglementaire garantit une prise en charge rapide des véhicules immobilisés dans un environnement à risque élevé."),
  q("divers", "Les tarifs du dépannage et du remorquage sur autoroute sont :", [
    { text: "Réglementés et fixés chaque année par arrêté ministériel", correct: true },
    { text: "Librement fixés par chaque entreprise de dépannage", correct: false },
    { text: "Gratuits, pris en charge par l'État", correct: false },
  ], "Cet encadrement tarifaire protège les usagers, captifs du dépanneur agréé de leur secteur, contre d'éventuels abus de prix."),
  q("divers", "Si la réparation d'un véhicule en panne sur autoroute ne peut être réalisée en moins de 30 minutes, celui-ci doit être :", [
    { text: "Évacué vers l'aire la plus proche, l'atelier du dépanneur, ou tout autre lieu demandé par l'usager", correct: true },
    { text: "Laissé sur la bande d'arrêt d'urgence jusqu'à sa réparation complète", correct: false },
    { text: "Abandonné sur place jusqu'au lendemain", correct: false },
  ], "Laisser un véhicule immobilisé trop longtemps sur la bande d'arrêt d'urgence représente un danger majeur, justifiant son évacuation rapide."),
  q("divers", "Avant l'arrivée du dépanneur, le conducteur en panne sur autoroute doit notamment :", [
    { text: "Se mettre en sécurité derrière les glissières, muni de son gilet réfléchissant", correct: true },
    { text: "Rester dans son véhicule immobilisé sur la bande d'arrêt d'urgence", correct: false },
    { text: "Marcher le long de la voie de circulation pour signaler la panne", correct: false },
  ], "Rester dans le véhicule expose fortement aux risques de collision par l'arrière ; se mettre à l'abri derrière les glissières est bien plus sûr."),

  /* ===== VAGUE 57 — frein moteur en descente, sécurité montagne (données précises) ===== */

  q("mecanique", "En longue descente de montagne, maintenir la pédale de frein appuyée en continu risque de provoquer :", [
    { text: "Un phénomène de « vitrification » des plaquettes, réduisant fortement leur efficacité", correct: true },
    { text: "Aucun risque particulier tant que le véhicule est récent", correct: false },
  ], "Ce phénomène de surchauffe rend les plaquettes glissantes, comme du carrelage mouillé, nécessitant parfois leur remplacement complet."),
  q("mecanique", "La technique recommandée pour freiner en longue descente consiste à :", [
    { text: "Freiner par appuis brefs et répétés, en laissant le frein moteur assurer l'essentiel du ralentissement", correct: true },
    { text: "Maintenir une pression constante et légère sur la pédale de frein", correct: false },
  ], "Ce freinage cadencé permet aux freins de refroidir entre chaque sollicitation, évitant ainsi la surchauffe progressive."),
  q("mecanique", "Sur un véhicule à boîte automatique, en descente prolongée de montagne, il est recommandé de :", [
    { text: "Passer en mode manuel et sélectionner un rapport bas pour renforcer le frein moteur", correct: true },
    { text: "Laisser le mode automatique gérer seul les rapports, sans intervention du conducteur", correct: false },
  ], "Le mode automatique standard privilégie souvent des rapports élevés peu adaptés aux longues descentes, sollicitant excessivement les freins."),
  q("mecanique", "Sur un véhicule électrique, le frein moteur classique est remplacé par :", [
    { text: "Le freinage régénératif, qui transforme l'énergie cinétique en électricité rechargeant la batterie", correct: true },
    { text: "Aucun équivalent n'existe sur les véhicules électriques", correct: false },
  ], "Cette technologie offre un ralentissement efficace tout en récupérant de l'énergie, remplaçant avantageusement le frein moteur thermique classique."),
  q("mecanique", "Une fois les freins d'un véhicule victime d'une surchauffe importante, leur pleine efficacité ne revient généralement qu'après :", [
    { text: "5 à 10 minutes de refroidissement", correct: true },
    { text: "Quelques secondes seulement", correct: false },
  ], "Ce délai de récupération souligne l'importance d'anticiper et de prévenir la surchauffe plutôt que d'attendre qu'elle survienne."),

  /* ===== VAGUE 58 — incendie batterie véhicule électrique (données précises) ===== */

  q("secours", "Statistiquement, un véhicule électrique prend feu :", [
    { text: "Moins souvent qu'un véhicule thermique équivalent, malgré une perception inverse très répandue", correct: true },
    { text: "Beaucoup plus fréquemment qu'un véhicule à essence ou diesel", correct: false },
  ], "Plusieurs études européennes convergent : à parc équivalent, les véhicules électriques s'enflamment moins souvent que les véhicules thermiques, malgré une forte médiatisation des cas inverses."),
  q("secours", "En cas de départ de feu suspecté sur un véhicule électrique en roulant (odeur, fumée, voyant batterie), il faut :", [
    { text: "S'arrêter dès que possible en sécurité, couper le contact et évacuer immédiatement à bonne distance", correct: true },
    { text: "Continuer à rouler jusqu'à un garage pour faire vérifier le problème", correct: false },
  ], "Un emballement thermique de batterie peut évoluer très rapidement ; l'évacuation immédiate prime sur toute tentative de rejoindre un lieu de réparation."),
  q("secours", "Face à un début d'incendie sur une batterie lithium-ion, il est recommandé de se tenir à une distance d'au moins :", [
    { text: "15 à 30 mètres selon les sources, et de laisser l'intervention aux secours spécialisés", correct: true },
    { text: "2 mètres suffisent largement", correct: false },
  ], "Ces incendies peuvent générer des gaz toxiques et des projections à très haute température, justifiant une distance de sécurité importante."),
  q("secours", "Éteindre un feu de batterie de véhicule électrique avec un simple extincteur portatif est :", [
    { text: "Généralement inefficace, la quantité d'agent extincteur nécessaire étant bien supérieure", correct: true },
    { text: "Suffisant dans la grande majorité des cas", correct: false },
  ], "La capacité énergétique élevée d'une batterie nécessite des moyens d'extinction bien plus importants que ceux d'un extincteur classique embarqué."),
  q("secours", "Une caractéristique préoccupante des incendies de batteries lithium-ion est leur capacité à :", [
    { text: "Se raviver plusieurs heures, voire plusieurs jours après une extinction apparente", correct: true },
    { text: "S'éteindre définitivement et immédiatement dès la première intervention", correct: false },
  ], "Ce risque de ré-inflammation tardive explique pourquoi les véhicules concernés font souvent l'objet d'une surveillance prolongée après un incendie."),

  /* ===== VAGUE 59 — feux piétons, « petit bonhomme » (données précises) ===== */

  q("usagers", "En France, depuis une réglementation de 1991, le feu piéton vert :", [
    { text: "Passe directement au rouge, sans phase de clignotement intermédiaire", correct: true },
    { text: "Clignote toujours quelques secondes avant de passer au rouge", correct: false },
  ], "Contrairement à l'ancien système, le clignotement du feu vert piéton a été supprimé pour éviter toute ambiguïté sur le moment exact où s'arrêter."),
  q("usagers", "Un automobiliste qui tourne à droite ou à gauche alors que son feu est vert doit, face à des piétons traversant dans la rue qu'il emprunte :", [
    { text: "Leur céder le passage, même si son propre feu est au vert", correct: true },
    { text: "Continuer normalement, son feu vert lui donnant la priorité absolue", correct: false },
  ], "Le feu vert pour aller tout droit n'accorde jamais de priorité sur les piétons engagés dans une rue latérale empruntée en tournant."),
  q("usagers", "Certains feux piétons sont équipés d'un signal sonore émettant un message vocal. Ce dispositif est destiné en priorité :", [
    { text: "Aux personnes malvoyantes ou aveugles", correct: true },
    { text: "Aux enfants en bas âge uniquement", correct: false },
  ], "Ce signal sonore permet à une personne ne pouvant pas voir le feu de connaître le moment approprié pour traverser en toute sécurité."),
  q("usagers", "Un piéton verbalisé pour avoir traversé alors que le feu était vert pour les automobilistes commet une infraction sanctionnée par une amende de :", [
    { text: "4 €", correct: true },
    { text: "135 €, comme un automobiliste", correct: false },
  ], "Cette amende, très symbolique, reste néanmoins applicable : les piétons sont aussi tenus de respecter la signalisation lumineuse qui leur est destinée."),

  /* ===== VAGUE 60 — conduite avec caravane/remorque (données précises) ===== */

  q("securite", "Sur autoroute, un véhicule tractant une caravane ou une remorque est généralement limité à :", [
    { text: "90 km/h", correct: true },
    { text: "130 km/h, comme sans remorque", correct: false },
  ], "Cette limitation, plus restrictive que pour un véhicule seul, tient compte de la stabilité réduite et des distances de freinage allongées de l'attelage."),
  q("securite", "Le phénomène de « mise en lacet » d'une caravane désigne :", [
    { text: "Une oscillation latérale incontrôlée de la remorque, pouvant survenir à vitesse excessive", correct: true },
    { text: "Un simple bruit de vent dans l'attelage sans danger", correct: false },
  ], "Ce phénomène dangereux peut être déclenché par une vitesse trop élevée, un vent latéral fort, ou le souffle d'un poids lourd dépassant."),
  q("securite", "En cas de mise en lacet (louvoiement) d'une caravane en cours de trajet, il faut :", [
    { text: "Ralentir progressivement et freiner par à-coups, sans braquer brusquement", correct: true },
    { text: "Accélérer pour stabiliser l'ensemble par la vitesse", correct: false },
  ], "Accélérer amplifierait le phénomène ; seul un ralentissement progressif et maîtrisé permet de reprendre le contrôle de l'attelage."),
  q("securite", "Des rétroviseurs additionnels sont généralement obligatoires lorsque la caravane ou la remorque tractée dépasse une largeur de :", [
    { text: "2,10 mètres", correct: true },
    { text: "50 centimètres", correct: false },
  ], "Au-delà de cette largeur, les rétroviseurs standards du véhicule tracteur ne suffisent plus à assurer une visibilité arrière satisfaisante."),
  q("securite", "Une caravane ou remorque dont le poids dépasse 750 kg doit généralement être équipée de :", [
    { text: "Son propre système de freinage", correct: true },
    { text: "Aucun système de freinage n'est requis, quel que soit le poids", correct: false },
  ], "Ce système de freinage propre à la remorque permet de ralentir ou stopper l'ensemble en cas de rupture d'attelage, un risque de sécurité majeur."),

  /* ===== VAGUE 61 — usage du klaxon, articles R416-1 à R416-3 (données précises) ===== */

  q("divers", "En agglomération, l'usage de l'avertisseur sonore (klaxon) n'est autorisé qu'en cas de :", [
    { text: "Danger immédiat", correct: true },
    { text: "Simple impatience face à un véhicule qui tarde à démarrer", correct: false },
  ], "L'article R416-1 du code de la route réserve strictement l'usage du klaxon en ville aux situations de danger immédiat, pour limiter la pollution sonore."),
  q("divers", "Hors agglomération, l'usage du klaxon est autorisé pour :", [
    { text: "Donner les avertissements nécessaires aux autres usagers, comme signaler sa présence dans un virage sans visibilité", correct: true },
    { text: "Toute raison, sans restriction particulière", correct: false },
  ], "Contrairement à l'agglomération, le cadre est plus large hors agglomération, mais reste limité aux avertissements réellement utiles aux autres usagers."),
  q("divers", "La nuit, l'usage du klaxon est :", [
    { text: "Limité aux cas de nécessité absolue, l'appel de phares étant privilégié", correct: true },
    { text: "Totalement libre, comme en journée hors agglomération", correct: false },
  ], "L'article R416-2 recommande de privilégier les avertissements lumineux la nuit, pour limiter les nuisances sonores envers les riverains."),
  q("divers", "Klaxonner pour saluer une connaissance ou inciter un véhicule à accélérer est :", [
    { text: "Interdit, quelle que soit l'heure ou la zone de circulation", correct: true },
    { text: "Toléré tant que le coup de klaxon reste bref", correct: false },
  ], "Ces usages, bien que fréquents dans la pratique, ne correspondent à aucune des situations autorisées par le code de la route."),
  q("divers", "Installer sur son véhicule un avertisseur sonore non homologué (sirène, trompe à sons multiples) est :", [
    { text: "Interdit par la réglementation", correct: true },
    { text: "Autorisé tant que le dispositif reste discret", correct: false },
  ], "Seuls les avertisseurs sonores homologués sont autorisés ; les dispositifs pouvant prêter à confusion avec des véhicules prioritaires sont proscrits."),
  q("divers", "Le non-respect des règles d'usage de l'avertisseur sonore constitue une contravention de :", [
    { text: "2e classe", correct: true },
    { text: "5e classe, la plus sévère", correct: false },
  ], "Cette infraction relativement légère reste sanctionnée, même si elle figure parmi les contraventions les moins sévèrement punies du code de la route."),

  /* ===== VAGUE 62 — chargement, galerie de toit, article R312-19 (données précises) ===== */

  q("securite", "L'article R312-19 du code de la route impose que tout chargement soit disposé de façon à :", [
    { text: "Ne jamais constituer une cause de dommage ou de danger pour autrui", correct: true },
    { text: "Ne pas dépasser 10 kg au total, quel que soit le véhicule", correct: false },
  ], "Ce principe général encadre l'ensemble des règles de chargement, quelle que soit sa nature (galerie, coffre, remorque)."),
  q("securite", "Un chargement dépassant à l'arrière du véhicule de plus d'un mètre doit être signalé par :", [
    { text: "Un dispositif homologué réfléchissant, complété de feux la nuit", correct: true },
    { text: "Un simple morceau de tissu de couleur quelconque", correct: false },
  ], "Cette signalisation renforcée devient obligatoire au-delà d'un mètre de dépassement, pour prévenir tout risque de collision par l'arrière."),
  q("securite", "Le dépassement maximal autorisé à l'arrière d'un véhicule pour un chargement est de :", [
    { text: "3 mètres", correct: true },
    { text: "10 mètres, sans limite stricte", correct: false },
  ], "Au-delà de cette limite, le chargement devient excessif et non conforme à la réglementation sur les dimensions autorisées."),
  q("securite", "Un chargement transporté sur une galerie de toit peut, en principe :", [
    { text: "Ne jamais dépasser à l'avant du véhicule", correct: true },
    { text: "Dépasser librement à l'avant comme à l'arrière", correct: false },
  ], "Contrairement à l'arrière où un dépassement encadré est toléré, aucun dépassement n'est autorisé à l'avant, pour préserver la visibilité et la sécurité."),
  q("securite", "Une surcharge du véhicule au-delà de la limite indiquée sur le certificat d'immatriculation (PTAC) est sanctionnée par une contravention de :", [
    { text: "4e classe, pouvant se cumuler par tranche de poids excédentaire", correct: true },
    { text: "1re classe, la plus légère du code de la route", correct: false },
  ], "Cette sanction peut s'alourdir proportionnellement à l'importance du dépassement de charge constaté lors d'un contrôle avec pesage."),
  q("securite", "La largeur totale d'un chargement, coffre de toit inclus, ne doit pas excéder :", [
    { text: "2,55 mètres", correct: true },
    { text: "5 mètres", correct: false },
  ], "Cette limite de largeur, identique à celle du gabarit routier standard, garantit que le véhicule chargé reste compatible avec la circulation normale."),

  /* ===== VAGUE 63 — dashcams/caméras embarquées (données précises 2026) ===== */

  q("divers", "L'utilisation d'une caméra embarquée (dashcam) dans son véhicule en France est :", [
    { text: "Légale, aucune loi n'interdisant spécifiquement ce dispositif", correct: true },
    { text: "Interdite, comme dans certains pays voisins tels que l'Autriche", correct: false },
  ], "Contrairement à certains pays européens très restrictifs sur le sujet, la France autorise l'usage des dashcams sous certaines conditions encadrées."),
  q("divers", "L'usage d'une dashcam en France doit néanmoins respecter :", [
    { text: "Le RGPD et le droit à l'image des personnes filmées", correct: true },
    { text: "Aucune règle particulière, l'enregistrement étant totalement libre", correct: false },
  ], "Dès qu'une caméra capture des visages ou des plaques d'immatriculation identifiables, elle traite des données personnelles soumises au RGPD."),
  q("divers", "Publier sur les réseaux sociaux une vidéo de dashcam montrant des visages ou plaques d'immatriculation non floutés est :", [
    { text: "Une violation potentielle du droit à l'image, exposant à des poursuites", correct: true },
    { text: "Totalement libre, la voie publique n'étant protégée par aucun droit à l'image", correct: false },
  ], "Le floutage des éléments identifiants est indispensable avant toute diffusion publique, pour respecter la vie privée des personnes filmées."),
  q("divers", "Une vidéo issue d'une dashcam peut-elle être utilisée comme preuve devant un tribunal en cas d'accident ?", [
    { text: "Oui, sous réserve de respecter les règles de protection des données", correct: true },
    { text: "Non, ce type d'enregistrement n'est jamais recevable en justice", correct: false },
  ], "Les enregistrements peuvent constituer un élément de preuve utile, à condition d'avoir été obtenus et conservés dans un cadre légal conforme."),
  q("divers", "L'installation d'une dashcam sur le pare-brise ne doit en aucun cas :", [
    { text: "Réduire la visibilité du conducteur ou créer un angle mort dangereux", correct: true },
    { text: "Filmer la route, ce qui reste son unique usage interdit", correct: false },
  ], "Comme tout accessoire fixé à l'intérieur de l'habitacle, la dashcam doit être positionnée sans compromettre la sécurité de conduite."),

  /* ===== VAGUE 64 — suspension administrative vs judiciaire (données précises) ===== */

  q("conducteur", "La suspension administrative du permis de conduire est décidée par :", [
    { text: "Le préfet, à titre de mesure préventive et immédiate", correct: true },
    { text: "Un juge, à l'issue d'un procès", correct: false },
  ], "Cette mesure préventive vise à retirer rapidement le permis d'un conducteur jugé dangereux, sans attendre l'issue d'une procédure judiciaire."),
  q("conducteur", "La durée maximale d'une suspension administrative du permis de conduire est, en règle générale, de :", [
    { text: "6 mois, pouvant exceptionnellement atteindre 1 an", correct: true },
    { text: "5 ans", correct: false },
  ], "Au-delà de cette durée, seule une suspension judiciaire, prononcée par un tribunal, peut prolonger l'interdiction de conduire."),
  q("conducteur", "La suspension judiciaire du permis de conduire, prononcée par un tribunal, peut atteindre une durée maximale de :", [
    { text: "5 ans pour les infractions les plus graves", correct: true },
    { text: "1 mois seulement", correct: false },
  ], "Cette durée bien plus longue que la suspension administrative reflète le caractère de sanction pénale de la décision judiciaire."),
  q("conducteur", "Lorsqu'une suspension judiciaire succède à une suspension administrative pour les mêmes faits, les deux durées :", [
    { text: "Ne se cumulent pas : la période déjà effectuée s'impute sur la sanction judiciaire", correct: true },
    { text: "S'additionnent intégralement, sans aucune déduction", correct: false },
  ], "Ce mécanisme évite une double peine : le temps de suspension administrative déjà subi est déduit de la suspension judiciaire finalement prononcée."),
  q("conducteur", "Depuis juillet 2025, en cas de rétention du permis pour alcool ou stupéfiants, la suspension administrative par le préfet est :", [
    { text: "Une obligation, et non plus une simple faculté laissée à son appréciation", correct: true },
    { text: "Devenue facultative, contrairement à avant 2025", correct: false },
  ], "Cette évolution récente renforce l'automaticité de la réponse administrative face aux infractions les plus graves liées à l'alcool ou aux stupéfiants."),

  /* ===== VAGUE 65 — véhicules agricoles, circulation (données vérifiées) ===== */

  q("usagers", "Les tracteurs agricoles sont interdits de circulation sur :", [
    { text: "Les autoroutes et les voies rapides limitées à 110 km/h ou plus", correct: true },
    { text: "L'ensemble du réseau routier, y compris les routes départementales", correct: false },
  ], "Leur vitesse réduite les rend incompatibles avec les voies conçues pour une circulation rapide, mais ils restent autorisés sur le reste du réseau."),
  q("usagers", "Dans un convoi agricole composé d'un tracteur et d'une remorque, la vitesse maximale autorisée est déterminée par :", [
    { text: "L'élément le plus lent de l'ensemble, tracteur ou remorque", correct: true },
    { text: "Toujours la vitesse maximale du tracteur seul", correct: false },
  ], "Un tracteur homologué plus rapide reste bridé par la vitesse d'homologation de l'outil ou de la remorque qu'il tracte, si celle-ci est inférieure."),
  q("usagers", "Lorsque la largeur d'un convoi agricole dépasse 3,50 mètres, la vitesse maximale autorisée est réduite à :", [
    { text: "25 km/h", correct: true },
    { text: "40 km/h, sans changement", correct: false },
  ], "Cette réduction de vitesse pour les convois larges vise à compenser la difficulté accrue de manœuvre et le risque pour les autres usagers."),
  q("usagers", "Un tracteur laissant des salissures (boue, terre) sur la chaussée doit :", [
    { text: "Signaler et nettoyer la zone concernée pour éviter tout risque d'accident", correct: true },
    { text: "N'a aucune obligation particulière liée à ces salissures", correct: false },
  ], "Les traces de boue peuvent rendre la chaussée glissante ; leur gestion relève de la responsabilité du conducteur du véhicule agricole."),
  q("usagers", "Le panneau A18, apposé à l'arrière d'un véhicule agricole, signale :", [
    { text: "La présence d'un engin agricole lent sur la chaussée", correct: true },
    { text: "Une interdiction de dépassement", correct: false },
  ], "Ce panneau triangulaire spécifique alerte les autres usagers de la présence d'un véhicule lent, les incitant à la prudence avant tout dépassement.", { image: WM("A18") }),

  /* ===== VAGUE 66 — conduite hivernale, neige et verglas (données précises) ===== */

  q("vitesse", "Sur route enneigée, les distances de freinage peuvent être multipliées, par rapport à une route sèche, par environ :", [
    { text: "4, et jusqu'à 10 sur du verglas", correct: true },
    { text: "1,5 seulement, quelle que soit la situation", correct: false },
  ], "Cette augmentation considérable justifie une réduction drastique de la vitesse et un allongement important des distances de sécurité en conditions hivernales."),
  q("mecanique", "Sur route glissante, en cas de véhicule équipé d'ABS, il est recommandé de :", [
    { text: "Freiner fermement et maintenir la pression, le système gérant lui-même l'antiblocage", correct: true },
    { text: "Pomper la pédale de frein par à-coups successifs", correct: false },
  ], "L'ABS moderne module lui-même la pression sur chaque roue ; pomper la pédale, technique d'avant l'ABS, devient inutile voire contre-productive."),
  q("mecanique", "Dans une descente enneigée ou verglacée, la technique recommandée est de :", [
    { text: "Ralentir avant d'entrer dans les virages plutôt que de freiner à l'intérieur de ceux-ci", correct: true },
    { text: "Freiner fortement en plein virage pour contrôler la vitesse", correct: false },
  ], "Freiner en plein virage sur une surface glissante augmente fortement le risque de perte d'adhérence et de sortie de trajectoire."),
  q("mecanique", "Sur neige ou verglas, en cas de patinage des roues au démarrage, il est conseillé de :", [
    { text: "Démarrer en seconde vitesse plutôt qu'en première, pour limiter le couple transmis aux roues", correct: true },
    { text: "Accélérer davantage pour forcer le passage", correct: false },
  ], "Un couple moins important au démarrage réduit le risque de patinage sur une surface à faible adhérence."),
  q("vitesse", "En cas de perte d'adhérence (dérapage) sur route glissante, le réflexe recommandé est de :", [
    { text: "Relâcher l'accélérateur, garder le volant droit et regarder dans la direction souhaitée", correct: true },
    { text: "Freiner immédiatement et fortement, quelle que soit la situation", correct: false },
  ], "Un freinage brutal en situation de perte d'adhérence peut aggraver le dérapage plutôt que le corriger."),

  /* ===== VAGUE 67 — régulateur vs limiteur de vitesse (données précises) ===== */

  q("mecanique", "Le régulateur de vitesse, une fois activé, permet au conducteur de :", [
    { text: "Ne plus actionner l'accélérateur, le véhicule maintenant automatiquement l'allure choisie", correct: true },
    { text: "Garder l'accélérateur actif tout en étant simplement bridé à une vitesse maximale", correct: false },
  ], "Le régulateur prend en charge le maintien de la vitesse, contrairement au limiteur qui laisse le conducteur gérer l'accélérateur sous un plafond fixé."),
  q("mecanique", "Le limiteur de vitesse, contrairement au régulateur, permet au conducteur de :", [
    { text: "Garder le contrôle total de l'accélérateur jusqu'à la vitesse maximale programmée", correct: true },
    { text: "Ne plus toucher l'accélérateur du tout", correct: false },
  ], "Le limiteur agit comme un simple plafond ; le conducteur conserve la maîtrise habituelle de l'accélération en dessous de ce seuil."),
  q("mecanique", "Le limiteur de vitesse est devenu obligatoire sur tous les nouveaux modèles de voitures commercialisés dans l'Union européenne depuis :", [
    { text: "Le 1er juillet 2022", correct: true },
    { text: "1990, comme la ceinture de sécurité", correct: false },
  ], "Cette obligation récente vise à limiter automatiquement les excès de vitesse involontaires, pour renforcer la sécurité routière à l'échelle européenne."),
  q("mecanique", "L'usage du régulateur de vitesse est déconseillé, voire dangereux, sur :", [
    { text: "Une route vallonnée ou en ville, avec de fréquents arrêts et changements d'allure", correct: true },
    { text: "Une autoroute dégagée par beau temps", correct: false },
  ], "Sur une route sinueuse ou en ville, le régulateur peut maintenir une vitesse inadaptée à un virage ou empêcher une réaction rapide, contrairement à l'autoroute où il est bien plus adapté."),
  q("mecanique", "Sur une route vallonnée, l'usage du régulateur de vitesse peut entraîner :", [
    { text: "Une surconsommation de carburant, le système accélérant automatiquement dans chaque montée", correct: true },
    { text: "Systématiquement une économie de carburant, quel que soit le relief", correct: false },
  ], "Pour maintenir l'allure fixée, le régulateur accélère fortement en montée, ce qui peut consommer davantage qu'une conduite manuelle anticipative."),

  /* ===== VAGUE 68 — conduite par forte chaleur, canicule (données précises) ===== */

  q("conducteur", "Par forte chaleur, la Sécurité routière recommande de faire une pause au moins toutes les :", [
    { text: "2 heures, voire davantage selon l'intensité de la chaleur", correct: true },
    { text: "6 heures, la chaleur n'ayant pas d'influence sur ce délai", correct: false },
  ], "La chaleur accentue la fatigue et réduit la vigilance, justifiant des pauses au moins aussi fréquentes qu'en conditions normales, voire plus rapprochées."),
  q("conducteur", "Une légère déshydratation, même sans sensation de soif marquée, peut affecter la conduite d'une façon comparable à :", [
    { text: "Une conduite en dépassant le seuil légal d'alcoolémie autorisé", correct: true },
    { text: "N'a aucun impact mesurable sur la vigilance", correct: false },
  ], "Des études ont montré que la déshydratation légère dégrade les capacités de conduite de façon comparable à l'alcool à un niveau proche du seuil légal."),
  q("conducteur", "Dans un véhicule stationné en plein soleil, la température intérieure peut grimper d'environ 10 à 15°C en :", [
    { text: "10 minutes", correct: true },
    { text: "3 heures", correct: false },
  ], "Cette montée en température extrêmement rapide explique le danger mortel de laisser un enfant ou un animal seul, même brièvement, dans un véhicule au soleil."),
  q("conducteur", "Laisser une vitre entrouverte pour un enfant seul dans une voiture en plein soleil est :", [
    { text: "Insuffisant pour éviter un risque grave de surchauffe", correct: true },
    { text: "Une précaution suffisante pour prévenir tout danger", correct: false },
  ], "Une simple vitre entrouverte ne suffit absolument pas à empêcher la montée rapide et dangereuse de la température intérieure du véhicule."),
  q("mecanique", "En cas de surchauffe moteur persistante en montagne par forte chaleur, il est conseillé de :", [
    { text: "S'arrêter à l'ombre, couper temporairement la climatisation et laisser le moteur tourner au ralenti", correct: true },
    { text: "Couper immédiatement le moteur et ouvrir le bouchon de liquide de refroidissement à chaud", correct: false },
  ], "Ouvrir le bouchon de liquide de refroidissement à chaud est extrêmement dangereux, pouvant provoquer une brûlure grave par projection de vapeur brûlante."),

  /* ===== VAGUE 69 — location entre particuliers, assurance (données précises) ===== */

  q("divers", "Lors d'une location de voiture entre particuliers via une plateforme, le propriétaire du véhicule doit :", [
    { text: "Informer son propre assureur de cette mise en location", correct: true },
    { text: "N'a aucune démarche particulière à effectuer auprès de son assureur", correct: false },
  ], "Cette information permet d'articuler correctement l'assurance personnelle du propriétaire avec celle proposée par la plateforme pendant la durée de la location."),
  q("divers", "Si un locataire est responsable d'un accident avec un véhicule loué via une plateforme entre particuliers, le bonus du propriétaire est en principe :", [
    { text: "Préservé, grâce à l'assurance spécifique proposée par la plateforme", correct: true },
    { text: "Automatiquement pénalisé, comme s'il avait lui-même causé l'accident", correct: false },
  ], "L'assurance dédiée aux plateformes de location entre particuliers protège généralement le coefficient bonus-malus du propriétaire du véhicule."),
  q("divers", "Selon l'article 1242 du code civil, le propriétaire d'un véhicule loué à un particulier reste :", [
    { text: "Civilement responsable des dommages causés par son véhicule, même s'il n'est pas au volant", correct: true },
    { text: "Totalement dégagé de toute responsabilité une fois le véhicule loué", correct: false },
  ], "Cette responsabilité du fait des choses persiste indépendamment de qui conduit effectivement le véhicule au moment des faits."),
  q("divers", "Une assurance temporaire souscrite pour une location entre particuliers sans intermédiaire ne couvre généralement que :", [
    { text: "La responsabilité civile obligatoire, sans les dommages au véhicule loué lui-même", correct: true },
    { text: "L'intégralité des dommages, y compris ceux subis par le véhicule loué", correct: false },
  ], "Contrairement aux plateformes qui incluent souvent une assurance tous risques, une location directe entre particuliers laisse fréquemment les dommages matériels à la charge des parties."),
  q("divers", "Les plateformes de location de voitures entre particuliers exigent généralement du locataire une ancienneté de permis d'au moins :", [
    { text: "2 ans", correct: true },
    { text: "6 mois", correct: false },
  ], "Cette exigence, fréquente sur ces plateformes, vise à limiter le risque associé aux conducteurs les moins expérimentés."),

  /* ===== VAGUE 70 — places de recharge électrique, article R417-10 (données précises) ===== */

  q("divers", "Stationner sur une place équipée d'une borne de recharge sans y brancher son véhicule est sanctionné, selon l'article R417-10, par une amende de :", [
    { text: "35 €", correct: true },
    { text: "750 €", correct: false },
  ], "Cette infraction est assimilée à un stationnement gênant classique, avec le même montant d'amende forfaitaire de 2e classe."),
  q("divers", "L'interdiction de stationner sur une place de recharge sans recharger s'applique :", [
    { text: "À tout véhicule, y compris un véhicule thermique", correct: true },
    { text: "Uniquement aux véhicules électriques mal branchés", correct: false },
  ], "L'article R417-10 vise le stationnement devant ces dispositifs sans distinction de motorisation ; un véhicule thermique garé là est tout autant en infraction."),
  q("divers", "Une fois la recharge de son véhicule électrique terminée, laisser celui-ci occuper la place :", [
    { text: "N'est en principe plus autorisé, la place étant destinée à un usage strictement lié à la recharge active", correct: true },
    { text: "Reste toujours autorisé sans limite de temps", correct: false },
  ], "Ces emplacements ont vocation à tourner rapidement entre utilisateurs ; certaines communes imposent même une durée maximale pour éviter les véhicules ventouses."),
  q("divers", "Le stationnement sur une place de recharge pendant que le véhicule est effectivement en charge est, en principe :", [
    { text: "Gratuit, même en zone de stationnement payant, sauf réglementation locale contraire", correct: true },
    { text: "Toujours payant comme n'importe quelle autre place", correct: false },
  ], "Une décision de la Commission du contentieux du stationnement payant a confirmé ce principe de gratuité pendant la recharge active, sous réserve des règles locales."),
  q("divers", "Depuis le 1er janvier 2025, les nouveaux parkings de plus de 20 places doivent intégrer des places équipées de bornes à hauteur d'au moins :", [
    { text: "5 % du total des places", correct: true },
    { text: "50 % du total des places", correct: false },
  ], "Cette obligation récente accompagne le déploiement progressif des infrastructures de recharge à l'échelle nationale."),

  /* ===== VAGUE 71 — freinage automatique d'urgence AEB, règlement GSR2 (très récent, juillet 2026) ===== */

  q("mecanique", "Le système AEB (freinage automatique d'urgence) intervient lorsque :", [
    { text: "Un risque imminent de collision est détecté et que le conducteur ne réagit pas à l'alerte", correct: true },
    { text: "Le conducteur freine normalement à un feu rouge", correct: false },
  ], "Ce système d'aide à la conduite déclenche un freinage autonome uniquement en situation de danger non traitée par le conducteur, pas lors d'un freinage classique."),
  q("mecanique", "Le règlement européen 2019/2144 a rendu l'AEB obligatoire sur les véhicules neufs (nouvelle immatriculation) en Europe depuis :", [
    { text: "Le 7 juillet 2024", correct: true },
    { text: "2010, dès l'apparition de cette technologie", correct: false },
  ], "Cette obligation, entrée en vigueur pour les nouvelles immatriculations, généralise cette technologie de sécurité active sur l'ensemble du parc neuf européen."),
  q("mecanique", "Depuis le 7 juillet 2026, l'obligation d'AEB s'étend également à la détection :", [
    { text: "Des cyclistes et des piétons, en plus des autres véhicules", correct: true },
    { text: "Des seuls animaux domestiques traversant la route", correct: false },
  ], "Cette extension récente renforce la protection des usagers les plus vulnérables, jusque-là moins bien pris en compte par les premières générations d'AEB."),
  q("mecanique", "L'AEB (Autonomous Emergency Braking) ne doit pas être confondu avec l'AFU (Assistance au Freinage d'Urgence), qui lui :", [
    { text: "Amplifie l'effet du freinage lorsque le conducteur passe précipitamment de l'accélérateur au frein", correct: true },
    { text: "Fait exactement la même chose, ces deux termes étant strictement synonymes", correct: false },
  ], "L'AFU renforce un freinage déjà initié par le conducteur, tandis que l'AEB peut déclencher un freinage de façon totalement autonome, même sans action du conducteur."),
  q("mecanique", "Selon la Commission européenne, la généralisation de l'AEB sur les véhicules neufs pourrait permettre de réduire, chaque année en Europe, le nombre de décès routiers d'environ :", [
    { text: "1 000", correct: true },
    { text: "10", correct: false },
  ], "Cette estimation illustre l'ampleur de l'impact attendu de cette technologie de sécurité active à l'échelle du continent européen."),

  /* ===== VAGUE 72 — voies de détresse, lits d'arrêt d'urgence (données précises) ===== */

  q("signalisation", "Une voie de détresse, ou lit d'arrêt d'urgence, est destinée à :", [
    { text: "Stopper un véhicule dont les freins deviennent défaillants en pleine descente", correct: true },
    { text: "Servir de zone de stationnement de courte durée pour tout usager", correct: false },
  ], "Ces aménagements, situés avant les portions dangereuses de fortes descentes, permettent d'arrêter en urgence un véhicule ayant perdu l'usage de ses freins."),
  q("signalisation", "Le marquage au sol caractéristique d'une voie de détresse est constitué de :", [
    { text: "Un damier rouge et blanc", correct: true },
    { text: "Des hachures jaunes classiques", correct: false },
  ], "Ce marquage spécifique, distinct de la signalisation routière habituelle, permet d'identifier immédiatement l'entrée d'une voie de détresse.", { image: WM("A3a") }),
  q("divers", "Un lit d'arrêt d'urgence stoppe progressivement un véhicule grâce à :", [
    { text: "Une couche de gravier ou de sable dont l'épaisseur augmente progressivement", correct: true },
    { text: "Un mur en béton placé directement à l'entrée", correct: false },
  ], "La résistance croissante du matériau meuble absorbe progressivement l'énergie cinétique du véhicule, évitant un arrêt trop brutal."),
  q("divers", "S'arrêter ou stationner sur une voie de détresse alors qu'on n'a aucun problème de freinage est :", [
    { text: "Formellement interdit, cette voie étant réservée aux situations d'urgence extrême", correct: true },
    { text: "Toléré pour une pause rapide, à condition de repartir vite", correct: false },
  ], "L'usage abusif d'une voie de détresse peut la rendre indisponible ou dangereuse pour un véhicule qui en aurait réellement besoin par la suite."),
  q("divers", "Les voies de détresse sont généralement implantées avant :", [
    { text: "Des points singuliers (virages, tunnels, échangeurs) nécessitant un freinage à l'issue d'une longue descente", correct: true },
    { text: "Chaque entrée d'agglomération, sans lien avec le relief", correct: false },
  ], "Leur emplacement stratégique cible précisément les zones où un défaut de freinage après une longue descente serait le plus dangereux."),

  /* ===== VAGUE 73 — rond-point vs carrefour à sens giratoire, article R415-10 (nuance précise) ===== */

  q("priorites", "Au sens strict du code de la route, un véritable « rond-point » (sans aucune signalisation) applique la règle de :", [
    { text: "La priorité à droite : les véhicules déjà sur l'anneau doivent céder le passage à ceux qui entrent", correct: true },
    { text: "La priorité à l'anneau, comme un carrefour à sens giratoire classique", correct: false },
  ], "C'est l'inverse du fonctionnement habituel : dans un rond-point non signalé, ce sont les véhicules entrants qui sont prioritaires sur ceux déjà engagés."),
  q("priorites", "Un carrefour à sens giratoire, régi par l'article R415-10 du code de la route, se reconnaît à :", [
    { text: "La présence de panneaux « cédez le passage » à chaque entrée de l'anneau", correct: true },
    { text: "L'absence totale de toute signalisation", correct: false },
  ], "Cette signalisation systématique confirme que les véhicules déjà engagés sur l'anneau sont prioritaires, contrairement au rond-point classique."),
  q("priorites", "En pratique, sur le réseau routier français, la très grande majorité des intersections circulaires sont :", [
    { text: "Des carrefours à sens giratoire signalés, et non de véritables ronds-points", correct: true },
    { text: "De véritables ronds-points sans aucune signalisation", correct: false },
  ], "Le terme « rond-point » est utilisé dans le langage courant pour désigner ces intersections, même s'il s'agit techniquement de carrefours à sens giratoire."),
  q("priorites", "Le rond-point de la place de l'Étoile à Paris, autour de l'Arc de Triomphe, est un exemple célèbre de :", [
    { text: "Véritable rond-point, où la priorité est donnée aux véhicules entrants", correct: true },
    { text: "Carrefour à sens giratoire classique", correct: false },
  ], "Ce cas emblématique, non signalé par des panneaux cédez-le-passage, reste l'un des rares vrais ronds-points fonctionnant selon la priorité à droite en France."),
  q("priorites", "Confondre les règles de priorité entre un rond-point et un carrefour à sens giratoire peut :", [
    { text: "Engager la responsabilité du conducteur en cas d'accident", correct: true },
    { text: "N'a jamais de conséquence, les deux fonctionnant en réalité de façon identique", correct: false },
  ], "Cette confusion, fréquente, peut avoir des conséquences juridiques réelles en cas d'accident si la priorité effective n'a pas été respectée."),

  /* ===== VAGUE 74 — véhicules utilitaires légers, ISA (données précises) ===== */

  q("conducteur", "Un véhicule utilitaire léger (VUL), catégorie N1, peut être conduit avec le seul permis B à condition que son PTAC ne dépasse pas :", [
    { text: "3,5 tonnes", correct: true },
    { text: "7,5 tonnes", correct: false },
  ], "Au-delà de ce seuil de 3,5 tonnes, le véhicule bascule dans la catégorie des poids lourds, nécessitant un permis C spécifique."),
  q("conducteur", "Les limitations de vitesse applicables à un utilitaire léger de moins de 3,5 tonnes sont :", [
    { text: "Identiques à celles des véhicules de tourisme classiques", correct: true },
    { text: "Systématiquement réduites de 20 km/h par rapport à une voiture", correct: false },
  ], "Contrairement aux poids lourds soumis à des limitations spécifiques, un utilitaire léger suit exactement les mêmes règles de vitesse qu'une voiture particulière."),
  q("mecanique", "Le système ISA (Intelligent Speed Assistance), obligatoire sur les véhicules neufs depuis juillet 2024, a pour fonction de :", [
    { text: "Avertir le conducteur en cas de dépassement de la vitesse autorisée, sans l'empêcher totalement d'accélérer", correct: true },
    { text: "Bloquer physiquement et définitivement le véhicule au-delà de la vitesse autorisée", correct: false },
  ], "L'ISA alerte et peut réduire légèrement la puissance moteur, mais reste désactivable par le conducteur, contrairement à un blocage strict."),
  q("conducteur", "Pour tracter une remorque avec un utilitaire léger, formant un ensemble dont le PTAC total dépasse 3,5 tonnes sans excéder 4,25 tonnes, il faut :", [
    { text: "La mention additionnelle B96, obtenue après une formation de 7 heures", correct: true },
    { text: "Aucune formation supplémentaire n'est nécessaire", correct: false },
  ], "Cette formation complémentaire, sans nouvel examen théorique ou pratique complet, permet d'étendre les possibilités du permis B pour ce type d'ensemble."),

  /* ===== VAGUE 75 — accident avec ligne électrique (consignes officielles) ===== */

  q("secours", "Si votre véhicule entre en contact avec une ligne électrique tombée au sol ou un câble aérien, il faut :", [
    { text: "Rester à l'intérieur du véhicule et alerter les secours, sauf danger immédiat (incendie)", correct: true },
    { text: "Sortir immédiatement du véhicule en touchant la carrosserie et le sol en même temps", correct: false },
  ], "Le véhicule agit comme une cage protectrice ; en sortir en touchant simultanément carrosserie et sol créerait un passage du courant à travers le corps, avec un risque mortel."),
  q("secours", "Si vous devez absolument évacuer un véhicule en contact avec une ligne électrique, il faut :", [
    { text: "Sauter en dehors sans toucher simultanément le véhicule et le sol, puis s'éloigner à petits pas", correct: true },
    { text: "Descendre normalement puis s'éloigner en courant", correct: false },
  ], "S'éloigner à petits pas limite le risque de tension de pas, un phénomène où une différence de potentiel entre les pieds peut électrocuter une personne près d'un point de contact électrique."),
  q("secours", "Face à une victime en contact avec une ligne électrique, la première action d'un témoin doit être de :", [
    { text: "Ne jamais toucher la victime avant confirmation de la mise hors tension par une personne compétente", correct: true },
    { text: "La dégager immédiatement à mains nues pour la sauver au plus vite", correct: false },
  ], "Toucher une victime encore en contact avec une source électrique expose le sauveteur au même risque mortel d'électrocution."),
  q("secours", "La distance de sécurité minimale à respecter autour d'un câble électrique haute tension tombé au sol est généralement d'au moins :", [
    { text: "3 mètres, en tenant compte des mouvements possibles du câble", correct: true },
    { text: "30 centimètres", correct: false },
  ], "Cette distance de sécurité prend en compte le risque d'amorçage électrique, qui peut survenir même sans contact physique direct avec le câble."),

  /* ===== VAGUE 76 — transport d'animaux, articles R412-1/R412-6 (données précises) ===== */

  q("securite", "Selon l'article R412-6 du code de la route, un animal transporté dans le véhicule ne doit en aucun cas :", [
    { text: "Gêner les mouvements du conducteur ou réduire son champ de vision", correct: true },
    { text: "Peser plus de 10 kilogrammes", correct: false },
  ], "Cette obligation générale de liberté de mouvement du conducteur s'applique à tout objet ou être vivant présent dans l'habitacle, animaux inclus."),
  q("securite", "Conduire avec un chien installé librement sur les genoux du conducteur est :", [
    { text: "Considéré comme une mise en danger, sanctionnée par une amende et un retrait de points", correct: true },
    { text: "Toléré tant que le chien reste calme", correct: false },
  ], "Cette pratique, encore fréquente, entrave directement la conduite et est traitée comme une infraction sérieuse, au même titre qu'un défaut de maîtrise du véhicule."),
  q("securite", "Un chien non attaché peut, lors d'un freinage d'urgence même à faible vitesse, se comporter comme :", [
    { text: "Un projectile exerçant une force démultipliée sur les occupants du véhicule", correct: true },
    { text: "Un simple poids mort sans risque particulier", correct: false },
  ], "L'énergie cinétique d'un animal non attaché se libère brutalement lors d'un choc, pouvant blesser gravement les passagers du véhicule."),
  q("securite", "Pour transporter un animal en toute sécurité, les dispositifs autorisés incluent notamment :", [
    { text: "La caisse de transport fixée, le harnais relié à la ceinture, ou la grille de séparation du coffre", correct: true },
    { text: "Aucun dispositif n'est reconnu, l'animal devant simplement rester calme", correct: false },
  ], "Plusieurs solutions homologuées permettent de sécuriser un animal selon sa taille et le type de trajet effectué."),
  q("securite", "En cas d'accident causé par un animal non sécurisé dans le véhicule, l'assurance auto :", [
    { text: "Peut refuser de couvrir certains dommages, la responsabilité du conducteur étant engagée", correct: true },
    { text: "Prend systématiquement en charge l'intégralité des dommages sans exception", correct: false },
  ], "Certains contrats prévoient des clauses d'exclusion spécifiques en cas d'accident lié à un animal transporté de façon non conforme à la réglementation."),

  /* ===== VAGUE 77 — carte de stationnement handicap, CMI (données 2026) ===== */

  q("divers", "Depuis 2017, l'ancienne carte européenne de stationnement pour personnes handicapées a été remplacée en France par :", [
    { text: "La Carte Mobilité Inclusion (CMI), mention « stationnement »", correct: true },
    { text: "Aucune carte, le dispositif ayant été totalement supprimé", correct: false },
  ], "La CMI regroupe désormais en une seule carte les anciennes cartes d'invalidité, de priorité et de stationnement pour personnes handicapées."),
  q("divers", "La carte de stationnement pour personnes handicapées est attachée :", [
    { text: "À la personne titulaire, et non au véhicule utilisé", correct: true },
    { text: "Au véhicule sur lequel elle est apposée, quel que soit le conducteur", correct: false },
  ], "Cette carte suit son titulaire, qui peut l'utiliser dans n'importe quel véhicule, à condition d'être présent à bord."),
  q("divers", "Utiliser la carte de stationnement handicap d'un proche en son absence est :", [
    { text: "Une infraction sanctionnée par une contravention de 4e classe", correct: true },
    { text: "Parfaitement toléré si le proche est d'accord", correct: false },
  ], "Le bénéfice de cette carte est strictement personnel ; son usage frauduleux en l'absence du titulaire constitue une infraction sanctionnée."),
  q("divers", "Le titulaire d'une carte de stationnement handicap bénéficie généralement de la gratuité du stationnement de surface :", [
    { text: "Sur toutes les places ouvertes au public, pas seulement celles réservées aux personnes handicapées", correct: true },
    { text: "Uniquement sur les places spécifiquement réservées aux personnes handicapées", correct: false },
  ], "Ce droit s'étend à l'ensemble des places de stationnement de surface ouvertes au public, offrant une large liberté de stationnement au titulaire."),
  q("divers", "La carte de stationnement pour personnes handicapées doit être affichée dans le véhicule :", [
    { text: "Derrière le pare-brise avant, bien visible côté trottoir", correct: true },
    { text: "Dans la boîte à gants, à présenter uniquement sur demande", correct: false },
  ], "Cette visibilité permanente permet aux agents de contrôle de vérifier la légitimité du stationnement sans avoir à interroger le conducteur."),

  /* ===== VAGUE 78 — extincteur en voiture (données précises 2026) ===== */

  q("securite", "En France, la présence d'un extincteur dans un véhicule particulier est, à ce jour :", [
    { text: "Non obligatoire, aucune loi ne l'imposant pour les véhicules de particuliers", correct: true },
    { text: "Obligatoire depuis 2020, comme le gilet et le triangle", correct: false },
  ], "Contrairement au gilet de haute visibilité et au triangle, l'extincteur reste facultatif pour les véhicules particuliers en France, malgré des débats récurrents à ce sujet."),
  q("securite", "L'extincteur est en revanche obligatoire en France pour :", [
    { text: "Les véhicules professionnels de transport de personnes ou de marchandises", correct: true },
    { text: "Tous les véhicules sans exception, professionnels ou particuliers", correct: false },
  ], "Cette obligation ne concerne que les flottes professionnelles, contrôlée notamment lors du contrôle technique de ces véhicules."),
  q("securite", "Plusieurs pays voisins ou proches de la France, comme la Pologne ou la Grèce, imposent :", [
    { text: "L'extincteur dans tout véhicule circulant sur leur territoire, y compris étranger", correct: true },
    { text: "Aucune règle différente de la France sur ce sujet", correct: false },
  ], "Ces réglementations nationales plus strictes s'appliquent parfois même aux véhicules immatriculés à l'étranger traversant ou circulant sur leur territoire."),
  q("securite", "L'extincteur à poudre de type ABC, le plus couramment recommandé pour un usage automobile, permet de traiter :", [
    { text: "Les feux de solides, de liquides et de gaz", correct: true },
    { text: "Uniquement les feux électriques", correct: false },
  ], "Cette polyvalence en fait le type d'extincteur le plus adapté à la diversité des départs de feu pouvant survenir sur un véhicule."),

  /* ===== VAGUE 79 — types de stationnement, créneau/épi/bataille (données précises) ===== */

  q("divers", "Le stationnement en bataille désigne un véhicule garé :", [
    { text: "Perpendiculairement à la chaussée, à 90 degrés", correct: true },
    { text: "Parallèlement à la chaussée, dans la longueur", correct: false },
  ], "Ce type de stationnement, fréquent dans les parkings de supermarchés ou en sous-sol, positionne le véhicule à angle droit par rapport à la voie."),
  q("divers", "Le stationnement en épi se caractérise par un véhicule garé selon un angle oblique de :", [
    { text: "45, 60 ou 75 degrés par rapport à la chaussée", correct: true },
    { text: "Exactement 90 degrés, comme en bataille", correct: false },
  ], "Cette inclinaison intermédiaire facilite généralement la manœuvre par rapport au stationnement en bataille, tout en optimisant l'espace disponible."),
  q("divers", "Le stationnement en créneau consiste à garer le véhicule :", [
    { text: "Parallèlement à la chaussée, généralement entre deux autres véhicules", correct: true },
    { text: "En diagonale par rapport au trottoir", correct: false },
  ], "Ce type de stationnement, souvent perçu comme le plus délicat par les nouveaux conducteurs, s'effectue dans le sens de la longueur le long du trottoir."),
  q("divers", "Lors d'un stationnement en bataille, il est généralement recommandé de :", [
    { text: "Se garer en marche arrière, pour une meilleure visibilité au moment de repartir", correct: true },
    { text: "Toujours se garer en marche avant, quelle que soit la configuration", correct: false },
  ], "La marche arrière à l'entrée facilite une sortie plus sûre, en offrant une meilleure visibilité vers l'avant lors du départ."),
  q("divers", "Pendant une manœuvre de stationnement (créneau, épi ou bataille), le conducteur en train de manœuvrer :", [
    { text: "N'est jamais prioritaire et doit céder le passage à tout véhicule ou piéton qui se présente", correct: true },
    { text: "Est prioritaire, les autres usagers devant attendre la fin de sa manœuvre", correct: false },
  ], "Toute manœuvre de stationnement est considérée comme non prioritaire, imposant au conducteur de s'interrompre si un usager se présente."),

  /* ===== VAGUE 80 — frein à main électrique vs mécanique (données précises) ===== */

  q("mecanique", "Le frein à main électrique, contrairement au frein à main manuel, s'actionne :", [
    { text: "Par une simple pression sur un bouton plutôt que par un levier à tirer", correct: true },
    { text: "Exactement de la même façon, seul le nom change", correct: false },
  ], "Cette commande électrique automatise l'action mécanique traditionnellement réalisée manuellement par le conducteur."),
  q("mecanique", "Un arrêté de 1955 impose que tout frein à main électrique soit associé à :", [
    { text: "Un dispositif de secours à action purement mécanique, en cas de défaillance électronique", correct: true },
    { text: "Aucune sécurité complémentaire n'est exigée par la réglementation", correct: false },
  ], "Cette exigence garantit qu'un véhicule puisse toujours être immobilisé, même en cas de panne totale du système électronique."),
  q("mecanique", "Sur de nombreux véhicules récents, le frein à main électrique s'active automatiquement :", [
    { text: "Lorsque le moteur est coupé, sans intervention du conducteur", correct: true },
    { text: "Jamais automatiquement, une action du conducteur restant systématiquement nécessaire", correct: false },
  ], "Cette automatisation réduit le risque d'oubli d'activation du frein de stationnement, un facteur fréquent d'accidents en pente."),
  q("mecanique", "Activer le frein à main électrique en roulant, en cas de défaillance des freins principaux, déclenche généralement :", [
    { text: "Un freinage contrôlé et progressif, sans blocage brutal des roues", correct: true },
    { text: "Un blocage immédiat et total des roues arrière", correct: false },
  ], "Les systèmes électroniques modernes sont conçus pour gérer ce cas d'urgence de façon sécurisée, contrairement à un simple frein à main mécanique tiré brutalement."),

  /* ===== VAGUE 81 — vignette Crit'Air (prix, validité, données 2026) ===== */

  q("environnement", "La vignette Crit'Air doit être obtenue exclusivement via :", [
    { text: "Le site officiel certificat-air.gouv.fr", correct: true },
    { text: "N'importe quel site internet proposant ce service", correct: false },
  ], "De nombreux sites tiers facturent des frais de dossier abusifs pour un service identique à celui, bien moins cher, du site officiel du ministère."),
  q("environnement", "Le prix officiel de la vignette Crit'Air, frais d'envoi inclus, s'élève à environ :", [
    { text: "3,80 €", correct: true },
    { text: "50 €", correct: false },
  ], "Ce tarif unique, fixé par l'État, couvre la fabrication et l'envoi postal du certificat, quelle que soit la classe attribuée au véhicule."),
  q("environnement", "Une fois obtenue, la vignette Crit'Air reste valable :", [
    { text: "Pendant toute la durée de vie du véhicule, tant que l'immatriculation ne change pas", correct: true },
    { text: "Un an seulement, avec renouvellement annuel obligatoire", correct: false },
  ], "Aucun renouvellement périodique n'est nécessaire, contrairement à d'autres documents administratifs liés au véhicule."),
  q("environnement", "Un conducteur étranger souhaitant circuler dans une ZFE française avec son véhicule immatriculé à l'étranger doit :", [
    { text: "Commander une vignette Crit'Air avant d'entrer dans la zone concernée", correct: true },
    { text: "N'a aucune obligation particulière, les véhicules étrangers étant exemptés", correct: false },
  ], "La vignette Crit'Air s'applique à tout véhicule circulant en ZFE, indépendamment de son pays d'immatriculation."),
  q("environnement", "Depuis la loi Climat et Résilience, les agglomérations de plus de 150 000 habitants doivent, en principe :", [
    { text: "Mettre en place une zone à faibles émissions mobilité (ZFE-m)", correct: true },
    { text: "Supprimer toute restriction de circulation liée à la pollution", correct: false },
  ], "Cette obligation légale a conduit à la généralisation progressive des ZFE dans un nombre croissant de grandes agglomérations françaises."),

  /* ===== VAGUE 82 — conduite sans permis, article L221-2 (données précises) ===== */

  q("divers", "Conduire un véhicule sans avoir jamais obtenu le permis correspondant est puni, selon l'article L221-2 du code de la route, au maximum de :", [
    { text: "1 an d'emprisonnement et 15 000 € d'amende", correct: true },
    { text: "1 mois d'emprisonnement et 500 € d'amende", correct: false },
  ], "Cette peine maximale s'applique au conducteur n'ayant jamais été titulaire du permis correspondant à la catégorie du véhicule utilisé."),
  q("divers", "Conduire malgré une suspension, une annulation ou une invalidation du permis est puni au maximum de :", [
    { text: "2 ans d'emprisonnement et 4 500 € d'amende", correct: true },
    { text: "10 ans d'emprisonnement et 100 000 € d'amende", correct: false },
  ], "Cette infraction distincte de la conduite sans permis jamais obtenu vise un conducteur qui possédait un droit de conduire, désormais retiré ou suspendu."),
  q("divers", "Contrairement à l'idée reçue, entre les deux délits de conduite sans droit de conduire, la peine d'emprisonnement la plus longue concerne :", [
    { text: "La conduite malgré suspension (2 ans), bien que l'amende soit plus faible que pour l'absence totale de permis", correct: true },
    { text: "Toujours la conduite sans avoir jamais obtenu le permis, sur les deux critères", correct: false },
  ], "Ce paradoxe apparent s'explique par la gravité particulière de braver une décision judiciaire ou administrative déjà notifiée au conducteur."),
  q("divers", "Depuis les mesures de 2018, la conduite sans permis peut entraîner, dès le contrôle, :", [
    { text: "Une mise en fourrière immédiate du véhicule", correct: true },
    { text: "Uniquement une convocation ultérieure, sans mesure immédiate possible", correct: false },
  ], "Cette possibilité d'immobilisation immédiate a été intégrée aux mesures prises par le Comité interministériel de la sécurité routière de janvier 2018."),
  q("divers", "En cas d'accident causé par un conducteur sans permis, son assurance :", [
    { text: "Refuse en principe de l'indemniser lui-même, tout en pouvant indemniser les victimes tierces via le FGAO", correct: true },
    { text: "L'indemnise normalement comme n'importe quel autre conducteur assuré", correct: false },
  ], "Le Fonds de Garantie des Assurances Obligatoires (FGAO) peut intervenir pour indemniser les victimes, mais se retourne ensuite généralement contre le conducteur fautif."),

  /* ===== VAGUE 83 — contestation d'une amende (délais, données précises) ===== */

  q("divers", "Le délai habituel pour contester une amende forfaitaire (requête en exonération) est de :", [
    { text: "45 jours à compter de la date d'envoi de l'avis de contravention", correct: true },
    { text: "1 an à compter de la date de l'infraction", correct: false },
  ], "Ce délai court dès l'envoi de l'avis, et non à partir de sa réception effective par le contrevenant, un point souvent méconnu."),
  q("divers", "Payer immédiatement une amende alors qu'on souhaitait initialement la contester :", [
    { text: "Vaut reconnaissance de l'infraction et rend toute contestation ultérieure impossible", correct: true },
    { text: "N'a aucune incidence sur la possibilité de contester par la suite", correct: false },
  ], "Le règlement de l'amende équivaut juridiquement à un aveu de l'infraction, fermant définitivement la voie de la contestation."),
  q("divers", "Pour certaines infractions constatées par un dispositif automatisé (radar), contester une amende impose souvent de verser au préalable :", [
    { text: "Une consignation, d'un montant égal à l'amende forfaitaire, distincte du paiement définitif", correct: true },
    { text: "Le double du montant de l'amende initiale", correct: false },
  ], "Cette consignation, restituée en cas de classement de l'infraction, garantit la sérieux de la démarche sans valoir reconnaissance de culpabilité."),
  q("divers", "Un automobiliste peut demander la photographie prise par un radar automatique afin de :", [
    { text: "Vérifier l'identification exacte du véhicule et du conducteur au moment de l'infraction", correct: true },
    { text: "Obtenir automatiquement l'annulation de l'amende", correct: false },
  ], "La consultation de la photographie permet de vérifier des éléments objectifs (plaque, conducteur visible), sans garantir pour autant l'annulation de l'amende."),
  q("divers", "En cas de rejet de sa contestation, un conducteur peut ultimement porter l'affaire devant :", [
    { text: "Le tribunal de police", correct: true },
    { text: "La Cour de cassation directement, sans étape intermédiaire", correct: false },
  ], "Cette juridiction est spécifiquement compétente pour traiter les contestations d'infractions routières classées comme contraventions."),

  /* ===== VAGUE 84 — délit de blessures routières, loi du 9 juillet 2025 (données précises) ===== */

  q("conducteur", "La loi du 9 juillet 2025, qui crée l'homicide routier, institue également un nouveau délit distinct appelé :", [
    { text: "Les blessures routières", correct: true },
    { text: "L'agression routière", correct: false },
  ], "Ce second délit vise les accidents ayant causé des blessures graves, sans entraîner la mort de la victime, dans des circonstances aggravantes comparables."),
  q("conducteur", "Le délit de blessures routières se distingue selon la gravité des séquelles, mesurée par :", [
    { text: "L'incapacité totale de travail (ITT) subie par la victime, supérieure ou inférieure à 3 mois", correct: true },
    { text: "Le nombre de jours d'hospitalisation uniquement", correct: false },
  ], "Cette notion pénale d'ITT, distincte de l'arrêt de travail classique, sert de critère principal pour graduer la gravité de l'infraction."),
  q("conducteur", "En présence d'une seule circonstance aggravante, des blessures routières avec ITT supérieure à 3 mois sont punies au maximum de :", [
    { text: "5 ans d'emprisonnement et 75 000 € d'amende", correct: true },
    { text: "6 mois d'emprisonnement et 1 500 € d'amende", correct: false },
  ], "Cette peine reste inférieure à celle de l'homicide routier, tout en marquant une aggravation significative par rapport aux anciennes blessures involontaires classiques."),
  q("conducteur", "En cas de cumul d'au moins deux circonstances aggravantes, des blessures routières avec ITT supérieure à 3 mois peuvent être punies jusqu'à :", [
    { text: "7 ans d'emprisonnement et 100 000 € d'amende", correct: true },
    { text: "1 an d'emprisonnement et 3 000 € d'amende", correct: false },
  ], "Cette peine maximale se rapproche progressivement de celle prévue pour l'homicide routier simple, reflétant la gravité extrême de ces circonstances cumulées."),
  q("conducteur", "Pour des blessures routières avec une ITT inférieure ou égale à 3 mois, la peine de base (une circonstance aggravante) est de :", [
    { text: "3 ans d'emprisonnement et 45 000 € d'amende", correct: true },
    { text: "10 ans d'emprisonnement et 150 000 € d'amende", correct: false },
  ], "Cette peine, plus légère que pour une ITT longue, reste néanmoins nettement supérieure aux anciennes sanctions pour blessures involontaires simples."),

  /* ===== VAGUE 85 — résiliation assurance auto, loi Hamon (données précises) ===== */

  q("divers", "La loi Hamon permet de résilier son assurance auto à tout moment, sans frais ni justification, à condition que le contrat ait dépassé :", [
    { text: "1 an d'ancienneté", correct: true },
    { text: "5 ans d'ancienneté", correct: false },
  ], "Avant cette échéance d'un an, seuls des motifs légitimes précis (vente du véhicule, changement de situation) permettent de résilier par anticipation."),
  q("divers", "Une fois la demande de résiliation reçue par l'assureur dans le cadre de la loi Hamon, celle-ci prend effet :", [
    { text: "1 mois après cette réception", correct: true },
    { text: "Immédiatement le jour même", correct: false },
  ], "Ce délai d'un mois garantit une continuité de couverture pendant la transition entre l'ancien et le nouveau contrat d'assurance."),
  q("divers", "Dans le cadre d'un changement d'assurance via la loi Hamon, les démarches de résiliation auprès de l'ancien assureur sont effectuées par :", [
    { text: "Le nouvel assureur, qui se charge de notifier l'ancien à la place de l'assuré", correct: true },
    { text: "L'assuré lui-même, qui doit contacter son ancien assureur", correct: false },
  ], "Cette simplification administrative facilite le changement de compagnie, l'assuré n'ayant plus à gérer lui-même la notification de résiliation."),
  q("divers", "Pendant toute la procédure de résiliation et de changement d'assurance via la loi Hamon, le véhicule reste :", [
    { text: "Assuré en permanence, sans interruption de couverture", correct: true },
    { text: "Temporairement sans couverture pendant environ une semaine", correct: false },
  ], "La continuité de la couverture est garantie tout au long du processus, évitant toute période où le véhicule circulerait sans assurance valide."),

  /* ===== VAGUE 86 — radar tourelle (données précises) ===== */

  q("divers", "Le radar tourelle, installé sur un mât d'environ 4 mètres de haut, peut surveiller simultanément jusqu'à :", [
    { text: "32 véhicules", correct: true },
    { text: "2 véhicules seulement", correct: false },
  ], "Cette capacité de surveillance multiple, bien supérieure aux radars classiques, en fait un dispositif particulièrement dissuasif sur les axes à fort trafic."),
  q("divers", "En plus des excès de vitesse, le radar tourelle est théoriquement capable de détecter :", [
    { text: "Le franchissement de feu rouge, le non-respect des distances de sécurité et l'usage indu d'une voie réservée", correct: true },
    { text: "Uniquement les excès de vitesse, comme les radars classiques", correct: false },
  ], "Sa polyvalence technique lui permet, en théorie, de contrôler simultanément plusieurs types d'infractions grâce à la combinaison radar Doppler et caméra haute définition."),
  q("divers", "Le radar tourelle mesure la vitesse des véhicules dans :", [
    { text: "Les deux sens de circulation simultanément", correct: true },
    { text: "Un seul sens, comme la plupart des radars classiques", correct: false },
  ], "Cette capacité bidirectionnelle distingue le radar tourelle de nombreux radars fixes plus anciens, limités à un seul sens de contrôle."),
  q("divers", "Certaines cabines de radar tourelle, sur un même site, sont volontairement laissées vides ou inactives afin de :", [
    { text: "Maintenir un effet dissuasif sur l'ensemble du réseau, malgré un nombre limité de dispositifs réellement actifs", correct: true },
    { text: "Servir uniquement de décoration esthétique au bord des routes", correct: false },
  ], "Cette stratégie permet de faire circuler un dispositif entre plusieurs cabines identiques, renforçant l'incertitude et donc la prudence des conducteurs."),

  /* ===== VAGUE 87 — casque moto, norme ECE 22.06 (données précises) ===== */

  q("securite", "Depuis le 1er juillet 2022, tout nouveau casque moto commercialisé en Europe doit respecter la norme :", [
    { text: "ECE 22.06", correct: true },
    { text: "ECE 22.02", correct: false },
  ], "Cette nouvelle norme, plus exigeante, remplace l'ancienne ECE 22.05 utilisée depuis 2002 pour l'homologation des casques."),
  q("securite", "Un casque homologué selon l'ancienne norme ECE 22.05, déjà en possession d'un motard avant 2022, est :", [
    { text: "Toujours parfaitement légal, tant qu'il reste en bon état", correct: true },
    { text: "Devenu illégal et doit être remplacé immédiatement", correct: false },
  ], "Seuls les nouveaux modèles mis sur le marché doivent respecter la nouvelle norme ; les casques déjà homologués restent valides."),
  q("securite", "L'absence de casque homologué pour un motocycliste est sanctionnée par une amende forfaitaire de 135 € et un retrait de :", [
    { text: "3 points sur le permis de conduire", correct: true },
    { text: "6 points sur le permis de conduire", correct: false },
  ], "Cette sanction s'applique aussi bien au conducteur qu'au passager circulant sans casque homologué correctement attaché."),
  q("securite", "Depuis 2006, en plus d'être homologué, le casque moto doit également être :", [
    { text: "Correctement attaché au niveau de la jugulaire", correct: true },
    { text: "Porté uniquement lors des trajets de plus de 10 km", correct: false },
  ], "Un casque non attaché, même homologué, peut se détacher lors d'un choc et ne remplit alors plus sa fonction protectrice."),
  q("securite", "Chaque casque homologué vendu en France doit porter, en plus de l'étiquette de conformité, des autocollants réfléchissants blancs au nombre de :", [
    { text: "4, positionnés à l'avant, à l'arrière et sur chaque côté", correct: true },
    { text: "Aucun autocollant n'est exigé par la réglementation", correct: false },
  ], "Ces autocollants améliorent la visibilité du motard, particulièrement précieuse de nuit ou par mauvaise visibilité."),

  /* ===== VAGUE 88 — brûlures, premiers secours (données précises) ===== */

  q("secours", "Face à une brûlure, le premier réflexe recommandé est de refroidir la zone touchée avec de l'eau tempérée pendant au moins :", [
    { text: "10 à 15 minutes", correct: true },
    { text: "10 secondes seulement", correct: false },
  ], "Ce refroidissement prolongé limite l'extension de la brûlure en profondeur et atténue significativement la douleur ressentie."),
  q("secours", "La température de l'eau recommandée pour refroidir une brûlure se situe entre :", [
    { text: "15 et 25°C", correct: true },
    { text: "0 et 5°C, de l'eau glacée", correct: false },
  ], "Une eau trop froide ou glacée est déconseillée, car elle peut aggraver la lésion cutanée et provoquer un risque d'hypothermie locale."),
  q("secours", "Une brûlure du premier degré se caractérise par :", [
    { text: "Une peau rouge et douloureuse, sans apparition de cloques", correct: true },
    { text: "Des cloques contenant du liquide clair", correct: false },
  ], "Seul l'épiderme superficiel est touché à ce stade, comme lors d'un coup de soleil typique."),
  q("secours", "Face à des cloques apparues sur une brûlure, il faut :", [
    { text: "Ne jamais les percer soi-même", correct: true },
    { text: "Les percer systématiquement pour évacuer le liquide", correct: false },
  ], "Percer une cloque ouvre une porte d'entrée aux infections et retarde la cicatrisation naturelle de la peau."),
  q("secours", "Face à une brûlure grave ou très étendue, la priorité, en plus du refroidissement, est de :", [
    { text: "Alerter immédiatement les secours", correct: true },
    { text: "Appliquer une pommade grasse avant tout autre geste", correct: false },
  ], "Les brûlures graves nécessitent une prise en charge médicale rapide ; le refroidissement local ne suffit pas à traiter les cas les plus sérieux."),

  /* ===== VAGUE 89 — amende aggravée en zone de travaux, article L121-3 (données précises) ===== */

  q("vitesse", "Depuis 2018, l'article L121-3 du code de la route prévoit qu'un excès de vitesse commis dans une zone de travaux correctement signalée peut voir son amende :", [
    { text: "Portée au tarif supérieur, par exemple de 68 € à 135 €", correct: true },
    { text: "Automatiquement annulée, les zones de travaux étant exemptées de sanction", correct: false },
  ], "Cette aggravation vise à renforcer la protection des ouvriers travaillant à proximité immédiate de la circulation."),
  q("vitesse", "L'aggravation de l'amende en zone de travaux s'applique à condition que :", [
    { text: "La signalisation temporaire de limitation de vitesse soit conforme à la réglementation", correct: true },
    { text: "Des ouvriers soient physiquement présents au moment du contrôle", correct: false },
  ], "La conformité de la signalisation, et non la présence effective d'ouvriers, conditionne l'application de cette aggravation de l'amende."),
  q("vitesse", "Les radars de chantier, aussi appelés radars autonomes, fonctionnent généralement grâce à :", [
    { text: "Une alimentation par batterie et panneaux solaires, sans raccordement électrique fixe", correct: true },
    { text: "Un raccordement permanent au réseau électrique de la zone de chantier", correct: false },
  ], "Cette autonomie énergétique permet de déplacer facilement ces dispositifs d'un chantier à un autre selon les besoins."),
  q("vitesse", "Le franchissement d'une zone de travaux à une vitesse dépassant de 50 km/h ou plus la limite signalée est traité comme :", [
    { text: "Un grand excès de vitesse classique, avec les mêmes sanctions aggravées (délit)", correct: true },
    { text: "Une simple contravention mineure, comme n'importe quel petit excès en zone de travaux", correct: false },
  ], "La qualification de grand excès de vitesse et ses lourdes conséquences s'appliquent indépendamment du fait que l'infraction ait lieu ou non en zone de travaux."),

  /* ===== VAGUE 90 — amende ceinture de sécurité, article R412-1 (données précises 2026) ===== */

  q("securite", "Le non-port de la ceinture par le conducteur est sanctionné par une amende forfaitaire de 135 € et un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "1 point seulement", correct: false },
  ], "Cette sanction s'applique au conducteur lui-même, contrairement au passager qui, s'il est majeur, n'encourt aucun retrait de points."),
  q("securite", "Un passager majeur non attaché est sanctionné par une amende de 135 €, mais :", [
    { text: "Sans aucun retrait de points, la responsabilité étant strictement pécuniaire", correct: true },
    { text: "Avec le même retrait de 3 points que le conducteur", correct: false },
  ], "Cette distinction s'explique par le fait que seul le titulaire du permis peut voir son capital de points affecté par une infraction."),
  q("securite", "Si un passager mineur (moins de 18 ans) circule non attaché, l'amende est à la charge :", [
    { text: "Du conducteur, responsable de la sécurité des mineurs transportés", correct: true },
    { text: "Du mineur lui-même, qui doit régler l'amende personnellement", correct: false },
  ], "Cette responsabilité du conducteur pour les passagers mineurs reflète son devoir de veiller à leur sécurité avant de démarrer le trajet."),
  q("securite", "Depuis 2008, un siège équipé d'une ceinture de sécurité doit être occupé par :", [
    { text: "Une seule personne", correct: true },
    { text: "Jusqu'à deux personnes attachées avec la même ceinture", correct: false },
  ], "Partager une même ceinture entre deux occupants constitue une infraction, la ceinture n'étant conçue et homologuée que pour une seule personne."),

  /* ===== VAGUE 91 — calcul du taux d'alcoolémie, verre standard (données précises) ===== */

  q("conducteur", "Un « verre standard », qu'il s'agisse d'une bière, d'un vin ou d'un spiritueux servi au bon dosage, contient tous une quantité d'alcool pur équivalente d'environ :", [
    { text: "10 grammes", correct: true },
    { text: "50 grammes", correct: false },
  ], "Cette équivalence explique pourquoi un verre de bière et un verre de whisky ont un effet comparable sur l'alcoolémie, malgré des volumes et des degrés très différents."),
  q("conducteur", "En moyenne, le foie élimine l'alcool présent dans le sang à un rythme d'environ :", [
    { text: "0,10 à 0,15 gramme par litre de sang par heure", correct: true },
    { text: "1 gramme par litre de sang par minute", correct: false },
  ], "Cette vitesse d'élimination, physiologiquement fixe, explique pourquoi aucune méthode (café, douche froide) ne peut réellement accélérer le processus."),
  q("conducteur", "Un homme de 75 kg consommant deux verres standards atteint généralement un taux d'alcoolémie proche de :", [
    { text: "0,40 g/L, proche mais encore sous le seuil légal de 0,5 g/L", correct: true },
    { text: "0,05 g/L, très largement sous la limite", correct: false },
  ], "Ce chiffre illustre à quel point le seuil légal peut être franchi rapidement, dès le deuxième ou troisième verre selon la corpulence."),
  q("conducteur", "À consommation égale d'alcool, les femmes atteignent généralement un taux d'alcoolémie :", [
    { text: "Plus élevé que les hommes, du fait d'un coefficient de diffusion corporelle différent", correct: true },
    { text: "Identique aux hommes, le sexe n'ayant aucune influence", correct: false },
  ], "La proportion différente d'eau corporelle entre hommes et femmes modifie la dilution de l'alcool dans le sang, expliquant cet écart."),
  q("conducteur", "Manger en même temps que l'on consomme de l'alcool :", [
    { text: "Ralentit l'absorption mais ne réduit pas la quantité totale d'alcool finalement présente dans le sang", correct: true },
    { text: "Empêche totalement l'alcool de passer dans le sang", correct: false },
  ], "Manger retarde le pic d'alcoolémie sans pour autant diminuer la quantité globale d'alcool absorbée par l'organisme."),

  /* ===== VAGUE 92 — malaise cardiaque, infarctus (données précises) ===== */

  q("secours", "Face à une douleur thoracique intense irradiant vers le bras et la mâchoire, il faut immédiatement :", [
    { text: "Alerter les secours (15 ou 112), sans attendre que la douleur passe d'elle-même", correct: true },
    { text: "Attendre quelques heures pour voir si les symptômes disparaissent naturellement", correct: false },
  ], "Un infarctus est une urgence vitale où chaque minute compte ; retarder l'alerte réduit fortement les chances de survie."),
  q("secours", "En attendant les secours face à une suspicion d'infarctus, la victime consciente doit être installée :", [
    { text: "En position semi-assise, qui soulage le travail du cœur", correct: true },
    { text: "Allongée à plat, jambes surélevées", correct: false },
  ], "Cette position facilite le travail cardiaque et respiratoire, contrairement à une position allongée qui peut aggraver la gêne ressentie."),
  q("secours", "Chez les femmes, les personnes âgées ou diabétiques, les symptômes d'un infarctus peuvent se manifester de façon :", [
    { text: "Moins typique (fatigue, nausées, essoufflement), sans douleur thoracique caractéristique", correct: true },
    { text: "Toujours identique et facilement reconnaissable, sans variation possible", correct: false },
  ], "Cette présentation atypique retarde parfois le diagnostic et l'appel aux secours dans ces populations spécifiques, un point important à connaître."),
  q("secours", "Si une personne victime d'un malaise cardiaque perd connaissance et cesse de respirer normalement, il faut :", [
    { text: "Débuter immédiatement un massage cardiaque et utiliser un défibrillateur si disponible", correct: true },
    { text: "La laisser reposer allongée sans intervenir, en attendant les secours", correct: false },
  ], "L'arrêt de la respiration normale signale un arrêt cardiaque nécessitant une réanimation immédiate, sans attendre l'arrivée des secours."),

  /* ===== VAGUE 93 — ouverture de portière, poignée hollandaise, article R417-7 (données précises) ===== */

  q("usagers", "Selon l'article R417-7 du code de la route, ouvrir la portière d'un véhicule à l'arrêt est interdit lorsque :", [
    { text: "Cette manœuvre constitue un danger pour le conducteur lui-même ou pour d'autres usagers", correct: true },
    { text: "Le véhicule est stationné en dehors des heures de bureau", correct: false },
  ], "Cette obligation générale de prudence s'applique à toute ouverture de portière, quel que soit le côté du véhicule concerné."),
  q("usagers", "Le non-respect de cette obligation de prudence lors de l'ouverture d'une portière constitue une contravention de :", [
    { text: "1re classe", correct: true },
    { text: "5e classe, la plus sévère du code de la route", correct: false },
  ], "Il s'agit de la classe de contravention la plus légère, au même titre que certaines infractions mineures de stationnement."),
  q("usagers", "La technique dite de la « poignée hollandaise », consistant à ouvrir sa portière avec la main opposée, permet de :", [
    { text: "Provoquer naturellement une rotation du buste incitant à vérifier l'angle mort avant d'ouvrir", correct: true },
    { text: "Verrouiller automatiquement la portière pour plus de sécurité", correct: false },
  ], "Ce geste simple, originaire des Pays-Bas, réduit significativement le risque de heurter un cycliste ou un piéton lors de l'ouverture de la portière."),
  q("usagers", "En France, la poignée hollandaise est aujourd'hui :", [
    { text: "Une pratique recommandée par la Sécurité routière, mais non rendue obligatoire par le code de la route", correct: true },
    { text: "Une obligation légale sanctionnée en cas de non-respect", correct: false },
  ], "Contrairement à certaines rumeurs, aucune amende spécifique ne sanctionne le fait de ne pas utiliser cette technique précise ; seule l'obligation générale de prudence (R417-7) reste applicable."),

  /* ===== VAGUE 94 — entorses et fractures, premiers secours (données précises) ===== */

  q("secours", "Face à une suspicion de fracture, le geste essentiel du témoin est de :", [
    { text: "Immobiliser le membre dans la position où il se trouve, sans tenter de le redresser", correct: true },
    { text: "Tenter de remettre l'os dans son axe normal avant l'arrivée des secours", correct: false },
  ], "Toute tentative de manipulation d'un membre fracturé par un témoin non qualifié risque d'aggraver la lésion et les dommages aux tissus environnants."),
  q("secours", "Face à une fracture ouverte, où l'os perce la peau, il faut avant tout :", [
    { text: "Protéger la plaie avec un linge propre, sans exercer de pression directe sur l'os", correct: true },
    { text: "Appuyer fermement directement sur l'os visible pour stopper le saignement", correct: false },
  ], "Une pression directe sur l'os pourrait aggraver la blessure ; seule une protection de la plaie contre l'infection est recommandée en attendant les secours."),
  q("secours", "Face à une entorse simple (foulure), l'application de glace sur la zone blessée permet de :", [
    { text: "Réduire la douleur et l'inflammation", correct: true },
    { text: "Accélérer la guérison de façon définitive en quelques minutes", correct: false },
  ], "Le froid soulage temporairement la douleur et limite le gonflement, sans pour autant remplacer un avis médical si nécessaire."),
  q("secours", "En cas de suspicion de blessure au cou, au dos ou au bassin après un accident, il ne faut :", [
    { text: "Jamais déplacer la victime, sauf danger immédiat mettant sa vie en péril", correct: true },
    { text: "Toujours l'installer en position assise pour plus de confort", correct: false },
  ], "Un déplacement inapproprié en cas de traumatisme du rachis peut aggraver gravement une lésion médullaire potentielle."),

  /* ===== VAGUE 95 — sens interdit, article R412-28 (données précises) ===== */

  q("signalisation", "Selon l'article R412-28 du code de la route, circuler en sens interdit est puni d'une amende de :", [
    { text: "135 € (contravention de 4e classe), avec un retrait de 4 points", correct: true },
    { text: "35 € seulement, sans retrait de points", correct: false },
  ], "Cette infraction est classée parmi les contraventions les plus sévèrement sanctionnées, en raison du risque élevé de collision frontale qu'elle engendre.", { image: WM("B1") }),
  q("divers", "Le non-respect d'un sens interdit peut entraîner, en peine complémentaire, une suspension de permis pouvant aller jusqu'à :", [
    { text: "3 ans", correct: true },
    { text: "1 mois seulement", correct: false },
  ], "Cette peine complémentaire, prévue par l'article R412-28, peut être limitée à la conduite hors activité professionnelle selon la situation du contrevenant."),
  q("divers", "Effectuer une marche arrière dans une rue à sens unique, en remontant à contresens, est :", [
    { text: "Sanctionné exactement comme un franchissement classique de sens interdit", correct: true },
    { text: "Sanctionné plus légèrement, car le véhicule ne roule pas réellement à contresens", correct: false },
  ], "La loi assimile ce comportement à la circulation classique en sens interdit, avec les mêmes sanctions applicables."),
  q("signalisation", "Depuis juin 2015, un nouveau panneau de sens interdit carré sur fond jaune fluo a été créé pour être implanté principalement :", [
    { text: "Sur les bretelles de sortie d'autoroute, pour prévenir les prises à contresens", correct: true },
    { text: "Dans tous les centres-villes de France sans exception", correct: false },
  ], "Ce panneau très visible cible spécifiquement les zones les plus à risque de prise à contresens accidentelle, notamment aux abords des autoroutes."),
  q("usagers", "Un cycliste circulant en sens interdit là où aucune dérogation « sauf vélos » n'est signalée risque une amende de :", [
    { text: "35 € (contravention de 2e classe), une sanction moins sévère que pour un automobiliste", correct: true },
    { text: "Exactement la même amende de 135 € qu'un automobiliste", correct: false },
  ], "Bien que sanctionné moins lourdement financièrement, le cycliste reste en infraction et peut voir sa responsabilité engagée en cas d'accident."),

  /* ===== VAGUE 96 — franchissement de feu rouge, article R412-30 (données précises 2026) ===== */

  q("signalisation", "Selon l'article R412-30 du code de la route, franchir un feu rouge fixe ou clignotant est puni d'une amende forfaitaire de :", [
    { text: "135 € et d'un retrait de 4 points sur le permis", correct: true },
    { text: "35 € sans aucun retrait de points", correct: false },
  ], "Cette contravention de 4e classe figure parmi les infractions les plus lourdement sanctionnées en matière de retrait de points."),
  q("signalisation", "Le franchissement d'un feu rouge peut entraîner, en plus de l'amende et du retrait de points, une suspension de permis pouvant atteindre :", [
    { text: "3 ans, prononcée par le tribunal de police", correct: true },
    { text: "10 ans, automatiquement dès la première infraction", correct: false },
  ], "Cette peine complémentaire reste à l'appréciation du tribunal et ne s'applique pas systématiquement à chaque franchissement constaté."),
  q("signalisation", "Lorsqu'un radar de feu rouge flashe un véhicule, la vitesse éventuellement mesurée au moment du passage :", [
    { text: "N'est pas retenue comme infraction distincte d'excès de vitesse ; seul le franchissement du feu est verbalisé", correct: true },
    { text: "S'ajoute systématiquement à une seconde amende pour excès de vitesse", correct: false },
  ], "Ces radars combinés se concentrent sur l'infraction de franchissement du feu rouge, sans systématiquement verbaliser une éventuelle vitesse excessive au même instant."),
  q("signalisation", "Si un feu tricolore est totalement en panne (éteint) à un carrefour, les règles de priorité qui s'appliquent alors sont :", [
    { text: "La priorité aux piétons puis la priorité à droite, comme en l'absence de toute signalisation lumineuse", correct: true },
    { text: "L'arrêt total obligatoire de tous les véhicules jusqu'au retour du courant", correct: false },
  ], "Un feu éteint équivaut à une absence de signalisation lumineuse, faisant reprendre les règles habituelles de priorité aux usagers."),

  /* ===== VAGUE 97 — non-respect du STOP, article R415-6 (données précises 2026) ===== */

  q("signalisation", "Selon l'article R415-6 du code de la route, le non-respect d'un panneau STOP est sanctionné par une amende de 135 € et un retrait de :", [
    { text: "4 points sur le permis", correct: true },
    { text: "1 point seulement", correct: false },
  ], "Cette infraction est aussi sévèrement sanctionnée qu'un franchissement de feu rouge, en raison du risque élevé de collision qu'elle représente.", { image: WM("AB4") }),
  q("signalisation", "Le comportement consistant à ralentir fortement à un STOP sans jamais s'immobiliser complètement est appelé familièrement :", [
    { text: "Le « stop glissé »", correct: true },
    { text: "Le « stop technique »", correct: false },
  ], "Ce comportement, très fréquent, reste une infraction caractérisée au même titre qu'une absence totale de ralentissement."),
  q("signalisation", "L'infraction au panneau STOP serait impliquée dans environ :", [
    { text: "14 % des décès sur la route", correct: true },
    { text: "Moins de 1 % des décès sur la route", correct: false },
  ], "Ce chiffre illustre l'importance vitale du respect strict de cette signalisation, souvent négligée par excès de confiance ou d'inattention."),
  q("signalisation", "En cas de visibilité totalement nulle à un STOP, un conducteur peut :", [
    { text: "Avancer prudemment après un premier arrêt et marquer un second arrêt avant de s'engager définitivement", correct: true },
    { text: "S'engager directement sans second contrôle après le premier arrêt", correct: false },
  ], "Cette procédure en deux temps permet de vérifier progressivement la situation lorsque la visibilité depuis le point d'arrêt initial est insuffisante."),

  /* ===== VAGUE 98 — franchissement/chevauchement ligne continue, article R412-19 (données précises) ===== */

  q("signalisation", "Selon l'article R412-19 du code de la route, le franchissement complet d'une ligne continue (toutes les roues passent de l'autre côté) entraîne un retrait de :", [
    { text: "3 points sur le permis, en plus de l'amende de 135 €", correct: true },
    { text: "1 point seulement", correct: false },
  ], "Le franchissement complet, plus dangereux qu'un simple chevauchement, est sanctionné plus lourdement en termes de retrait de points."),
  q("signalisation", "Le chevauchement d'une ligne continue, où seule une partie du véhicule empiète sur le marquage sans le franchir totalement, entraîne un retrait de :", [
    { text: "1 point seulement, bien que l'amende reste identique à 135 €", correct: true },
    { text: "3 points, comme pour un franchissement complet", correct: false },
  ], "Cette distinction fine entre chevauchement et franchissement complet, bien que sanctionnée par la même amende, se traduit par un retrait de points différent."),
  q("signalisation", "Le franchissement d'une ligne continue reste toléré dans un cas précis, prévu par la réglementation :", [
    { text: "Pour éviter un obstacle fixe sur la chaussée qui ne peut être écarté immédiatement", correct: true },
    { text: "Chaque fois que le conducteur estime la voie opposée totalement dégagée", correct: false },
  ], "Cette exception légale reste strictement limitée à un danger immédiat sur la chaussée, et non à une simple appréciation de circulation dégagée."),
  q("signalisation", "Une ligne continue de couleur jaune, souvent temporaire lors de travaux, a une valeur réglementaire :", [
    { text: "Identique à celle d'une ligne blanche continue classique", correct: true },
    { text: "Purement indicative, sans caractère obligatoire", correct: false },
  ], "La couleur jaune, utilisée pour le marquage temporaire, ne réduit en rien le caractère obligatoire et sanctionnable du respect de cette ligne."),

  /* ===== VAGUE 99 — plaques d'immatriculation, article R317-8 (données précises) ===== */

  q("divers", "Selon l'article R317-8 du code de la route, rouler avec une plaque d'immatriculation illisible ou non conforme entraîne une amende de 135 € :", [
    { text: "Sans aucun retrait de points sur le permis", correct: true },
    { text: "Avec un retrait de 3 points, comme pour une ligne continue", correct: false },
  ], "Contrairement à de nombreuses infractions liées à la conduite, ce défaut purement administratif n'affecte pas le capital de points du conducteur."),
  q("divers", "L'éclairage de la plaque arrière doit permettre sa lecture, de nuit, à une distance minimale de :", [
    { text: "20 mètres", correct: true },
    { text: "200 mètres", correct: false },
  ], "Cette distance minimale garantit une identification suffisante du véhicule par les autres usagers et les forces de l'ordre, même dans l'obscurité."),
  q("divers", "L'usage d'une fausse plaque d'immatriculation (usurpation du numéro d'un autre véhicule) est un délit passible d'une peine pouvant atteindre :", [
    { text: "5 ans d'emprisonnement et 3 750 € d'amende", correct: true },
    { text: "1 mois d'emprisonnement et 150 € d'amende", correct: false },
  ], "Cette infraction bien plus grave qu'une simple plaque illisible constitue un délit intentionnel, jugé par un tribunal correctionnel."),
  q("divers", "En cas d'usurpation avérée de plaque d'immatriculation, la peine complémentaire de retrait de points s'élève à :", [
    { text: "6 points", correct: true },
    { text: "Aucun retrait de points n'est prévu, seule une amende étant applicable", correct: false },
  ], "Ce retrait maximal, associé à une possible suspension de permis de 3 ans, souligne la gravité pénale de l'usurpation par rapport à une simple non-conformité administrative."),

  /* ===== VAGUE 100 — refus de priorité à droite, article R415-5 (données précises) ===== */

  q("priorites", "Selon l'article R415-5 du code de la route, le refus de priorité à droite est sanctionné par une amende de 135 € et un retrait de :", [
    { text: "4 points sur le permis de conduire", correct: true },
    { text: "1 point seulement", correct: false },
  ], "Cette contravention de 4e classe, très fréquemment commise, reste l'une des infractions de priorité les plus sévèrement sanctionnées en points."),
  q("priorites", "La règle de la priorité à droite existe en France, sous une forme proche de celle d'aujourd'hui, depuis :", [
    { text: "1927", correct: true },
    { text: "1990", correct: false },
  ], "Cette ancienneté explique pourquoi la priorité à droite reste le principe fondamental et historique de toute intersection non signalée en France."),
  q("priorites", "Selon l'article R415-12 du code de la route, refuser la priorité à un véhicule d'intérêt général annonçant son approche par ses avertisseurs spéciaux entraîne :", [
    { text: "Les mêmes sanctions qu'un refus de priorité à droite classique (135 €, 4 points)", correct: true },
    { text: "Une sanction bien plus légère, réduite à une simple amende de 11 €", correct: false },
  ], "Refuser de céder le passage à un véhicule prioritaire en intervention est traité avec la même sévérité qu'un refus de priorité classique à une intersection."),
  q("priorites", "En cas d'accident consécutif à un refus de priorité à droite non signalée, la responsabilité incombe généralement :", [
    { text: "Au conducteur qui a refusé la priorité, sauf circonstances particulières démontrées", correct: true },
    { text: "Toujours au conducteur venant de droite, quelle que soit la situation", correct: false },
  ], "Le principe général veut que le conducteur qui aurait dû céder le passage soit reconnu responsable de la collision qui en résulte."),

  /* ===== VAGUE 101 — oubli de clignotant, article R412-10 (données précises) ===== */

  q("divers", "Selon l'article R412-10 du code de la route, changer de direction sans utiliser son clignotant est sanctionné par une amende de 35 € et un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "6 points, comme un franchissement de feu rouge", correct: false },
  ], "Bien que financièrement moins lourde que d'autres infractions, cette contravention de 2e classe reste assortie d'un retrait de points non négligeable."),
  q("divers", "Selon une étude citée sur ce sujet, environ 50 % des conducteurs français reconnaissent :", [
    { text: "Oublier fréquemment d'actionner leur clignotant lors d'un changement de direction", correct: true },
    { text: "Utiliser systématiquement leur clignotant sans jamais l'oublier", correct: false },
  ], "Ce chiffre illustre à quel point cette infraction, pourtant simple à éviter, reste extrêmement répandue sur le réseau routier français."),
  q("divers", "L'usage du clignotant est légalement requis notamment :", [
    { text: "Pour reprendre sa place dans la circulation après un arrêt ou un stationnement", correct: true },
    { text: "Uniquement pour tourner à une intersection classique", correct: false },
  ], "L'article R412-10 couvre un champ large de manœuvres, incluant le redémarrage après un stationnement, pas seulement les changements de direction aux carrefours."),
  q("divers", "Un clignotant défectueux ou non conforme (et non simplement oublié) relève d'une infraction distincte, sanctionnée par une amende de :", [
    { text: "68 €, contravention de 3e classe", correct: true },
    { text: "35 € exactement, comme un oubli simple de clignotant", correct: false },
  ], "Cette infraction technique, liée à l'état du véhicule et non au comportement du conducteur, est traitée par un article distinct (R313-14) avec un montant différent."),

  /* ===== VAGUE 102 — bande d'arrêt d'urgence, articles R412-8/R421-7 (données précises) ===== */

  q("divers", "Selon l'article R412-8 du code de la route, circuler sur la bande d'arrêt d'urgence (sans y être immobilisé) est puni d'une amende de 135 € et d'un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "Aucun point, seule une amende étant prévue", correct: false },
  ], "Cette infraction, contravention de 4e classe, sanctionne le fait de rouler sur cette bande pour, par exemple, doubler un bouchon, un comportement particulièrement dangereux."),
  q("divers", "S'arrêter ou stationner sans nécessité absolue sur la bande d'arrêt d'urgence relève d'un article distinct de la circulation proprement dite, sanctionné par une amende de :", [
    { text: "35 €, sans retrait de points", correct: true },
    { text: "135 € avec un retrait de 3 points, comme la circulation", correct: false },
  ], "Cette distinction entre rouler sur la BAU (135€, 3 points) et s'y arrêter sans raison valable (35€, sans point) est souvent méconnue des conducteurs."),
  q("divers", "La bande d'arrêt d'urgence, en plus de son usage pour les pannes et accidents, sert également de voie de passage prioritaire :", [
    { text: "Aux véhicules de secours (pompiers, SAMU, police) en intervention", correct: true },
    { text: "À tout véhicule souhaitant doubler en cas de fort trafic", correct: false },
  ], "Cette fonction de couloir d'urgence pour les secours justifie l'interdiction stricte faite aux autres usagers d'y circuler en dehors d'une nécessité absolue."),

  /* ===== VAGUE 103 — barème complet excès de vitesse par tranche (données précises 2026) ===== */

  q("vitesse", "Un excès de vitesse compris entre 20 et 29 km/h entraîne un retrait de :", [
    { text: "2 points sur le permis", correct: true },
    { text: "4 points sur le permis", correct: false },
  ], "Le barème par tranche progresse par palier : 1 point de 5 à 19 km/h, 2 points de 20 à 29 km/h, et ainsi de suite jusqu'au seuil du délit."),
  q("vitesse", "Un excès de vitesse compris entre 30 et 39 km/h entraîne un retrait de 3 points, avec en plus une possibilité de :", [
    { text: "Suspension du permis pouvant atteindre 3 ans", correct: true },
    { text: "Confiscation immédiate et automatique du véhicule", correct: false },
  ], "La confiscation automatique du véhicule ne devient une réalité qu'à partir du seuil de délit (50 km/h ou plus), pas dès cette tranche intermédiaire."),
  q("vitesse", "Un excès de vitesse compris entre 40 et 49 km/h entraîne un retrait de 4 points, et peut également déclencher :", [
    { text: "Une rétention immédiate du permis sur place par les forces de l'ordre", correct: true },
    { text: "Une peine de prison automatique, quelle que soit la situation", correct: false },
  ], "À partir de ce seuil de 40 km/h, les forces de l'ordre peuvent retenir immédiatement le permis, avant même toute décision judiciaire ou administrative de suspension."),
  q("vitesse", "Depuis le 29 décembre 2025, un excès de vitesse égal ou supérieur à 50 km/h entraîne un retrait de 6 points et constitue :", [
    { text: "Un délit, jugé par le tribunal correctionnel", correct: true },
    { text: "Une simple contravention de 5e classe, comme auparavant", correct: false },
  ], "Ce seuil marque le passage d'une simple contravention à un délit pénal à part entière, avec des conséquences juridiques bien plus lourdes."),
  q("vitesse", "Le retrait de points pour un excès de vitesse dépend notamment de :", [
    { text: "L'ampleur du dépassement en km/h, selon un barème progressif par tranche", correct: true },
    { text: "Uniquement de la marque et du modèle du véhicule conduit", correct: false },
  ], "Le barème est structuré exclusivement autour de l'écart de vitesse constaté, sans tenir compte de caractéristiques du véhicule."),

  /* ===== VAGUE 104 — dépassement dangereux, manœuvre acrobatique (données précises) ===== */

  q("divers", "Selon l'article R414-4 du code de la route, un dépassement dangereux est sanctionné par une amende de 135 € et un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "1 point seulement", correct: false },
  ], "Cette contravention de 4e classe couvre plusieurs situations : dépassement sans déport suffisant, visibilité insuffisante, ou rabattement trop rapide (« queue de poisson »)."),
  q("divers", "Le fait de se rabattre trop rapidement après un dépassement, provoquant une gêne pour le véhicule dépassé, est communément appelé :", [
    { text: "Une « queue de poisson »", correct: true },
    { text: "Un « stop glissé »", correct: false },
  ], "Cette expression familière désigne un comportement dangereux, sanctionné au même titre que les autres formes de dépassement dangereux."),
  q("divers", "Un dépassement causant un accident au niveau d'un passage à niveau peut voir sa sanction aggravée jusqu'à :", [
    { text: "Un retrait de 6 points et une suspension de permis de 3 ans", correct: true },
    { text: "Aucune aggravation particulière par rapport à un dépassement dangereux classique", correct: false },
  ], "La combinaison d'un dépassement dangereux avec un accident dans une zone particulièrement à risque entraîne une sanction nettement renforcée."),
  q("divers", "Depuis juin 2024, la « manœuvre acrobatique » (comme rouler sur une seule roue ou en zigzaguant dangereusement) est une infraction spécifique sanctionnée par :", [
    { text: "Une amende de 68 € et un retrait de 2 points", correct: true },
    { text: "Une amende de 1 500 € et un retrait de 6 points", correct: false },
  ], "Cette infraction récente, prévue par l'article R412-6-4, cible spécifiquement les comportements acrobatiques et exhibitionnistes au volant, distincts du délit de rodéo urbain."),

  /* ===== VAGUE 105 — distance de sécurité poids lourds, article R412-12-II (données précises) ===== */

  q("usagers", "Selon l'article R412-12 du code de la route, hors agglomération, deux poids lourds de plus de 3,5 tonnes se suivant à la même vitesse doivent respecter une distance de sécurité d'au moins :", [
    { text: "50 mètres", correct: true },
    { text: "2 mètres", correct: false },
  ], "Cette distance minimale fixe, bien supérieure à la règle des deux secondes appliquée aux véhicules légers, limite le risque de collision en chaîne entre poids lourds."),
  q("usagers", "Cette distance minimale de 50 mètres entre poids lourds s'applique également aux véhicules dont la longueur dépasse :", [
    { text: "7 mètres", correct: true },
    { text: "20 mètres", correct: false },
  ], "Le critère de longueur, en plus du critère de poids, permet d'englober également certains ensembles routiers longs mais relativement légers."),
  q("usagers", "L'exception à cette règle des 50 mètres concerne notamment :", [
    { text: "Les convois militaires et les véhicules des formations de sécurité civile", correct: true },
    { text: "Les véhicules de tourisme tractant une caravane", correct: false },
  ], "Ces exceptions reconnaissent les besoins opérationnels spécifiques de ces convois particuliers, soumis à leurs propres règles de circulation."),
  q("divers", "Selon la Cour de cassation, l'élément déterminant pour caractériser une infraction de non-respect des distances de sécurité (article R412-12) est :", [
    { text: "La distance elle-même entre les véhicules, indépendamment de leur vitesse exacte", correct: true },
    { text: "Uniquement la vitesse des deux véhicules concernés", correct: false },
  ], "La jurisprudence a précisé que ce n'est pas la vitesse en elle-même qui constitue l'infraction, mais bien l'insuffisance de la distance effectivement observée entre les véhicules."),

  /* ===== VAGUE 106 — pneus lisses, article R314-1 (données précises) ===== */

  q("mecanique", "Selon l'article R314-1 du code de la route, un pneu est considéré comme lisse lorsque la profondeur de ses sculptures descend en dessous de :", [
    { text: "1,6 mm", correct: true },
    { text: "5 mm", correct: false },
  ], "Ce seuil légal minimal garantit une évacuation suffisante de l'eau sous le pneu pour préserver l'adhérence, notamment sur chaussée mouillée."),
  q("mecanique", "Rouler avec des pneus lisses est sanctionné par une amende de 135 €, mais cette infraction :", [
    { text: "N'entraîne aucun retrait de points sur le permis de conduire", correct: true },
    { text: "Entraîne un retrait de 3 points, comme un défaut de distance de sécurité", correct: false },
  ], "Contrairement à de nombreuses infractions liées au comportement de conduite, ce défaut d'entretien du véhicule ne pénalise pas le capital de points du conducteur."),
  q("mecanique", "Une astuce simple pour vérifier la profondeur des sculptures d'un pneu consiste à insérer :", [
    { text: "Une pièce de 1 euro dans une rainure : si le bord doré reste visible, le pneu est sous la limite légale", correct: true },
    { text: "Une carte bancaire dans le sens de la largeur du pneu", correct: false },
  ], "Ce test simple et accessible à tous permet une estimation rapide de l'usure sans nécessiter d'outil professionnel spécifique."),
  q("mecanique", "Avec des pneus lisses, le risque d'aquaplaning peut survenir dès une vitesse d'environ :", [
    { text: "60 km/h, contre 80-90 km/h avec des pneus en bon état", correct: true },
    { text: "150 km/h, quel que soit l'état du pneu", correct: false },
  ], "Cette différence de seuil illustre concrètement l'impact majeur de l'état des pneus sur la sécurité, particulièrement en cas de pluie."),

  /* ===== VAGUE 107 — défaut d'éclairage, distinction absence totale vs panne (données précises) ===== */

  q("mecanique", "Circuler de nuit sans aucun éclairage dans un lieu dépourvu d'éclairage public est sanctionné par une amende de 135 € et un retrait de :", [
    { text: "4 points sur le permis, avec suspension possible jusqu'à 3 ans", correct: true },
    { text: "Aucun point, seule une amende étant prévue", correct: false },
  ], "Cette absence totale d'éclairage, bien plus grave qu'une simple ampoule grillée, est sanctionnée comme une infraction sérieuse mettant en danger la sécurité de tous."),
  q("mecanique", "Une simple panne d'une ampoule (feu de croisement, position ou stop) alors que le reste de l'éclairage fonctionne est sanctionnée par une amende de 68 €, mais cette infraction :", [
    { text: "N'entraîne aucun retrait de points ni suspension de permis", correct: true },
    { text: "Entraîne les mêmes 4 points que l'absence totale d'éclairage", correct: false },
  ], "Cette distinction reflète la différence de gravité entre un véhicule totalement invisible de nuit et un véhicule partiellement éclairé malgré une panne ponctuelle."),
  q("mecanique", "L'oubli d'allumer ses feux de croisement en conditions requises (nuit, brouillard, forte pluie), alors que le matériel fonctionne parfaitement, est sanctionné par :", [
    { text: "135 € d'amende et un retrait de 4 points", correct: true },
    { text: "68 € d'amende sans retrait de points", correct: false },
  ], "Ce comportement, bien que le matériel d'éclairage soit en parfait état de marche, est traité aussi sévèrement qu'une absence complète d'éclairage."),
  q("mecanique", "Contrairement à une idée reçue, avoir une boîte d'ampoules de rechange dans son véhicule est :", [
    { text: "Une simple recommandation, non une obligation légale inscrite au code de la route", correct: true },
    { text: "Une obligation légale, au même titre que le gilet et le triangle", correct: false },
  ], "Contrairement au gilet et au triangle, aucune disposition n'impose formellement la présence d'ampoules de rechange dans le véhicule."),

  /* ===== VAGUE 108 — casque vélo enfants, article R431-1-3 (données précises) ===== */

  q("usagers", "Depuis le 22 mars 2017, le port du casque à vélo est obligatoire en France pour :", [
    { text: "Tout enfant de moins de 12 ans, conducteur ou passager", correct: true },
    { text: "Tous les cyclistes sans exception, quel que soit leur âge", correct: false },
  ], "L'article R431-1-3 du code de la route cible spécifiquement les enfants, les adultes restant libres de porter ou non un casque à vélo classique."),
  q("usagers", "En cas de non-port du casque par un enfant de moins de 12 ans à vélo, l'amende de 135 € est adressée :", [
    { text: "À l'adulte qui accompagne ou transporte l'enfant, jamais à l'enfant lui-même", correct: true },
    { text: "Directement à l'enfant concerné", correct: false },
  ], "La loi considère que la responsabilité de veiller au respect de cette obligation incombe entièrement à l'adulte accompagnant."),
  q("usagers", "L'obligation du port du casque pour les enfants de moins de 12 ans s'applique également :", [
    { text: "Lorsqu'ils sont transportés dans un siège enfant ou une remorque de vélo", correct: true },
    { text: "Uniquement lorsqu'ils pédalent eux-mêmes sur leur propre vélo", correct: false },
  ], "Que l'enfant soit conducteur, passager assis ou transporté dans une remorque, la même obligation de port du casque s'applique."),
  q("usagers", "Un casque de vélo pour enfant non attaché correctement, même s'il est porté, est considéré comme :", [
    { text: "Équivalent à une absence de casque, exposant à la même sanction", correct: true },
    { text: "Parfaitement conforme, seule la présence physique du casque comptant", correct: false },
  ], "Un casque non attaché peut se détacher lors d'une chute et ne remplit alors plus sa fonction protectrice, justifiant qu'il soit assimilé à une absence de casque."),

  /* ===== VAGUE 109 — infractions à vélo, retrait de points (données vérifiées) ===== */

  q("usagers", "Une infraction commise par un cycliste (feu rouge grillé, trottoir, sens interdit) entraîne, contrairement à un automobiliste :", [
    { text: "Une amende, mais jamais de retrait de points sur le permis de conduire", correct: true },
    { text: "Exactement le même retrait de points qu'un automobiliste", correct: false },
  ], "Le retrait de points ne s'applique qu'aux infractions commises avec un véhicule nécessitant un permis, ce qui exclut le vélo classique."),
  q("usagers", "Un cycliste tenant son vélo à la main, sans être dessus, sur un trottoir est considéré comme :", [
    { text: "Un piéton, autorisé à utiliser le trottoir sans infraction", correct: true },
    { text: "Toujours un cycliste en infraction sur le trottoir", correct: false },
  ], "Dès lors qu'il descend de son vélo et le pousse à pied, le cycliste change de statut juridique et devient assimilé à un piéton."),
  q("usagers", "Malgré une infraction commise à vélo, un juge peut néanmoins prononcer une suspension du permis de conduire de l'usager dans le cas :", [
    { text: "D'une infraction très grave, comme une conduite en état d'ivresse manifeste", correct: true },
    { text: "D'aucun cas, le vélo n'ayant jamais d'impact sur le permis de conduire", correct: false },
  ], "Dans les cas les plus graves, un juge conserve le pouvoir de suspendre le permis de conduire, même si l'infraction n'a pas été commise avec un véhicule à moteur."),
  q("usagers", "En 2024, selon le bilan de l'Observatoire national interministériel de la sécurité routière, dans la majorité des collisions mortelles impliquant un cycliste :", [
    { text: "Ce dernier n'était pas présumé responsable de l'accident", correct: true },
    { text: "Le cycliste était presque toujours identifié comme responsable", correct: false },
  ], "Ce constat statistique nuance l'idée répandue selon laquelle les cyclistes seraient les principaux responsables des accidents qui les impliquent."),

  /* ===== VAGUE 110 — loi LOM, stationnement passages piétons (données très actuelles 2026) ===== */

  q("divers", "La loi d'orientation des mobilités (LOM), promulguée en décembre 2019, impose aux communes de supprimer, avant fin 2026, toutes les places de stationnement motorisé situées :", [
    { text: "À moins de 5 mètres en amont de chaque passage piéton", correct: true },
    { text: "Dans un rayon de 500 mètres autour de chaque passage piéton", correct: false },
  ], "Cette obligation nationale vise à améliorer la visibilité mutuelle entre conducteurs et piétons juste avant les zones de traversée."),
  q("divers", "Se garer dans cette nouvelle zone de 5 mètres avant un passage piéton, une fois les emplacements officiellement neutralisés, constitue :", [
    { text: "Un stationnement très gênant, sanctionné par une amende de 135 €", correct: true },
    { text: "Un simple stationnement gênant classique à 35 €", correct: false },
  ], "Cette requalification en stationnement très gênant, plus sévèrement sanctionnée, accompagne la mise en œuvre de cette réforme de sécurité routière."),
  q("divers", "Les emplacements neutralisés dans la zone des 5 mètres avant un passage piéton sont généralement réaffectés :", [
    { text: "Aux vélos et aux engins de déplacement personnel", correct: true },
    { text: "Ils restent définitivement vides et inutilisables par quiconque", correct: false },
  ], "Ces espaces libérés sont souvent réaménagés pour d'autres usages compatibles avec la sécurité, plutôt que laissés totalement inutilisés."),
  q("divers", "Selon le bilan provisoire 2025 de l'ONISR, le nombre de piétons tués sur les routes de France s'élève à environ :", [
    { text: "451", correct: true },
    { text: "45", correct: false },
  ], "Ce chiffre, publié début 2026, illustre l'importance persistante de la sécurité des piétons parmi les priorités de la politique de sécurité routière."),

  /* ===== VAGUE 111 — mention "01" lunettes correctrices (données précises) ===== */

  q("conducteur", "En France, l'acuité visuelle minimale exigée pour obtenir le permis de conduire est de :", [
    { text: "5/10e sur l'ensemble des deux yeux", correct: true },
    { text: "10/10e sur chaque œil pris individuellement", correct: false },
  ], "Ce seuil, vérifié lors du passage du permis, détermine si le futur conducteur doit porter un dispositif de correction visuelle pour conduire légalement."),
  q("conducteur", "La mention imposant le port de lunettes ou de lentilles sur le permis de conduire est identifiée par le code :", [
    { text: "01", correct: true },
    { text: "99", correct: false },
  ], "Ce code, apposé au verso du permis format carte, précise l'obligation de correction visuelle du titulaire."),
  q("conducteur", "Conduire sans lunettes malgré la mention « 01 » sur son permis expose à une amende de 135 € et un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "Aucun point, seule une amende étant prévue", correct: false },
  ], "Cette infraction, bien que peu connue, est traitée avec la même sévérité que de nombreuses infractions liées à la sécurité de conduite."),
  q("conducteur", "Un conducteur ayant subi une opération corrigeant définitivement sa vue (myopie, cataracte) doit :", [
    { text: "Faire modifier la mention sur son permis auprès de la préfecture", correct: true },
    { text: "N'a aucune démarche à effectuer, le permis restant valable tel quel", correct: false },
  ], "Tant que la mention n'est pas officiellement supprimée, le conducteur reste légalement tenu de porter ses lunettes ou lentilles, même si elles ne sont plus médicalement nécessaires."),
  q("conducteur", "Depuis l'abrogation de l'arrêté de 1988 par celui de 1997, un porteur de lentilles de contact :", [
    { text: "N'est plus obligé d'avoir également une paire de lunettes de secours dans son véhicule", correct: true },
    { text: "Doit toujours obligatoirement disposer d'une paire de lunettes en plus de ses lentilles", correct: false },
  ], "Cette ancienne obligation de disposer d'une correction de secours a été supprimée, simplifiant les obligations des porteurs de lentilles."),

  /* ===== VAGUE 112 — surnombre de passagers, article R412-1-1 (données précises) ===== */

  q("securite", "Depuis un décret de septembre 2018, transporter plus de passagers que le nombre de places assises indiqué sur la carte grise constitue :", [
    { text: "Une infraction spécifique, sanctionnée par une amende de 135 € par passager en surnombre", correct: true },
    { text: "Une pratique tolérée tant que chacun porte sa ceinture", correct: false },
  ], "Avant ce décret, seul le défaut de port de la ceinture des passagers en surnombre était sanctionné ; le surnombre lui-même est désormais une infraction autonome."),
  q("securite", "Lorsque l'infraction de surnombre de passagers est commise, le conducteur encourt, en plus de l'amende, un retrait de :", [
    { text: "3 points sur son permis de conduire", correct: true },
    { text: "Aucun point, seuls les passagers étant sanctionnés", correct: false },
  ], "Le conducteur, responsable de la sécurité à bord de son véhicule, est spécifiquement pénalisé sur son permis pour cette infraction."),
  q("securite", "Le nombre maximal de places autorisées dans un véhicule est indiqué sur la carte grise au repère :", [
    { text: "S.1", correct: true },
    { text: "P.3", correct: false },
  ], "Ce repère précis permet de vérifier facilement le nombre de places assises homologuées pour le véhicule concerné."),
  q("securite", "Transporter un enfant en surnombre, en plus de l'infraction pour le nombre de places, peut également entraîner une amende pour :", [
    { text: "Défaut de port de la ceinture ou de dispositif de retenue adapté, cumulée à celle du surnombre", correct: true },
    { text: "Aucune sanction supplémentaire, une seule amende globale étant appliquée", correct: false },
  ], "Ces infractions peuvent se cumuler, rendant la sanction financière potentiellement très élevée en cas de transport de plusieurs enfants en surnombre."),

  /* ===== VAGUE 113 — piste cyclable, véhicules motorisés (données précises) ===== */

  q("usagers", "Circuler avec un véhicule motorisé non autorisé (voiture, moto) sur une piste cyclable est sanctionné par une amende de 135 €, mais cette infraction :", [
    { text: "N'entraîne aucun retrait de points", correct: true },
    { text: "Entraîne un retrait de 3 points, comme pour un stationnement sur cette même piste", correct: false },
  ], "Contrairement au stationnement sur piste cyclable (3 points), la simple circulation avec un véhicule motorisé non autorisé n'entraîne pas de retrait de points."),
  q("usagers", "Selon l'article R417-11, stationner un véhicule motorisé sur une voie verte, une bande ou une piste cyclable est classé comme un stationnement très gênant, sanctionné par 135 € et un retrait de :", [
    { text: "3 points sur le permis de conduire", correct: true },
    { text: "Aucun point, seule une amende étant prévue", correct: false },
  ], "Cette distinction entre circuler (sans retrait de points) et stationner (avec 3 points) sur une piste cyclable est une nuance souvent méconnue des automobilistes."),
  q("usagers", "Un deux-roues motorisé (scooter) peut exceptionnellement emprunter une piste cyclable lorsque :", [
    { text: "La signalisation est complétée par le panonceau M4d2 l'y autorisant explicitement", correct: true },
    { text: "Il n'y a aucun cycliste visible sur la piste au moment du passage", correct: false },
  ], "Sans ce panonceau spécifique, aucun véhicule motorisé, y compris les deux-roues légers, n'est autorisé à circuler sur une piste réservée aux cyclistes."),
  q("usagers", "L'article R110-2 du code de la route définit une piste cyclable comme une chaussée :", [
    { text: "Exclusivement réservée aux cycles à deux ou trois roues", correct: true },
    { text: "Ouverte à tous les véhicules de moins de 3,5 tonnes", correct: false },
  ], "Cette définition légale précise exclut par principe tout véhicule à moteur, sauf dérogation explicitement signalée."),

  /* ===== VAGUE 114 — dépassement par la droite, article R414-6 (données précises) ===== */

  q("divers", "Selon l'article R414-6 du code de la route, dépasser un véhicule par la droite en dehors des cas autorisés est puni d'une amende de 135 € et d'un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "6 points, comme un excès de vitesse important", correct: false },
  ], "Cette contravention de 4e classe peut également être assortie d'une suspension de permis pouvant atteindre 3 ans, selon la gravité des circonstances."),
  q("divers", "Sur une route à plusieurs voies où les véhicules avancent lentement sur toutes les files, dépasser par la droite un véhicule immobile ou très lent sur la file de gauche est :", [
    { text: "Généralement toléré, la situation d'embouteillage constituant une exception reconnue", correct: true },
    { text: "Toujours strictement interdit, sans aucune exception liée au trafic", correct: false },
  ], "La configuration d'un trafic dense et ralenti sur plusieurs files justifie une tolérance particulière, différente des conditions de circulation fluide."),
  q("divers", "Dépasser par la droite un tramway circulant au milieu d'une route à double sens est :", [
    { text: "Autorisé, sous réserve qu'aucun passager ne soit en train d'y monter ou d'en descendre", correct: true },
    { text: "Toujours interdit, quelle que soit la situation", correct: false },
  ], "Cette exception légale spécifique tient compte de la configuration particulière des voies de tramway insérées au centre de certaines routes."),

  /* ===== VAGUE 115 — stationnement zone bleue, disque européen (données précises 2026) ===== */

  q("divers", "Depuis le 1er janvier 2012, seul un modèle de disque de stationnement est reconnu valable en zone bleue :", [
    { text: "Le disque européen bleu unique", correct: true },
    { text: "N'importe quel disque, y compris les anciens modèles en carton blanc et bleu", correct: false },
  ], "Les anciens modèles français à volets multiples ne sont plus acceptés depuis cette date, un disque non conforme étant assimilé à une absence de disque."),
  q("divers", "L'absence ou le mauvais réglage du disque en zone bleue est sanctionné par une amende de :", [
    { text: "35 €, sans minoration possible en cas de paiement rapide", correct: true },
    { text: "135 €, avec minoration possible à 90 €", correct: false },
  ], "Contrairement à de nombreuses autres infractions routières, les amendes de stationnement ne bénéficient d'aucun tarif minoré, quelle que soit la rapidité du paiement."),
  q("divers", "Un disque de stationnement en zone bleue doit être réglé sur l'heure d'arrivée, arrondie :", [
    { text: "À la demi-heure supérieure", correct: true },
    { text: "À l'heure pile inférieure", correct: false },
  ], "Cet arrondi systématique vers le haut simplifie le réglage tout en évitant toute contestation sur d'éventuelles minutes manquantes."),
  q("divers", "En l'absence de précision sur le panonceau d'entrée d'une zone bleue, la durée maximale de stationnement autorisée est, par défaut, de :", [
    { text: "1 heure 30", correct: true },
    { text: "8 heures", correct: false },
  ], "Cette durée par défaut s'applique sauf indication contraire explicitement affichée par la commune concernée."),

  /* ===== VAGUE 116 — vitres teintées, article R316-3-1 (données précises 2026) ===== */

  q("mecanique", "Depuis le 1er janvier 2017, le pare-brise et les vitres latérales avant doivent laisser passer au moins :", [
    { text: "70 % de la lumière", correct: true },
    { text: "10 % de la lumière seulement", correct: false },
  ], "Ce taux de transmission de lumière visible (TLV) garantit que les forces de l'ordre puissent distinguer clairement le conducteur à travers ses vitres avant."),
  q("mecanique", "Circuler avec des vitres avant trop teintées, sous ce seuil de 70 %, est sanctionné par une amende de 135 € et un retrait de :", [
    { text: "3 points sur le permis", correct: true },
    { text: "Aucun point, seule une amende étant prévue", correct: false },
  ], "Cette contravention de 4e classe peut également entraîner l'immobilisation du véhicule et une contre-visite obligatoire au contrôle technique."),
  q("mecanique", "Concernant les vitres arrière (latérales arrière et lunette), la réglementation sur la transparence :", [
    { text: "N'impose aucun taux minimal, laissant une totale liberté de teinte", correct: true },
    { text: "Impose exactement le même seuil de 70 % que les vitres avant", correct: false },
  ], "Cette liberté pour l'arrière du véhicule, à condition de disposer de deux rétroviseurs extérieurs, explique pourquoi de nombreux véhicules affichent des vitres arrière très sombres en toute légalité."),
  q("mecanique", "Une dérogation à l'obligation de transparence des vitres avant peut être accordée pour :", [
    { text: "Des raisons médicales précises, comme certaines pathologies cutanées d'hypersensibilité aux UV", correct: true },
    { text: "Un simple confort personnel exprimé par le conducteur", correct: false },
  ], "Cette dérogation médicale, mentionnée sur le permis de conduire, reste strictement encadrée et réservée à des pathologies listées par arrêté ministériel."),

  /* ===== VAGUE 117 — écouteurs/oreillettes au volant, article R412-6-1 (données précises) ===== */

  q("conducteur", "Depuis le 1er juillet 2015, porter des écouteurs, une oreillette ou un casque audio en conduisant est sanctionné par une amende de 135 € et un retrait de :", [
    { text: "3 points sur le permis, comme pour le téléphone tenu en main", correct: true },
    { text: "Aucun point, seule une amende étant prévue", correct: false },
  ], "L'article R412-6-1 traite ces deux infractions (téléphone tenu en main et port à l'oreille) de façon identique en termes de sanction."),
  q("conducteur", "Un conducteur portant des écouteurs éteints, sans aucun son diffusé, est :", [
    { text: "Tout de même en infraction, le simple port suffisant à caractériser l'infraction", correct: true },
    { text: "En règle, seule la diffusion effective d'un son étant sanctionnée", correct: false },
  ], "La loi vise le port du dispositif lui-même, indépendamment de son utilisation effective au moment du contrôle."),
  q("conducteur", "Cette interdiction du port d'écouteurs au volant ne s'applique pas :", [
    { text: "Aux appareils électroniques correcteurs de surdité", correct: true },
    { text: "Aux kits mains libres intégrés au casque d'un motard", correct: false },
  ], "Seuls les appareils auditifs médicaux sont explicitement exemptés ; les dispositifs Bluetooth intégrés aux casques restent, eux, soumis à cette interdiction."),
  q("conducteur", "L'isolation auditive causée par des écouteurs prive notamment le conducteur de la perception :", [
    { text: "Des klaxons et sirènes des véhicules prioritaires", correct: true },
    { text: "Du bruit de son propre moteur uniquement", correct: false },
  ], "Cette perte de perception des signaux sonores d'alerte constitue le principal risque justifiant l'interdiction de ce type de dispositif au volant."),k

  /* ===== VAGUE 118 — conduite en tongs / pieds nus, article R412-6 (données précises) — cap des 1000 ===== */

  q("conducteur", "Contrairement à une idée très répandue, conduire pieds nus ou en tongs en France est :", [
    { text: "Légal en soi, aucun article du code de la route ne l'interdisant explicitement", correct: true },
    { text: "Formellement interdit par un article dédié du code de la route", correct: false },
  ], "Ce mythe tenace ne correspond à aucune réalité juridique précise ; c'est un article beaucoup plus général qui peut, dans certains cas, s'appliquer."),
  q("conducteur", "Un conducteur en tongs peut toutefois être sanctionné sur le fondement de l'article R412-6, qui impose de :", [
    { text: "Rester en permanence en position d'exécuter toutes les manœuvres sans délai ni gêne", correct: true },
    { text: "Porter des chaussures fermées en toute circonstance", correct: false },
  ], "Ce texte général, parfois qualifié de « fourre-tout », permet de sanctionner tout comportement jugé incompatible avec une maîtrise correcte du véhicule."),
  q("conducteur", "L'amende encourue pour une conduite jugée entravée par des tongs ou l'absence de chaussures est de :", [
    { text: "35 €, contravention de 2e classe, sans retrait de points", correct: true },
    { text: "135 € avec un retrait de 3 points", correct: false },
  ], "Avant 2003, cet article servait d'ailleurs aussi à sanctionner l'usage du téléphone au volant, faute d'infraction spécifique à l'époque."),
  q("conducteur", "Le risque concret le plus souvent cité concernant la conduite en tongs est :", [
    { text: "Le coincement de la chaussure sous la pédale de frein ou d'accélérateur", correct: true },
    { text: "Une usure prématurée anormale des pédales du véhicule", correct: false },
  ], "Ce risque de blocage mécanique, en situation d'urgence, peut retarder ou empêcher une réaction rapide et précise du conducteur."),
  q("conducteur", "En cas d'accident où l'assurance détermine qu'une chaussure inadaptée a contribué au sinistre, l'assureur peut :", [
    { text: "Refuser ou réduire la prise en charge des dommages", correct: true },
    { text: "N'a jamais le droit de tenir compte de ce facteur", correct: false },
  ], "Au-delà de la sanction pénale éventuelle, la responsabilité civile du conducteur peut être aggravée si son équipement a objectivement nui à sa maîtrise du véhicule."),

  /* ===== VAGUE 119 — pour franchir le cap symbolique des 1000 questions ===== */

  q("divers", "Le code de la route français est aujourd'hui principalement contenu dans :", [
    { text: "La partie réglementaire du code de la route, régulièrement mise à jour par décrets", correct: true },
    { text: "Un texte figé, inchangé depuis sa création au début du XXe siècle", correct: false },
  ], "Le code évolue en permanence pour s'adapter aux nouveaux usages (EDPM, véhicules électriques) et aux enjeux de sécurité routière contemporains."),
  q("divers", "La Sécurité routière française, organisme chargé de la prévention et des politiques publiques en la matière, dépend :", [
    { text: "Du ministère de l'Intérieur", correct: true },
    { text: "D'une association privée sans lien avec l'État", correct: false },
  ], "Cette délégation interministérielle pilote notamment les campagnes de prévention et l'évolution de la réglementation routière."),
  q("divers", "L'examen théorique général (ETG), plus connu sous le nom de « code de la route », est composé de :", [
    { text: "40 questions, avec un seuil de réussite fixé à 35 bonnes réponses", correct: true },
    { text: "10 questions, avec un seuil de réussite fixé à 8 bonnes réponses", correct: false },
  ], "Ce format, identique à celui reproduit dans le mode examen blanc de cette application, constitue la référence officielle de l'épreuve théorique."),
  q("divers", "La validité du code de la route (ETG), une fois obtenu, est de :", [
    { text: "5 ans, ou 5 présentations à l'épreuve pratique si cela survient avant", correct: true },
    { text: "1 mois seulement", correct: false },
  ], "Ce délai assez large permet aux candidats de préparer sereinement leur épreuve pratique sans crainte de voir leur code expirer trop rapidement."),
  q("divers", "S'entraîner régulièrement sur des questions variées et actualisées, plutôt que de mémoriser un jeu de questions figé, permet de :", [
    { text: "Mieux comprendre le raisonnement derrière chaque règle, plutôt que d'apprendre par cœur", correct: true },
    { text: "N'a aucun intérêt particulier par rapport à l'apprentissage par cœur", correct: false },
  ], "La compréhension du pourquoi de chaque règle prépare bien mieux à la conduite réelle qu'une simple mémorisation des réponses attendues à l'examen."),
  q("divers", "En France, le taux de réussite national à l'épreuve théorique générale (code de la route) avoisine généralement :", [
    { text: "60 %, ce qui laisse une marge de progression importante pour bien se préparer", correct: true },
    { text: "99 %, un taux quasiment garanti pour tous les candidats", correct: false },
  ], "Ce taux, loin d'être acquis d'avance, souligne l'intérêt d'un entraînement sérieux et régulier avant de se présenter à l'examen officiel."),
  q("divers", "Bonne chance pour ton examen du code de la route !", [
    { text: "Continue à t'entraîner régulièrement, la régularité paie plus que les révisions de dernière minute", correct: true },
    { text: "Il vaut mieux tout réviser la veille au soir", correct: false },
  ], "Un entraînement étalé dans le temps, avec des révisions régulières, ancre bien mieux les connaissances qu'un bachotage intensif de dernière minute."),
];

export const getQuestionsByTheme = (themeId) => QUESTIONS.filter((q) => q.theme === themeId);
export const getRandomQuestions = (count = 40) => {
  const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
