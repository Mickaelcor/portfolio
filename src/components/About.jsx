import React from 'react'

const About = () => {
    return (
        <div name="profil"
            className='w-full bg-gradient-to-b from-gray-800 to-black text-white pb-12 pt-14'
        >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Profil
                    </p>
                </div>

                <p className='text-xl mt-14 text-gray-400'>
                    Développeur web passionné et motivé qui a récemment effectué une reconversion professionnelle et obtenu le diplôme de Développeur Web et Web Mobile (DWWM). Cette formation intensive m'a permis d'acquérir une solide compréhension des technologies web modernes, notamment HTML, CSS, JavaScript, ainsi que des frameworks populaires tels que React et Tailwind.
                </p>

                <br />

                <p className='text-xl text-gray-400'>
                    En travaillant sur des projets concrets, j'ai développé des compétences pratiques en conception de sites web, en intégration, en développement front-end et back-end, ainsi qu'en gestion de bases de données. Je suis fier de mon parcours de reconversion et je suis prêt à mettre mes connaissances et mon expertise au service des entreprises pour les aider à créer des sites web dynamiques et efficaces pour leurs clients.
                </p>
            </div>

        </div>
    )
}

export default About