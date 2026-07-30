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
  },
};

export function getCourse(themeId) {
  return COURSES[themeId] || null;
}
