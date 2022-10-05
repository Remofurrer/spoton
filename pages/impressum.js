import Link from 'next/link'
import React from 'react'

const impressum = () => {
  return (
    <div className='pl-4 md:flex md:justify-evenly md:items-start'>
        {/* left side */}
        <div className='pt-14 pb-20 text-3xl md:text-5xl'>
            <h2>Impressum</h2>    
        </div> 

        {/* right side */}
        <div className='md:pt-16'>
            {/* company informations */}
            <div>
                <h2>SPOT GMBH</h2>
                <p>Segantinistrasse 194</p>
                <p>9049 Zürich</p>
                <p>Schweiz</p>
                <div className='flex flex-col text-blue-700 hover:text-blue-800 underline'>
                    <input type="phone" value="+41 79873 37 81" readOnly />    
                    <input type="email" value="hello@spoton.ch" readOnly/>    
                </div>
                <div className='py-6'>
                <Link href="https://spoton.ch/">
                    <a className='text-blue-700 hover:text-blue-800 underline'><p>https://spoton.ch/</p></a>
                </Link>
                </div>
                <div className='space-y-6'>
                    <p>Vertretungsberechtigte Personen: Lena Schwerzmann</p>    
                    <p>Eingetragener Firmenname: Spot GmbH</p>    
                    <p>Registernummer: CH-020.4.072.388-5</p>    
                    <p>Handelsregisteramt: Zürich</p>    
                    <p>Konzept, Design &amp; Programmierung: <Link href="https://www.geyst.ch/"><a className='text-blue-700 underline hover:text-blue-800'>geyst.ch</a></Link></p>    
                    <p className='text-sm md:text-xl'>Haftungsausschluss</p>    
                </div>   
            </div>
            <div className='max-w-md'>
                <div className='space-y-4'>
                    <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>    
                    <p>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>    
                    <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>    
                </div>
                <div className='py-4 text-sm md:text-xl'>
                    <p>Haftung für Links</p>    
                </div>  
                <div>
                    <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.</p>    
                </div>
                <div className='py-4 text-sm md:text-xl'>
                    <p>urheberrecht</p>    
                </div>
                <div>
                    <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Geyst oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</p>    
                </div>
                <div className='py-4 text-sm md:text-xl'>
                    <p>Datenschutz</p>
                </div>
                <div>
                    <p>Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben. In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.</p>
                </div>
                <div className='py-4'>
                    <p>Hier geht es zu unserer <Link href="#"><a className='text-blue-700 hover:text-blue-800 underline'>Datenschutzerklärung</a></Link>.</p>
                </div>
            </div>  
        </div> 
    </div>
  )
}

export default impressum