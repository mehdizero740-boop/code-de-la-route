// Fiches de cours par thème. Clé = id du thème (voir THEMES dans questions.js).
// Chaque fiche a un intro et une liste de sections { heading, body: [paragraphes] }.
export const COURSES = {
  signalisation: {
    intro: "La signalisation routière organise la circulation grâce à des panneaux, des marquages au sol et des feux. Savoir les reconnaître d'un coup d'œil est la base de toute conduite sûre.",
    sections: [
      {
        heading: "Les grandes familles de panneaux",
        body: [
          "Les panneaux de danger sont triangulaires, à fond blanc et bordure rouge. Ils annoncent un risque à venir (virage, chaussée glissante, passage d'animaux…) et invitent à la prudence, sans imposer d'action précise.",
          "Les panneaux d'interdiction sont ronds, à fond blanc et bordure rouge. Ils imposent une interdiction ferme (sens interdit, interdiction de dépasser, limitation de vitesse…).",
          "Les panneaux d'obligation sont ronds, à fond bleu. Contrairement à une idée reçue, ils ont la même valeur contraignante que les panneaux d'interdiction : ignorer une obligation est une infraction.",
          "Les panneaux d'indication sont carrés ou rectangulaires, à fond bleu ou vert. Ils informent sans imposer de comportement particulier (parking, autoroute, services…).",
        ],
      },
      {
        heading: "STOP et cédez-le-passage",
        body: [
          "Le panneau STOP impose un arrêt total et obligatoire, quelle que soit la visibilité ou la circulation au moment où vous l'atteignez. L'arrêt doit se faire au niveau de la ligne d'effet des feux ou du marquage au sol prévu.",
          "Le cédez-le-passage n'impose pas d'arrêt total : vous pouvez vous engager sans vous arrêter si la voie est manifestement libre, mais vous devez être prêt à céder le passage à tout instant.",
          "Ces deux panneaux gardent leur pleine valeur même s'ils sont anciens, dégradés ou peu visibles, tant qu'ils restent identifiables.",
        ],
      },
      {
        heading: "Panonceaux : l'information complémentaire",
        body: [
          "Un panonceau est une plaque rectangulaire placée sous un panneau principal pour préciser sa portée : une distance, une catégorie de véhicules concernée, un horaire d'application, ou une exception (« sauf riverains », « sauf vélos »…).",
          "Le panonceau ne remplace jamais le panneau principal : il en restreint ou en précise seulement le champ d'application.",
        ],
      },
      {
        heading: "Marquages au sol",
        body: [
          "Une ligne blanche continue interdit tout franchissement, y compris pour dépasser. Une ligne discontinue peut être franchie si la manœuvre est sûre.",
          "Une ligne continue peut néanmoins être chevauchée (pas franchie complètement) pour dépasser un cycliste en toute sécurité, à condition de respecter la distance latérale minimale.",
          "Le marquage a la même valeur réglementaire qu'un panneau, même en l'absence de signalisation verticale associée.",
        ],
      },
    ],
  },

  priorites: {
    intro: "Les règles de priorité déterminent qui passe en premier à chaque croisement. Elles reposent sur un principe simple par défaut -- la priorité à droite -- modulé par de nombreuses situations particulières.",
    sections: [
      {
        heading: "La priorité à droite : la règle de base",
        body: [
          "En l'absence de toute signalisation, le véhicule arrivant de votre droite est prioritaire. Cette règle s'applique à tout type de véhicule : voiture, vélo, moto -- le mode de transport n'entre pas en compte, seule la position géographique compte.",
          "Cette règle par défaut cesse de s'appliquer dès qu'un panneau, un feu ou un marquage au sol vient préciser autre chose.",
        ],
      },
      {
        heading: "Les carrefours à sens giratoire",
        body: [
          "Dans un rond-point classique (signalé par le panneau « cédez-le-passage »), les véhicules déjà engagés sur l'anneau sont prioritaires sur ceux qui souhaitent s'y engager.",
          "Un mini-giratoire franchissable reste soumis aux mêmes règles de priorité, quelle que soit sa taille réduite.",
          "En sortie de giratoire, pensez à céder le passage aux piétons et cyclistes qui traversent la voie de sortie.",
        ],
      },
      {
        heading: "Véhicules et usagers prioritaires",
        body: [
          "Les véhicules d'intervention (police, pompiers, SAMU) gyrophare et sirène deux temps activés bénéficient d'une priorité absolue : il faut faciliter leur passage sans hésitation, y compris en s'écartant si nécessaire.",
          "Un piéton engagé ou sur le point de s'engager sur un passage protégé est prioritaire : le conducteur doit céder le passage, sous peine d'une sanction sévère (6 points retirés).",
          "Un cycliste qui continue tout droit reste prioritaire face à un véhicule qui change de direction (tourne à droite ou à gauche) sur la même voie.",
        ],
      },
      {
        heading: "Cas particuliers à retenir",
        body: [
          "Un véhicule qui sort d'un chemin privé, d'un parking ou d'une propriété doit toujours céder le passage à la circulation de la route qu'il rejoint, même si celle-ci semble peu fréquentée.",
          "En montagne, sur une route étroite, le véhicule qui monte est prioritaire sur celui qui descend, car il est plus difficile pour lui de reculer.",
          "Une manœuvre non courante (marche arrière, demi-tour, sortie de stationnement) est toujours non prioritaire : c'est à vous de céder le passage à l'ensemble des autres usagers.",
        ],
      },
    ],
  },

  vitesse: {
    intro: "La vitesse est l'un des premiers facteurs d'accidents graves en France. Connaître les limites, les distances de sécurité et les mécanismes physiques du freinage permet d'anticiper plutôt que de subir.",
    sections: [
      {
        heading: "Les limitations de base",
        body: [
          "En agglomération, la vitesse est limitée à 50 km/h par défaut, et à 30 km/h dans les zones spécifiquement signalées.",
          "Hors agglomération, la limite est de 80 km/h sur route à double sens sans séparateur central, 90 km/h sur certains axes, 110 km/h sur voie rapide à chaussées séparées et 130 km/h sur autoroute par temps sec.",
          "Ces limites sont réduites en cas de pluie (généralement -10 à -20 km/h selon la route) et fortement réduites en cas de très faible visibilité (50 km/h partout si la visibilité descend sous 50 mètres).",
        ],
      },
      {
        heading: "Comprendre la distance d'arrêt",
        body: [
          "La distance d'arrêt totale se compose de deux éléments : la distance parcourue pendant le temps de réaction (environ 1 seconde chez un conducteur attentif), puis la distance de freinage proprement dite.",
          "La distance de freinage n'évolue pas de façon linéaire avec la vitesse : elle évolue avec le carré de la vitesse. Rouler deux fois plus vite multiplie la distance de freinage par environ 4, pas par 2.",
          "Cette règle explique pourquoi un excès de vitesse, même modéré, augmente disproportionnellement le risque et la gravité d'un accident.",
        ],
      },
      {
        heading: "Distances de sécurité",
        body: [
          "La règle pratique des deux secondes permet d'estimer une distance de sécurité suffisante avec le véhicule qui précède, quelle que soit la vitesse.",
          "Cette distance doit être augmentée par mauvaise visibilité, sur chaussée mouillée ou glissante, ou lorsqu'on suit un véhicule imposant qui masque la vue vers l'avant.",
          "Un non-respect des distances de sécurité, en cas de collision par l'arrière, entraîne une présomption de responsabilité pour le conducteur suiveur.",
        ],
      },
      {
        heading: "Sanctions en cas d'excès",
        body: [
          "Le barème est progressif : de 135 € et 2 points retirés pour un excès de 20 à 30 km/h, jusqu'à des sanctions bien plus lourdes au-delà de 50 km/h de dépassement, désormais qualifié de délit en cas d'accident mortel associé.",
          "Un grand excès de vitesse (50 km/h ou plus) permet une immobilisation immédiate du véhicule dès le contrôle, avant même tout jugement.",
        ],
      },
    ],
  },  conducteur: {
    intro: "Le permis à points, les règles sur l'alcool et les stupéfiants, et les obligations administratives encadrent le comportement du conducteur au quotidien. Bien les connaître évite bien des sanctions évitables.",
    sections: [
      {
        heading: "Le permis à points",
        body: [
          "Un conducteur expérimenté dispose d'un capital de 12 points. Les conducteurs en période probatoire démarrent avec un capital réduit (6 ou 8 points selon la filière suivie), qui augmente progressivement chaque année sans infraction.",
          "Une seule infraction ne peut jamais retirer plus de 6 points, même pour les faits les plus graves. En cas de plusieurs infractions constatées en même temps, le retrait cumulé est plafonné à 8 points.",
          "Les points perdus sont récupérés automatiquement après un délai sans nouvelle infraction (2 ans pour une contravention, 3 ans pour un délit), ou via un stage de récupération volontaire, dans la limite de 4 points par stage.",
        ],
      },
      {
        heading: "Alcool et stupéfiants",
        body: [
          "Le taux d'alcoolémie légal maximal est de 0,5 g/L de sang (0,25 mg/L d'air expiré) pour un conducteur classique, et de seulement 0,2 g/L pour un conducteur en période probatoire -- une tolérance quasi nulle.",
          "Pour les stupéfiants, il n'existe aucun seuil de tolérance : la moindre trace détectée constitue une infraction, quelle que soit l'ancienneté de la consommation.",
          "Refuser de se soumettre à un dépistage (alcool ou stupéfiants) est sanctionné aussi sévèrement qu'un résultat positif confirmé.",
        ],
      },
      {
        heading: "Téléphone et distraction au volant",
        body: [
          "Tenir son téléphone en main, y compris à l'arrêt à un feu rouge, est interdit et sanctionné par une amende et un retrait de points.",
          "Utiliser son téléphone comme GPS reste autorisé, à condition qu'il soit fixé sur un support et programmé avant de démarrer, jamais manipulé en roulant.",
          "Le port d'écouteurs dans les deux oreilles est interdit, car il réduit la perception des signaux sonores environnants (klaxons, sirènes).",
        ],
      },
      {
        heading: "Obligations administratives",
        body: [
          "Tout véhicule doit être couvert par une assurance responsabilité civile a minima, y compris s'il reste stationné sans circuler.",
          "Le contrôle technique est obligatoire pour les véhicules de plus de 4 ans, renouvelable tous les 2 ans, désormais étendu progressivement aux deux-roues de plus de 125 cm³ et aux voitures sans permis.",
          "Conduire sans permis valide (jamais obtenu, suspendu ou invalidé) est un délit passible d'amende, de prison et de confiscation du véhicule.",
        ],
      },
    ],
  },

  usagers: {
    intro: "Piétons, cyclistes, motards, poids lourds : la route est partagée entre des usagers aux besoins et aux vulnérabilités très différents. Adapter son comportement à chacun est une obligation autant qu'un réflexe de sécurité.",
    sections: [
      {
        heading: "Les piétons, usagers prioritaires",
        body: [
          "Un piéton engagé ou sur le point de s'engager sur un passage protégé est prioritaire : refuser de lui céder le passage est sanctionné par une amende et un retrait de 6 points.",
          "En dehors d'un passage protégé proche (moins de 50 mètres), le piéton est en tort s'il traverse, mais le conducteur doit malgré tout rester prudent : sa priorité juridique ne dispense jamais de vigilance.",
          "Les enfants et les personnes âgées ou à mobilité réduite nécessitent une prudence renforcée, leur comportement pouvant être moins prévisible ou leur traversée plus lente.",
        ],
      },
      {
        heading: "Cyclistes et engins de déplacement personnel",
        body: [
          "Le dépassement d'un cycliste impose une distance latérale minimale d'au moins 1 mètre en agglomération et 1,5 mètre hors agglomération.",
          "Un cycliste qui continue tout droit reste prioritaire sur un véhicule qui change de direction (tourne à droite ou à gauche) sur la même voie.",
          "Les trottinettes électriques et engins similaires sont interdits sur les trottoirs (sauf autorisation municipale), limités à 25 km/h, et leurs conducteurs sont soumis aux mêmes règles d'alcoolémie que les automobilistes.",
        ],
      },
      {
        heading: "Motos et deux-roues motorisés",
        body: [
          "Les motards ont souvent un seul phare, ce qui complique l'estimation de leur distance et de leur vitesse pour les autres conducteurs -- une raison de plus d'anticiper largement avant tout dépassement ou changement de voie.",
          "L'angle mort d'un véhicule peut totalement masquer un deux-roues : vérifier ses rétroviseurs et son angle mort avant toute manœuvre est essentiel.",
          "Le port du casque homologué est obligatoire pour tout deux-roues motorisé, ainsi que celui de gants certifiés CE depuis 2016.",
        ],
      },
      {
        heading: "Poids lourds et véhicules imposants",
        body: [
          "Un poids lourd négociant un virage peut avoir besoin de déborder légèrement en raison de son gabarit -- anticiper ce mouvement évite bien des situations dangereuses.",
          "Les angles morts des poids lourds sont particulièrement étendus : ne jamais stationner ni circuler durablement dans cette zone, notamment aux intersections.",
          "Sur autoroute à trois voies ou plus, les poids lourds sont cantonnés aux deux voies de droite, la voie la plus à gauche restant réservée aux véhicules légers.",
        ],
      },
    ],
  },

  secours: {
    intro: "En cas d'accident, les premiers gestes d'un témoin peuvent faire une différence décisive. La méthode PAS (Protéger, Alerter, Secourir) structure une réaction efficace, même sans formation médicale.",
    sections: [
      {
        heading: "Protéger : sécuriser la zone",
        body: [
          "Avant toute intervention, la sécurité prime : la vôtre, celle des victimes et celle des autres usagers. Allumez vos feux de détresse, signalez l'accident (triangle à 30 mètres minimum, gilet réfléchissant) et coupez le moteur des véhicules impliqués si possible.",
          "Ne posez jamais le triangle si cela représente un danger manifeste pour vous-même -- dans ce cas précis, cette étape peut être omise.",
        ],
      },
      {
        heading: "Alerter : donner l'alarme efficacement",
        body: [
          "Composez le 15 (SAMU), le 18 (pompiers) ou le 112 (numéro d'urgence européen, gratuit et accessible même sans carte SIM). Le 114 est réservé aux personnes sourdes ou malentendantes, accessible par SMS ou tchat.",
          "Précisez en priorité la nature de l'événement et la localisation exacte : ce sont les informations les plus urgentes pour déclencher les secours.",
          "Restez joignable après l'appel : les services peuvent rappeler pour obtenir des précisions complémentaires.",
        ],
      },
      {
        heading: "Secourir : les gestes essentiels",
        body: [
          "Face à une hémorragie externe, comprimez fermement la plaie avec un tissu propre. Face à une victime inconsciente qui respire, placez-la en position latérale de sécurité pour dégager ses voies aériennes.",
          "Face à une victime qui ne respire plus, débutez un massage cardiaque sans attendre. Un défibrillateur, s'il est disponible, ne doit être utilisé que sur une personne inconsciente ne respirant pas normalement.",
          "Face à un étouffement, encouragez d'abord la toux si elle reste efficace ; sinon, pratiquez des claques dans le dos, puis des compressions abdominales (manœuvre de Heimlich) si nécessaire.",
          "Ne retirez jamais un objet planté dans une plaie, ni le casque d'un motard blessé, sauf urgence vitale absolue (arrêt respiratoire) : ces gestes peuvent aggraver une blessure existante.",
        ],
      },
    ],
  },

  mecanique: {
    intro: "Un véhicule bien entretenu est plus sûr, plus économique et plus fiable. Connaître les points de contrôle essentiels permet d'anticiper les pannes avant qu'elles ne deviennent dangereuses.",
    sections: [
      {
        heading: "Pneumatiques",
        body: [
          "Une pression insuffisante déforme le pneu, réduit l'adhérence et augmente la distance de freinage ainsi que la consommation de carburant.",
          "La profondeur légale minimale des sculptures est de 1,6 mm ; en dessous, l'évacuation de l'eau devient insuffisante et le risque d'aquaplaning augmente fortement.",
          "Une hernie (déformation visible sur le flanc) impose un remplacement immédiat, le risque d'éclatement étant élevé.",
          "La loi Montagne impose, chaque hiver dans les départements concernés, des pneus marqués 3PMSF ou des chaînes/chaussettes à neige sur les roues motrices.",
        ],
      },
      {
        heading: "Freinage",
        body: [
          "Une pédale de frein molle ou spongieuse signale souvent la présence d'air dans le circuit hydraulique, nécessitant une purge par un professionnel.",
          "Un grincement métallique au freinage indique généralement des plaquettes usées, à faire contrôler rapidement pour préserver l'efficacité du freinage.",
          "Le liquide de frein, hygroscopique, absorbe l'humidité avec le temps et doit être remplacé périodiquement même sans signe de défaillance apparent.",
        ],
      },
      {
        heading: "Éclairage et visibilité",
        body: [
          "Tous les feux (position, croisement, route, stop, clignotants) doivent être vérifiés régulièrement, y compris de jour, car les feux stop restent utiles pour signaler un freinage aux véhicules suiveurs.",
          "L'état des essuie-glaces et le niveau de liquide lave-glace conditionnent directement la visibilité en cas de pluie ou de projections.",
          "Un rétroviseur cassé ou manquant est un motif de contre-visite au contrôle technique.",
        ],
      },
      {
        heading: "Autres points de vigilance",
        body: [
          "Une odeur de brûlé inhabituelle pendant la conduite doit toujours inciter à s'arrêter en sécurité pour en identifier l'origine avant de poursuivre.",
          "Le respect des intervalles de remplacement de la courroie de distribution évite une casse moteur potentiellement très coûteuse.",
          "Une fuite d'huile visible sous un véhicule stationné, même minime, mérite une vérification avant d'entreprendre un long trajet.",
        ],
      },
    ],
  },
  environnement: {
    intro: "Au-delà de la réglementation, l'éco-conduite et l'entretien du véhicule ont un impact direct sur la consommation, le budget et l'empreinte environnementale de chaque trajet.",
    sections: [
      {
        heading: "Les bases de l'éco-conduite",
        body: [
          "Anticiper plutôt que freiner : lever le pied tôt permet au véhicule de ralentir naturellement, plutôt que de freiner tard et de devoir réaccélérer, ce qui consomme davantage.",
          "Une vitesse stabilisée, sans à-coups d'accélération, réduit sensiblement la consommation par rapport à une conduite saccadée, particulièrement en ville.",
          "Changer de rapport à régime modéré plutôt qu'à régime élevé limite la surconsommation liée à un moteur qui tourne inutilement vite.",
        ],
      },
      {
        heading: "Entretien et consommation",
        body: [
          "Des pneus mal gonflés ou usés augmentent la résistance au roulement et donc la consommation de carburant.",
          "Un filtre à air encrassé réduit les performances du moteur et augmente la consommation, tout comme une surcharge inutile du véhicule.",
          "L'entretien régulier (huile, filtres, pneus) réduit à la fois la consommation et les émissions polluantes du véhicule.",
        ],
      },
      {
        heading: "Vignettes Crit'Air et zones à faibles émissions",
        body: [
          "La vignette Crit'Air classe les véhicules selon leur niveau de pollution, de 0 (véhicules électriques ou hydrogène) à 5 (véhicules les plus anciens et polluants).",
          "Dans les zones à faibles émissions, certaines vignettes peuvent être interdites de circulation à certains horaires, notamment lors de pics de pollution.",
          "Le défaut de vignette apposée dans une zone qui l'exige est sanctionnable, même si le véhicule serait éligible à une catégorie favorable.",
        ],
      },
    ],
  },

  securite: {
    intro: "Ceinture, sièges enfants, chargement bien arrimé, équipements réfléchissants : ces éléments de sécurité, souvent perçus comme secondaires, jouent un rôle déterminant en cas de choc.",
    sections: [
      {
        heading: "La ceinture de sécurité",
        body: [
          "Le port de la ceinture est obligatoire pour tous les occupants du véhicule, à l'avant comme à l'arrière. Un passager arrière non attaché peut être violemment projeté vers l'avant lors d'un choc, blessant également les occupants avant.",
          "Pendant la grossesse, la ceinture reste obligatoire, à condition de positionner correctement la sangle sous le ventre.",
          "Le non-port de la ceinture est sanctionné par une amende et un retrait de points, indépendamment de la survenue d'un accident.",
        ],
      },
      {
        heading: "Sièges enfants",
        body: [
          "Un enfant doit voyager dans un dispositif de retenue homologué jusqu'à 10 ans ou 1,35 m, selon le critère atteint en premier.",
          "La norme i-Size impose la position dos à la route jusqu'à au moins 15 mois, une durée plus protectrice pour la nuque que l'ancienne norme.",
          "Un siège auto ayant subi un accident, même léger, doit être remplacé : des micro-fissures invisibles peuvent avoir compromis sa capacité de protection.",
        ],
      },
      {
        heading: "Chargement et arrimage",
        body: [
          "Un chargement doit être réparti avec les objets les plus lourds proches du centre de gravité et solidement arrimé pour éviter tout déplacement en cours de route.",
          "Un chargement qui dépasse doit respecter une largeur maximale réglementée et être signalé si le dépassement est important.",
          "Une remorque doit être équipée de feux, d'une plaque d'immatriculation et, selon son poids, d'un système de freinage propre.",
        ],
      },
      {
        heading: "Équipements de visibilité",
        body: [
          "Le gilet de haute visibilité et le triangle de présignalisation sont obligatoires dans tout véhicule, y compris les deux-roues motorisés depuis 2016.",
          "Le gilet doit être rangé à portée de main du conducteur (pas dans le coffre), pour pouvoir l'enfiler avant même de sortir du véhicule en cas de panne.",
          "Le port de vêtements clairs ou réfléchissants est fortement recommandé pour les cyclistes et piétons circulant de nuit, en complément de l'éclairage réglementaire.",
        ],
      },
    ],
  },

  divers: {
    intro: "Stationnement, autoroute, démarches administratives : cette catégorie regroupe des règles pratiques du quotidien, moins spectaculaires que la conduite elle-même mais tout aussi sanctionnées en cas de non-respect.",
    sections: [
      {
        heading: "Les catégories de stationnement gênant",
        body: [
          "Le stationnement « gênant » (amende de 35 €) concerne les situations qui perturbent la circulation sans créer de danger direct.",
          "Le stationnement « très gênant » (amende de 135 €) concerne les cas plus graves : passage piéton, place handicapée, double file, entrée carrossable bloquée.",
          "Le stationnement « dangereux » (près d'un virage, d'un sommet de côte, d'une intersection à visibilité réduite) entraîne, en plus de l'amende, un retrait de points -- contrairement aux deux autres catégories.",
        ],
      },
      {
        heading: "Conduite sur autoroute",
        body: [
          "En cas de panne, seul un dépanneur agréé par la préfecture peut intervenir sur autoroute ; il doit arriver dans un délai maximal de 30 minutes après l'alerte.",
          "En cas d'immobilisation, sortez du véhicule côté passager, revêtez le gilet et mettez-vous en sécurité derrière les glissières plutôt que de rester à proximité de la chaussée.",
          "Dans les tunnels, des points bleus lumineux au sol matérialisent la distance de sécurité à respecter (deux points visibles minimum pour une voiture, trois pour un poids lourd).",
        ],
      },
      {
        heading: "Démarches et documents administratifs",
        body: [
          "Tout véhicule doit être couvert par une assurance, même stationné sans circuler ; son défaut est un délit passible d'amende et de sanctions complémentaires.",
          "La carte grise doit être mise à jour en cas de changement d'adresse ou de propriétaire ; lors d'une vente, la mention manuscrite « vendu le » sert de preuve provisoire de cession.",
          "Le permis de conduire international n'est qu'une traduction du permis national, sans valeur autonome : il doit toujours être présenté accompagné du permis français.",
        ],
      },
      {
        heading: "Infractions et sanctions diverses",
        body: [
          "Le délit de fuite consiste à quitter les lieux d'un accident pour échapper à sa responsabilité ; il est puni jusqu'à 3 ans d'emprisonnement et 75 000 € d'amende, avec un retrait de 6 points.",
          "L'usage abusif du klaxon en ville, hors danger immédiat, est une infraction sanctionnable, tout comme l'utilisation d'un gyrophare bleu par une personne non habilitée.",
          "Depuis juillet 2025, un accident mortel causé dans des circonstances aggravantes (alcool, stupéfiants, grand excès de vitesse) peut être qualifié d'homicide routier, un délit autonome aux peines nettement alourdies.",
        ],
      },
    ],
  },

};

export function getCourse(themeId) {
  return COURSES[themeId] || null;
}
