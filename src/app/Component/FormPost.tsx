// @ts-nocheck
'use client'
import { useState } from 'react'
import DisplayIntro from './DisplayPost/DisplayIntro'
import DisplayContent from './DisplayPost/DisplayContent'
import DisplayOutro from './DisplayPost/DisplayOutro'

const pubTest = {
  variante1 : 
  {
  intro: "📢 Ne sous-estimez jamais le pouvoir d'une bonne landing page dans une campagne Google Ads !", 
  content: "Une landing page bien optimisée est la clé pour maximiser les performances de vos campagnes sur Google Ads. Voici quelques éléments essentiels à prendre en compte : \n\n→ Assurez-vous que votre landing page soit claire et pertinente par rapport à l'annonce qui a dirigé l'utilisateur vers cette page. Si l'utilisateur ne trouve pas ce qu'il cherche rapidement, il risque de partir sans convertir.\n\n→ Les boutons d'action doivent être visibles et attrayants. Ils doivent inciter l'utilisateur à agir. Utilisez des mots d'action convaincants et créez une réelle urgence pour encourager les conversions.\n\n→ Offrez de la valeur à l'utilisateur dès sa première visite sur votre landing page. Proposez-lui des ressources gratuites, des promotions exclusives ou des informations précieuses. Cela augmentera les chances qu'il reste sur la page et qu'il effectue une action.\n\n→ N'oubliez pas d'implémenter correctement le tracking des conversions sur votre landing page. Cela vous permettra de mesurer précisément les performances de vos campagnes et de prendre les bonnes décisions pour les optimiser.", 
  conclusion: "Une landing page bien optimisée peut faire toute la différence dans vos campagnes Google Ads. Si vous souhaitez exploiter pleinement le potentiel de vos campagnes, accordez une attention particulière à votre landing page. 🚀 Et vous, quelles sont vos meilleures astuces pour optimiser vos landing pages ? #GoogleAds #LandingPage #Optimisation"
  }, 
  variante2 : 
  {
  intro: "💡 Saviez-vous que la réussite d'une campagne Google Ads passe avant tout par une bonne landing page ?", 
  content: "Quelques conseils pour une landing page qui convertit : \n\n→ Soyez cohérent avec votre annonce. L'utilisateur doit trouver exactement ce qu'il recherche en arrivant sur votre page.\n\n→ Mettez en avant vos boutons d'action. Utilisez des couleurs attractives et des verbes d'action percutants.\n\n→ Offrez une réelle valeur ajoutée à l'utilisateur dès la première interaction. Proposez un contenu exclusif, une remise spéciale ou un guide gratuit.\n\n→ N'oubliez pas d'implémenter correctement le tracking des conversions. C'est essentiel pour mesurer les performances de votre campagne et optimiser vos résultats.", 
  conclusion: "Une landing page bien optimisée booste vos chances de convertir vos prospects. N'oubliez pas de prendre soin de cette étape cruciale de votre stratégie Google Ads. 💪 Et vous, quel est votre conseil pour une landing page performante ? #GoogleAds #LandingPage #Optimisation"
  }, 
  variante3: 
  {
  intro: "🔑 Envie de maximiser le potentiel de vos campagnes Google Ads ? Ne négligez pas votre landing page !", 
  content: "Voici quelques tips pour une landing page qui convertit : \n\n1️⃣ Soyez clair et précis. Votre page doit répondre aux attentes de l'utilisateur dès le premier coup d'œil.\n\n2️⃣ Des boutons d'action bien placés et attractifs. Utilisez des verbes d'action concrets et incitants pour encourager les conversions.\n\n3️⃣ Donnez quelque chose en retour. Offrez un e-book gratuit, une consultation personnalisée ou une réduction exclusive pour valoriser votre offre.\n\n4️⃣ Veillez à bien configurer le tracking des conversions pour suivre l'efficacité de vos campagnes et optimiser vos résultats.", 
  conclusion: "Une landing page bien conçue est le secret d'une campagne Google Ads réussie. Alors, qu'attendez-vous pour optimiser la vôtre ? Partagez vos astuces en commentaires ! 📈 #GoogleAds #LandingPage #Optimisation"
  }, 
  }

const FormPost = () => {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(pubTest)

    const handleForm = async (e: any) => {
        e.preventDefault()

        setLoading(true)

        const sujet = document.getElementById('sujet')?.value 
        const ton = document.getElementById('ton')?.value 
        const idea = document.getElementById('idea')?.value 
        const pronom = document.getElementById('pronom')?.value 
        const longueur = document.getElementById('longueur')?.value 
    
        if(!sujet || !ton || !idea || !pronom || !longueur) {
          console.error("Veuillez remplir tous les champs")
          setLoading(false)
          return
        }

        try{
          const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              sujet,
              ton,
              idea,
              pronom,
              longueur
            })
          })
          const data = await response.json();
          setPost(data.choices[0].message.content)
          setLoading(false)
        } catch {
          console.error("Une erreur est survenue")
          setLoading(false)
        }
    }

  return (
      <>
      <div className="mt-8 flex gap-8 min-w-full">
        <div className="p-16 rounded-lg w-4/12 shadow-lg bg-white">
            <h2 className="mb-8 text-4xl">Étape 1 : Formulaire</h2>
            <form action="" onSubmit={handleForm}>
              <div className="flex flex-col mb-4">           
                <label htmlFor="sujet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">De quoi veux-tu parler ?</label>
                <input type="text" id="sujet" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="my-4">
                <label htmlFor="idea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Des idées à évoquer ?</label>
                <textarea type="text" id="idea" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div className="my-4">
                <label htmlFor="ton" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rends ton post unique !</label>
                <select name="ton" id="ton" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="humour">Humour</option>
                  <option value="serieux">Sérieux</option>
                  <option value="inspirant">Inspirant</option>
                  <option value="pedagogique">Pédagogique</option>
                  <option value="Coup de gueule">Coup de gueule</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="pronom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Un pronom à utiliser ?</label>
                <select name="pronom" id="pronom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="tu">tu</option>
                  <option value="vous">vous</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="longueur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taille du post ?</label>
                <select name="longueur" id="longueur" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="court">Court</option>
                  <option value="long">Long</option>
                </select>
              </div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6" type="submit">Créer une super publication</button>
            </form>
          </div>
          <div className="p-16 rounded-lg w-8/12 whitespace-pre-line shadow-lg bg-white">
            {/* {loading ? 
            <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div> :  
            <div dangerouslySetInnerHTML={{ __html: post }} />} */}

            <DisplayIntro variantes={post} />
            <DisplayContent variantes={post} />
            <DisplayOutro variantes={post} />
          </div>
        </div>
      </>
  )
}

export default FormPost
