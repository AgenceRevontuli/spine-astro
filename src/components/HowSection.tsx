import '../styles/HowSection.scss'
import { useState } from 'react'

const HowSection = () => {
  const [active, setActive] = useState('marketing')

  const handleClick = (e: any) => {
    setActive(e.target.id)
  }
    
  return (
    <section>
        <h2>Comment nous vous aidons à exploser vos chiffres</h2>
        <div className="nav-title">
            <button className={`none-style ${active === "marketing" ? "active" : ""}`} onClick={handleClick} id="marketing">Performance Marketing</button>
            <button className={`none-style ${active === "automatisation" ? "active" : ""}`} onClick={handleClick} id="automatisation">Automatisation de processus</button>
            <button className={`none-style ${active === "data" ? "active" : ""}`} onClick={handleClick} id="data">Pilotage & Data</button>
            <button className={`none-style ${active === "ia" ? "active" : ""}`} onClick={handleClick} id="ia">IA</button>
        </div>
        <div className="prestation-resume" id="marketing" hidden={active != "marketing" ? true : false}>
          <h4>Performance Marketing</h4>
          <p>On développe votre stratégie d'acquisition digitale optimale avec une roadmap précise pour vous permettre de créer un vrai système conversion.</p>
          <div className="sub-offer">
            <div>
              <h5>Roadmap stratégique</h5>  
              <p>Audit de vos actions existantes et de votre marché</p>
              <p>Définission des leviers d'acquisition adéquats en fonction de vos objectifs</p>
              <p>Livraison de votre stratégie avec roadmap et calendrier des opérations</p>
            </div>
            <div>
              <h5>Pilotage opérationnel</h5>
              <p>Paramétrage et gestion de vos comptes Google Ads et Facebook Ads</p>
              <p>Script et objectifs pour Google Ads et Facebook Ads</p>
              <p>Création de landing page optimisée pour les conversions</p>
            </div>
          </div>
        </div>
        <div className="prestation-resume" id="automatisation" hidden={active != "automatisation" ? true : false}>
          <h4>Automatisation de processus</h4>
          <p>Économisez jusqu'à 15h par semaine.</p>
          <p>On détecte les processus complexe lié à votre activité et on défini des scénario automatisés entre vos outils et vos leviers d'acquisition pour en finir avec vos tâches chronophages et à faible valeur ajoutée.</p>
          <div className="sub-offer">
            <div>
              <h5>Automation et scénario</h5>  
              <p>Audit de vos processus commerciaux et de fonctionnement</p>
              <p>Création no-code d'outils métier et de CRM</p>
              <p>Réalisation de scénario sur Make.com</p>
            </div>
            <div>
              <h5>Fidélisation et Emailing</h5>
              <p>Scénario de relance, paniers abandonnés et newseletters</p>
              <p>Emailing automation basé sur des événements web</p>
              <p>Synchronisation des bases de données mailing et CRM</p>
            </div>
          </div>
        </div>
        <div className="prestation-resume" id="data" hidden={active != "data" ? true : false}>
          <h4>Pilotage & Data</h4>
          <p>Un tableau de bord qui se concentre sur l'essentiel pour suivre toutes les performances de votre activité et votre système d'acquisition.</p>
          <div className="sub-offer">
            <div>
              <h5>Tracking Web</h5>  
              <p>Installation et Paramétrage des objectifs Google Analytics 4</p>
              <p>Création d'un plan de taggage sur Google Tag Manager</p>
              <p>Paramétrage de Matomo self-hosted</p>
              <p>Formation aux outils de tracking</p>
            </div>
            <div>
              <h5>Création de funnel & Dashboard</h5>
              <p>Visualisation de votre funnel de conversion</p>
              <p>Dashboard LookerStudio pour suivre et piloter vos actions Marketing</p>
              <p>Consulting et Accompagnement sur vos résultats et les pivots à effectuer</p>
            </div>
          </div>
        </div>
        <div className="prestation-resume" id="ia" hidden={active != "ia" ? true : false}>
          <h4>IA</h4>
          <p>Intégrez l'IA dans vos actions marketing et bénéficiez des dernières innovations digitales pour rester compétitif sur votre marché.</p>
          <div className="sub-offer">
            <div>
              <h5>Relation client</h5>  
              <p>Création d'un bot conversationnel boosté par IA</p>
              <p>Intégration de scénario avec l'API OpenAI</p>
              <p>Automatisation de la création de contenu par IA</p>
            </div>
            <div>
              <h5>Outils interne</h5>
              <p>Conception d'une base de connaissance et une interface IA</p>
              <p>Mise en place d'une IA self-hosted hors chatGPT</p>
              <p>Formation aux outils IA et au Prompt pour profitez des avantages des outils.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HowSection


