import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { FaHtml5 } from "react-icons/fa"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

function Work() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="z-10 sticky top-8 mb-20">
        <h3 className="element uppercase tracking-[20px] text-gray-500 text-3xl z-10">
          Experience
        </h3>
      </div>

      <VerticalTimeline className=" text-slate-500">
        <VerticalTimelineElement
          className=" vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sept 2021 - Mars 2022"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/agriculture-companies/upl-ltd-logo.png" />
          }
        >
          <h2 className=" vertical-timeline-element-title">
            Assistant chef de projet EDI
          </h2>
          <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
          <p>
            • Implémentation des nouveaux flux EDI Idoc SAP avec normes EDIFACT
            pour les messages ORDERS, DESADV,
          </p>
          <p>
            • Réalisation des mapping de messages EDIFACT/Idoc SAP et validation
            des Mapping de messages et flux,
          </p>
          <p>
            • Création des procédures et formation des équipes métiers (ADV &
            Supply) dans le suivi, l’identification des erreurs et leurs
            résolutions,
          </p>
          <p>
            • Création des procédures et formation des équipes métiers (ADV &
            Supply) dans le suivi, l’identification des erreurs et leurs
            résolutions,
          </p>
          <p>
            • Gérer les tickets IT de premier niveau concernant les sujets SAP,
          </p>
          <p>• Participer activement au testing (UAT)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=" vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Déc 2015 - Aout 2019"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={"Lafarge"}
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
  )
}

export default Work
