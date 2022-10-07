import React from 'react';
import Image from 'next/image';
import teamImage from '../public/team.webp';

const about = () => {
  return (
    <div>
        {/* Header */}
        <div className='px-5'>
            <div className='space-y-6 pt-20 pb-20 md:flex md:justify-evenly md:items-start'>
                <h2 className='md:w-40 md:text-xl'>SPOT ON ist die digitale Stimme der Arbeitswelt von morgen.</h2>
                <p className='opacity-60 md:w-3/6'>Unser Ziel ist die Vernetzung, Sichtbarkeit und Stärkung von HR und allen Gestalter*innen, um diese als strategische Partner für die Zukunft der Arbeit zu etablieren.</p> 
            </div>
        </div>

        {/* Section 1 */}
        <div className='pt-32 pb-32 bg-blue-900 px-10'>
            <div className='text-center space-y-10'>
                <h2 className='text-white text-xs'>Empower HR</h2>
                <p className='text-white md:px-44 md:text-xl'>Mit dem Wandel der Arbeitswelt verändert sich auch die Rolle von HR: Wichtiger und strategischer. Dies stärken wir, indem wir HR eine Stimme geben und sie sichtbar machen. Wir schaffen einen vertrauensvollen Austausch, bieten fachliches Know-How und konkrete Handlungsschritte, um HR als strategischen Partner für die Zukunft der Arbeit zu etablieren.</p>
            </div>
        </div>

        {/* Section 2 */}
        <div className='pt-32 pb-32 bg-teal-400 px-10'>
            <div className='text-center space-y-10'>
                <h2 className='text-white text-xs'>Create Future Work</h2>
                <p className='text-white md:px-44 md:text-xl'>Wir überdenken bestehende Paradigmen und gestalten aktiv unsere Arbeitswelt, um gemeinsam die komplexen Herausforderungen unserer Zeit zu meistern. Die Art und Weise wie Unternehmen arbeiten, verändert sich immer schneller. Dies verlangt nach einer strategischen, langfristig ausgerichteten und fachlichen Einbindung von HR.</p>
            </div>
        </div>

        {/* Section 3 */}
        <div className='pt-32 pb-32 bg-yellow-500 px-10'>
            <div className='text-center space-y-10'>
                <h2 className='text-white text-xs'>Connect People &amp; Companies</h2>
                <p className='text-white md:px-44 md:text-xl'>Wie die zukünftige Arbeitswelt aussehen wird, wissen wir nicht. Vielmehr gilt es auszuprobieren und wieder fallen zu lassen. Gemeinsam erreichen wir mehr, indem wir uns austauschen und voneinander lernen. Herzstück von SPOT ON ist unser Netzwerk.</p>
            </div>
        </div>

        {/* Section 4 */}
        <div></div>

        {/* Data from sanity */}
        <div>

        </div>

        {/* Data from sanity */}
        <div className='bg-cover'>
            <Image src={teamImage} alt="Image from out founders team" />
        </div>
    </div>
  )
}

export default about