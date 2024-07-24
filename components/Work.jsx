import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

function Work() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="z-10 sticky top-8 mb-20">
        <h3 className="text-md md:text-xl xl:text-3xl element uppercase tracking-[10px] text-gray-500  z-10 ">
          Experience
        </h3>
      </div>

      <VerticalTimeline className=" text-slate-500">
        <VerticalTimelineElement
          className=" vertical-timeline-element--work "
          contentStyle={{ background: "#2563eb", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sept 2021 - Mars 2022"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<img className="rounded-full" src="codeur.jpg" />}
        >
          <h2 className=" vertical-timeline-element-title">
            Développeur React Frontend
          </h2>
          <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
          <p>
            • Participer aux cérémonies Agiles (cérémonie fin sprint, daily,
            backlog, refinement)
          </p>
          <p>• Analyser les besoins et les spécifications techniques</p>
          <p>
            • Développer les interfaces utilisateur avec Next.js et TypeScript,
          </p>
          <p>
            • Implémenter des tests avec Jest et React Testing Library,
            entraînant une augmentation du code coverage à 55%, et
            automatisation du déploiement avec Jenkins et Docker.
          </p>
          <p>
            • Recommander de nouvelles technologies et outils, ce qui a conduit
            à l'adoption de Nextjs pour une nouvelle application web, entraînant
            une augmentation de 25% de l'engagement des utilisateurs et une
            diminution de 20% du taux de rebond.
          </p>
          <p>
            • Réduire le temps de chargement initial de 2,5 seconde en utilisant
            Lazy Loading et Code Splitting,
          </p>
          <p>
            • Intégrer Apollo Client et GraphQL, ce qui a entraîné une réduction
            de 50 % des appels API et du temps de réponse,
          </p>
          <p>
            • Rédiger et maintenir la documentation technique, assurant un
            transfert de connaissances fluide et une collaboration efficace
            entre les membres de l'équipe
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=" vertical-timeline-element--work"
          contentStyle={{ background: "#2563eb", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sept 2021 - Mars 2022"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img src="https://companieslogo.com/img/orig/UPL.NS-08f44a06.png?t=1603312844" />
          }
        >
          <h2 className=" vertical-timeline-element-title">
            Développeur Frontend
          </h2>
          <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
          <p>
            • Développer des composants UI réutilisables en utilisant
            React/Javascript CSS/HTML
          </p>
          <p>
            • Analyser et traduire les exigences des utilisateurs en solutions
            techniques
          </p>
          <p>
            • Collaborer avec les équipes back-end pour intégrer les API et les
            services web
          </p>
          <p>
            • Formation et support des utilisateurs finaux sur les nouvelles
            applications et fonctionnalités
          </p>
          <p>
            • Participer activement au Testing (Tests unitaires, Tests e2e) avec
            Jest et React Testing Library
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=" vertical-timeline-element--work"
          contentStyle={{ background: "#2563eb", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Déc 2015 - Aout 2019"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/ac/Lafarge.svg/320px-Lafarge.svg.png" />
          }
        >
          <h2 className=" vertical-timeline-element-title">
            Ingénieur Logistique & KeuUser SAP MM
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            Casablanca, Maroc
          </h4>
          <p>
            • Superviser les activités logistique (Approvisionnement, Stockage,
            Planification, Développement Packaging, Administration des
            ventes...)
          </p>
          <p>• Élaborer et suivre le planning d'expédition, création des BL</p>
          <p>
            • Garantir la mise à jour des paramétrages SAP (Material, Vendor
            Master)
          </p>
          <p>
            • Planifier les besoins en composants à partir des prévisions de
            vente
          </p>
          <p>
            Participation à la rédaction du Blueprint et les spécifications
            fonctionnelles
          </p>
          <p>• Rédaction de tests unitaires et fonctionnels</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Work;
