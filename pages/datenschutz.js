import React from 'react';
import Link from 'next/link';
import HeaderMobile from '../components/HeaderMobile';

const datenschutz = () => {
  return (
    <div className='px-5 md:flex md:justify-evenly md:items-start'>
        <HeaderMobile />
        {/* left side */}
        <div className='pt-14 pb-20 text-3xl md:text-5xl'>
            <h2>Datenschutz</h2>    
        </div>
        
        {/* right side */}
        <div className='md:pt-16 md:h-[80vh] md:overflow-scroll scrollbar-hide'>
            {/* company informations */}
            <div className='md:max-w-xl'>
                <p className='pb-10 opacity-60'>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
                <h2 className='text-bold md:text-xl'>SPOT GMBH</h2>
                <ul className='opacity-60'>
                    <li>Segantinistrasse 194</li>
                    <li>9049 Zürich</li>
                    <li>Schweiz</li>
                </ul>
                <div className="flex flex-col text-blue-700 hover:text-blue-800 underline">
                    <p className="text-blue-700 hover:text-blue-800 underline cursor-pointer">+41 79873 37 81</p>
                    <Link type="email" href="mailto:hello@spoton.ch"><p className="cursor-pointer">hello@spoton.ch</p></Link>
                </div>
                <div className='py-6'>
                <Link href="https://spoton.ch/">
                    <a className='text-blue-700 hover:text-blue-800 underline'><p>https://spoton.ch/</p></a>
                </Link>
                </div> 
            </div>
            <div className='max-w-md'>
                <div className='py-5'>
                    <p>Allgemeiner Hinweis</p>
                </div>
                <div className='space-y-4  opacity-60'>
                    <p>Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                    <p>In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                    <p>Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.</p>
                </div>
                <div className='py-5'>
                    <p>Bearbeitung von Personaldaten</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Eine betroffene Person ist eine Person, über die Personendaten bearbeitet werden. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von Personendaten.
                        Wir bearbeiten Personendaten im Einklang mit dem schweizerischen Datenschutzrecht. Im Übrigen bearbeiten wir – soweit und sofern die EU-DSGVO anwendbar ist – Personendaten gemäss folgenden Rechtsgrundlagen im Zusammenhang mit Art. 6 Abs. 1 DSGVO:</p>
                    <div className='py-5'>
                    <ol className='pl-10 list-decimal md:pl-10 space-y-4'>
                        <li>Bearbeitung von Personendaten mit Einwilligung der betroffenen Person.</li>
                        <li>Bearbeitung von Personendaten zur Erfüllung eines Vertrages mit der betroffenen Person sowie zur Durchführung entsprechender vorvertraglicher Massnahmen.</li>
                        <li>Bearbeitung von Personendaten zur Erfüllung einer rechtlichen Verpflichtung, der wir gemäss allenfalls anwendbarem Recht der EU oder gemäss allenfalls anwendbarem Recht eines Landes, in dem die DSGVO ganz oder teilweise anwendbar ist, unterliegen.</li>
                        <li>Bearbeitung von Personendaten um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen.</li>
                        <li>Bearbeitung von Personendaten um die berechtigten Interessen von uns oder von Dritten zu wahren, sofern nicht die Grundfreiheiten und Grundrechte sowie Interessen der betroffenen Person überwiegen. Berechtigte Interessen sind insbesondere unser betriebswirtschaftliches Interesse, unsere Website bereitstellen zu können, die Informationssicherheit, die Durchsetzung von eigenen rechtlichen Ansprüchen und die Einhaltung von schweizerischem Recht.</li>
                    </ol>
                    </div>
                    <p>Wir bearbeiten Personendaten für jene Dauer, die für den jeweiligen Zweck oder die jeweiligen Zwecke erforderlich ist. Bei länger dauernden Aufbewahrungspflichten aufgrund von gesetzlichen und sonstigen Pflichten, denen wir unterliegen, schränken wir die Bearbeitung entsprechend ein.</p>
                </div>
                <div className='py-5'>
                    <p>Datenschutzerklärung für Cookies</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Diese Website verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung gespeichert und können bei einem erneuten Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von Cookies verweigert.</p>
                    <p>Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite <Link href="http://www.aboutads.info/choices/"><a>http://www.aboutads.info/choices/</a></Link> oder die EU-Seite <Link href="http://www.youronlinechoices.com/"><a>http://www.youronlinechoices.com/</a></Link> erklärt werden.</p>
                    <p>Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.</p>
                </div>
                <div className='py-5'>
                    <p>Datenschutzerklärung für SSL-/TLS-Verschlüsselung</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                        Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
                </div>
                <div className='py-5'>
                    <p>Datenschutzerklärung für Server-Log-Files</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                    <ul>
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                    </ul>
                    <p>Diese Daten sind nicht bestimmten Personen zuordbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.</p>
                </div>
                <div className='py-5'>
                    <p>Newsletter - Mailchimp</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Wenn Sie den auf dieser Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir ausschliesslich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.</p>
                    <p>Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den «Austragen-Link» im Newsletter.
                        Der Versand der Newsletter erfolgt mittels des Versanddienstleisters 'MailChimp', einer Newsletterversandplattform des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen des Versanddienstleisters können Sie hier einsehen. The Rocket Science Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten (PrivacyShield). Der Versanddienstleister wird auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO und eines Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S. 1 DSGVO eingesetzt.</p>
                    <p>Der Versanddienstleister kann die Daten der Empfänger in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke verwenden. Der Versanddienstleister nutzt die Daten unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder um die Daten an Dritte weiterzugeben.</p>
                </div>
                <div className='py-5'>
                    <p>Datenschutzerklärung für Google Analytics</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche für die Datenverarbeitung auf dieser Website ausserhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend «Google» genannt.</p>
                    <p>Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Diese Website verwendet Google Analytics zudem für eine geräteübergreifende Analyse von Besucherströmen, die über eine User-ID durchgeführt wird. Sofern Sie über ein Google-Benutzerkonto verfügen, können Sie in den dortigen Einstellungen unter «Meine Daten», «persönliche Daten» die geräteübergreifende Analyse Ihrer Nutzung deaktivieren.</p>
                    <p>Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code «_anonymizeIp();» erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen zu gewährleisten. Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine Personenbeziehbarkeit kann damit ausgeschlossen werden. Soweit den über Sie erhobenen Daten ein Personenbezug zukommt, wird dieser also sofort ausgeschlossen und die personenbezogenen Daten damit umgehend gelöscht.</p>
                    <p>Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websitenaktivitäten zusammenzustellen und um weitere mit der Websitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitenbetreiber zu erbringen. Für die Ausnahmefälle, in denen personenbezogene Daten in die USA übertragen werden, hat sich Google dem EU-US Privacy Shield unterworfen, <Link href="https://www.privacyshield.gov/EU-US-Framework"><a>https://www.privacyshield.gov/EU-US-Framework</a></Link>.</p>
                    <p>Google Analytics verwendet Cookies. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Google Analytics deaktivieren.</p>
                    <p>Ausserdem können Sie die Nutzung von Google Analytics auch verhindern, indem sie auf diesen Link klicken: Google Analytics deaktivieren. Hierdurch wird ein sog. opt-out Cookie auf ihrem Datenträger gespeichert, der die Verarbeitung personenbezogener Daten durch Google Analytics verhindert. Bitte beachten Sie, dass bei einem Löschen sämtlicher Cookies auf Ihrem Endgerät auch diese Opt-out-Cookies gelöscht werden, d.h., dass Sie erneut die Opt-out-Cookies setzen müssen, wenn Sie weiterhin diese Form der Datenerhebung verhindern wollen. Die Opt-out-Cookies sind pro Browser und Rechner/Endgerät gesetzt und müssen daher für jeden Browser, Rechner oder anderes Endgerät gesondert aktiviert werden.</p>
                </div>
                <div className='py-5'>
                    <p>Datenschutzerklärung für LinkedIn</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Wir setzen innerhalb unseres Onlineangebotes die Marketing-Dienste des sozialen Netzwerks LinkedIn der LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland («LinkedIn») ein.
                        Diese verwenden Cookies, also Textdateien, die auf Ihrem Computer gespeichert werden. Dies ermöglicht uns eine Analyse der Benutzung der Internetseite durch Sie. So können wir beispielsweise den Erfolg unserer Anzeigen messen und Nutzern Produkte anzeigen, für die sie sich zuvor interessiert haben.</p>
                    <p>Erfasst werden dadurch z.B. Informationen zum Betriebssystem, zum Browser, die von Ihnen zuvor aufgerufene Internetseite (Referrer-URL), welche Webseiten der Nutzer aufgesucht, welche Angebote der Nutzer angeklickt hat, und Datum und Uhrzeit Ihres Besuchs auf unserer Internetseite.</p>
                    <p>Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Internetseite werden pseudonymisiert an einen Server von LinkedIn in den USA übertragen und dort gespeichert. LinkedIn speichert also nicht den Namen oder die E-Mailadresse des jeweiligen Nutzers. Die oben genannten Daten werden vielmehr nur demjenigen zugeordnet, bei dem das Cookie erzeugt wurde. Dies gilt nicht, sofern der Nutzer LinkedIn eine Verarbeitung ohne Pseudonymisierung erlaubt hat oder ein LinkedIn-Konto hat.</p>
                    <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall möglicherweise nicht sämtliche Funktionen dieser Internetseite vollumfänglich werden nutzen können. Der Nutzung Ihrer Daten können sie auch direkt bei LinkedIn widersprechen: <Link href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"><a>https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a></Link>.</p>
                    <p>Wir nutzen LinkedIn Analytics, um die Nutzung unserer Website analysieren und regelmässig verbessern zu können. Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Alle LinkedIn Unternehmen haben die Standardvertragsklauseln angenommen, um zu gewährleisten, dass der für die Entwicklung, Durchführung und Erhaltung der Dienste notwendige Datenverkehr in die USA und Singapur auf rechtmässige Weise stattfindet. Sofern wir die Nutzer um eine Einwilligung bitten, ist die Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. a DSGVO. Ansonsten ist Rechtsgrundlage für die Nutzung von LinkedIn Analytics Art. 6 Abs. 1 S. 1 lit. f DSGVO.
                        Informationen des Drittanbieters: LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2 Ireland; Nutzervereinbarung und Datenschutzerklärung.</p>
                </div>
                <div className='py-5'>
                    <p>Datenschutzerklärung für Vimeo</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Auf dieser Website sind Plugins des Videoportals Vimeo der Vimeo, LLC, 555 West 18th Street, New York, New York 10011, USA eingebunden. Bei jedem Aufruf einer Seite, die ein oder mehrere Vimeo-Videoclips anbietet, wird eine direkte Verbindung zwischen Ihrem Browser und einem Server von Vimeo in den USA hergestellt. Dabei werden Informationen über Ihren Besuch und Ihre IP-Adresse dort gespeichert. Durch Interaktionen mit den Vimeo Plugins (z.B. Klicken des Start-Buttons) werden diese Informationen ebenfalls an Vimeo übermittelt und dort gespeichert. Die Datenschutzerklärung für Vimeo mit näheren Informationen zur Erhebung und Nutzung Ihrer Daten durch Vimeo finden Sie in der Datenschutzerklärung von Vimeo.</p>
                    <p>Wenn Sie ein Vimeo-Benutzerkonto haben und nicht möchten, dass Vimeo über diese Website Daten über Sie sammelt und mit Ihren bei Vimeo gespeicherten Mitgliedsdaten verknüpft, müssen Sie sich vor Ihrem Besuch dieser Website bei Vimeo ausloggen.</p>
                    <p>Ausserdem ruft Vimeo über einen iFrame, in dem das Video aufgerufen wird, den Tracker Google Analytics auf. Dabei handelt es sich um ein eigenes Tracking von Vimeo, auf das wir keinen Zugriff haben. Sie können das Tracking durch Google Analytics unterbinden, indem Sie die Deaktivierungs-Tools einsetzen, die Google für einige Internet-Browser anbietet. Sie können darüber hinaus die Erfassung der durch Google Analytics erzeugten und auf ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren</p>
                    <p><Link href="https://tools.google.com/dlpage/gaoptout?hl=de"><a>https://tools.google.com/dlpage/gaoptout?hl=de</a></Link></p>
                </div>
                <div className='py-5'>
                    <p>Urheberrechte</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website, gehören ausschliesslich dem Betreiber dieser Website oder den speziell genannten Rechteinhabern. Für die Reproduktion von sämtlichen Dateien, ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.</p>
                    <p>Wer ohne Einwilligung des jeweiligen Rechteinhabers eine Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls schadenersatzpflichtig machen.</p>
                </div>
                <div className='py-5'>
                    <p>Änderungen</p>
                </div>
                <div className='space-y-4 opacity-60'>
                    <p>Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.</p>
                </div>
                <div className='py-5'>
                    <p>Fragen an den Datenschutzbeauftragten</p>
                </div>
                <div className='space-y-4 opacity-60 pb-10'>
                    <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person in unserer Organisation.</p>
                    <p>Zürich, 25.11.2020<br></br> Quelle: SwissAnwalt</p>
                </div>
            </div>  
        </div>  
    </div>
  )
}

export default datenschutz