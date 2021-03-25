// The button to toggle between Spanish and English should not say "Spanish", but rather "Español". I didn't see the text for that here but wanted to note it.

export default {
  locales: ["en", "es"],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages: {
      en: {
        metadata: {
          title: "COVID-19 Vaccine Spotter",
          welcome: "Welcome",
          description:
            "A tool to help you track down COVID-19 vaccine appointment openings at your state's pharmacies. Updated every minute.",
          longDescription:
            "Rather than searching around on each pharmacy's website, we'll automatically scan the pharmacy websites and show you any available appointments we can find on one page.",
        },
        news: {
          date: "03/23/2021",
          message:
            "Once again <strong>Walgreens</strong> has started blocking access, but I'm hoping the latest workarounds should restore Walgreens appointment availability (again). In the meantime, I have also added <strong>Centura Health</strong> appointments for Colorado users.",
          suffix:
            "Any feedback is welcome: <a href='m&#97;ilto&#58;v%&#54;1&#99;&#99;&#105;ne&#64;nic&#107;%6D&#46;org'>vacc&#105;ne&#64;ni&#99;k&#109;&#46;o&#114;&#103;</a > or <a href='https://twitter.com/nickblah'>@nickblah</a>. And if you're a coder and have interest in helping out on <a href='https://github.com/GUI/covid-vaccine-finder/issues'>GitHub</a>, that would be dandy (although the code's still messy)!",
        },
        scanningDetails: {
          scanning:
            "Scanning {chain_count} pharmacy chains ({store_count} stores) in {state}",
        },
        searchBar: {
          zipTextField: {
            header: "Search for appointments near",
            placeholder: "Enter a 5 digit ZIP code",
          },
          radius: {
            header: "Within",
            anyDistance: "Any distance",
            xDistance: "{distance} miles",
          },
          withoutAppointments: "Show locations without current appointments",
          button: "Search",
          noResults:
            "No open appointments for your search can currently be found. Try expanding your search or check again later (appointments can come and go quickly).",
        },
        buttons: {
          newAppointments: "Check for New Appointments",
          visitWebsite: "Visit {name} Website",
        },
        share: {
          button: { on: "Share on {name}", by: "Share by {name}" },
          sites: {
            facebook: "Facebook",
            twitter: "Twitter",
            tumblr: "Tumblr",
            email: "E-Mail",
            pinterest: "Pinterest",
            linkedIn: "LinkedIn",
            reddit: "Reddit",
            whatsApp: "WhatsApp",
            hackerNews: "Hacker News",
          },
        },
        map: {
          legend: {
            available: "Appointments recently available",
            notAvailable: "Appointments not available",
            unknown: "Appointment status unknown",
          },
        },
        time: {
          unknown: "Unknown Time",
        },
        appointments: {
          available: "Appointments available as of {date_time}",
          viewDetails: "View Appointment Details",
          noneAvailable: "No appointments available as of last check",
          unknown: "Unknown Status",
          doesNotCarry:
            "At last check, this location does not carry the vaccine at all, so we have not fetched any appointments.",
          notCollected: "We haven't collected any data for this pharmacy yet.",
          oldData:
            '<strong>Uh oh!</strong> The data for this pharmacy is old. Please visit the <a href="{link} target="_blank" rel="noopener">pharmacy\'s website</a> directly for appointment availability. this likely means that the pharmacy is blocking our tool from accessing their website.',
          visitWebsite: "Visit {name} Website",
          lastChecked: "Last Checked",
          never: "Never",
          viewOnWebsite:
            "View available appointment times on the {name} website.",
          moreAppointments: "View {count} other appointment times",
        },
        doses: {
          first: "First Dose",
          second: "Second Dose Only - {type}",
        },
        store: {
          miles: "miles",
          appointmentsAvailable: "Appointments available as of",
          krogerWarning:
            "Warning: Many users are reporting issues booking appointments with {name} (due to 2nd appointment requirements). However, some users have still reported success, so I still want to share the data I have from the pharmacies. I'm trying to figure out a better way to detect these issues, but in the meantime, sorry for any frustration!",
          educationStaff: "Education Staff and Childcare Providers Only",
          inPhiladelphia: "in Philadelphia",
          riteAid:
            'Rite Aid appointments are <a href="https://www.riteaid.com/corporate/news/-/pressreleases/news-room/2021/rite-aid-extends-covid-19-vaccine-priority-scheduling-period-for-teachers-school-staff-and-childcare-providers" target="_blank" rel="noopener"> only bookable by teachers, school staff and childcare providers</a> on Friday, March 19, Saturday, March 20, Friday, March 26, and Saturday, March 27<span v-show="store.properties.state === \'PA\'"> in Philadelphia (outside of Philadelphia other groups may still be eligible)</span>. Rite Aid appointments should re-open to other eligible groups again on other days.',
        },
        status: {
          title: "Tool Status",
          columnHeaders: ["Pharmacy", "Scanning", "Last Checked"],
          scanningCount: "{count} locations",
        },
        api: {
          title: "Very Beta API | COVID-19 Vaccine Spotter",
          description:
            "The machine readable data behind the COIVD-19 Vaccine Spotter tool. Very beta.",
          blockText:
            "Here's all of the underlying data in JSON format used for this tool. Things are moving fast, so this is subject to change. So while I'm hesitant to call this any type of stable API, I wanted to at least share what I have. If you do use this data just note that things may change. Feel free to reach out to let me know you're using this, so I can maybe give you a heads up about breaking changes:",
          or: "or",
          changelog: {
            beforeLink: "Subscribe to the",
            linkText: "API Changelog",
            afterLink:
              "discussion on GitHub for announcements on any API changes or additions.",
          },
        },
        contact: {
          github: "GitHub",
          twitterHandle: "@nickblah",
        },
        steps: [
          {
            header:
              "Step 1: Review your county's availability and {state}'s eligibility",
            colorado: `Visit <a href="https://covid19.colorado.gov/for-coloradans/vaccine/where-can-i-get-vaccinated" class="text-white"><strong class="fw-bold">Colorado.gov</strong></a > for detailed information about your county's vaccine options and review whether or not you are eligible yet.`,
            localProvider:
              "You may be able to signup for vaccines with a health care provider or there may be other options in your area, in which case you may not need this tool.",
            eligibility:
              "Be sure to visit your own state's official vaccination website for detailed information about your county's vaccine options and review whether or not you are eligible yet.",
          },
          {
            header:
              "Step 2: Use this tool to try and find a pharmacy appointment",
            text: [
              "If you decide you want to find an appointment at a local pharmacy (and are currently eligible for the vaccine), this tool might be able to help.",
              "Rather than searching around on each pharmacy's website, we'll automatically scan the pharmacy websites and show you any available appointments we can find on one page.",
              "All supported locations in {name} are scanned on a regular basis and this page is updated with any available appointments in the state. If you don't see locations near you right now, appointments can come and go quickly so try visiting the page at different times throughout the day.",
            ],
          },
        ],
        _state: {
          title: "{state} COVID-19 Vaccine Spotter",
          description: `A tool to help you track down COVID-19 vaccine appointment openings at {state} pharmacies. Updated every minute.`,
        },
        defaultVue: {
          forDevs: "For Developers:",
          api: "Very Beta API",
          github: "GitHub",

          about: {
            header: "About",
            text: [
              "Finding vaccines seems tough! Hopefully things will become easier soon, but in the meantime, maybe this can help. If you find this useful, feel free to share it around. Get in touch with any questions:",
              "I'd like to add additional functionality (scanning additional pharmacies and sending e-mail or text notifications when appointments open up) if this proves useful and as time permits. If you're a computer programmer and would like to contribute, the project is <a href=\"https://github.com/GUI/covid-vaccine-finder\"   >open source on GitHub</a > (it's currently very messy and undocumented, though).",
            ],
          },
        },
      },
      es: {
        metadata: {
          title: "Observador de vacunas para COVID-19",
          welcome: "Bienvenidos",
          description:
            "Una herramienta para ayudarlo de rastrear citas para la vacuna COVID-19 en las farmacias de su estado. Actualizado cada minuto.",
          longDescription:
            "En lugar de buscar en el sitio web de cada farmacia, escanearemos automáticamente los sitios web de las farmacias y le mostraremos las citas disponibles que podamos encontrar.",
        },
        news: {
          // This is one of two correct formats for dates in Spanish (YYYY/DD/MM). The other correct format is (DD/MM/YYYY). Doesn't matter which is used. 
          date: "2021/23/03",
          message:
            "Otra vez <strong>Walgreens</strong> ha comenzado a bloquear el acceso, sino que espero que las últimas soluciones deberían restaurar la disponibilidad de citas de Walgreens (nuevamente). Mientras tanto, yo tambien he agregado citas de <strong>Centura Health</strong> para usuarios de Colorado.",
          suffix:
            "Cualquier comentario es bienvenido: <a href='m&#97;ilto&#58;v%&#54;1&#99;&#99;&#105;ne&#64;nic&#107;%6D&#46;org'>vacc&#105;ne&#64;ni&#99;k&#109;&#46;o&#114;&#103;</a > o <a href='https://twitter.com/nickblah'>@nickblah</a>. ¡Y si eres un programador y tienes interés en ayudar en <a href='https://github.com/GUI/covid-vaccine-finder/issues'>GitHub</a>, eso sería estupendo (aunque el código sigue siendo complicado)!",
        },
        scanningDetails: {
          scanning:
          // I considered removing the use of {state} below, because many Spanish speakers are familiar with the name of their state/other nearby states, but not the two letter postal abbreviation. However {state} is used in a number of other places in the website, like on line 287 (Spanish) / 129 (English) in this file. Could be left as is and hope that people ARE familiar with the two letter abbreviation. Changing it would be ideal, but would be a lot of work. I left it as is for now.
            "Escaneando {chain_count} farmacias ({store_count} tiendas diferentes) en {state}",
        },
        searchBar: {
          zipTextField: {
            header: "Buscar citas cerca de",
            placeholder: "Ingrese un código postal de 5 dígitos",
          },
          radius: {
            header: "Dentro de",
            anyDistance: "Cualquier distancia",
            xDistance: "{distance} millas",
          },
          withoutAppointments: "Mostrar ubicaciones sin citas actuales",
          button: "Buscar",
          noResults:
            "Ahora no podemos encontrar citas abiertas para su búsqueda. Intente expandir su búsqueda o verifique nuevamente más tarde (las citas pueden aparecer y desaparecer rápidamente).",
        },
        buttons: {
          newAppointments: "Consultar nuevas citas",
          visitWebsite: "Visitar el sitio de web de {name}",
        },
        share: {
          button: { on: "Compartir en {name}", by: "Compartir por {name}" },
          sites: {
            facebook: "Facebook",
            twitter: "Twitter",
            tumblr: "Tumblr",
            email: "Correo electrónico",
            pinterest: "Pinterest",
            linkedIn: "LinkedIn",
            reddit: "Reddit",
            whatsApp: "WhatsApp",
            hackerNews: "Hacker News",
          },
        },
        map: {
          legend: {
            available: "Citas disponibles recientemente",
            notAvailable: "Citas no disponibles",
            unknown: "Se desconoce el estado de la cita",
          },
        },
        time: {
          unknown: "Hora desconocida",
        },
        appointments: {
          // Need to make sure the below date also is in the correct format. For example, MM/DD/YYYY won't make sense to Spanish speakers. Additionally time should be on a 24hr clock format, not a 12hr format like most Americans prefer. Currently {date_time} displays something like this 3/26/2021, 9:30 AM EDT. Note: time zone abreviations like "EDT" don't need to change. It's just the 24hr format. Otherwise you'd need to say "in the morning / in the afternoon / in the evening" to make the 12hr clock make sense, and that seems like much more of a pain than switching to a 24hr clock.
          available: "Citas disponibles a partir de {date_time}",
          viewDetails: "Ver detalles de la cita",
          noneAvailable: "No hay citas disponibles desde la última verificación",
          unknown: "Estado desconocido",
          doesNotCarry:
            "En la última verificación, esta ubicación no lleva la vacuna en absoluto, y debido a esto no hemos obtenido ninguna cita.",
          notCollected: "Todavía no hemos recopilado ningún dato para esta farmacia.",
          oldData:
            '<strong>¡Ay, no!</strong> Los datos de esta farmacia son antiguos. Por favor, visita al <a href="{link} target="_blank" rel="noopener">sitio de web</a> de la farmacia directly para la disponibilidad de citas. Esto probablemente significa que la farmacia está bloqueando el acceso de nuestra herramienta a su sitio web.',
          visitWebsite: "Visitar el sito de web de {name}",
          lastChecked: "Última comprobación",
          never: "Nunca",
          viewOnWebsite:
            "Ver horarios de citas disponibles en el sito de web de {name}.",
          moreAppointments: "Ver {count} otros horarios de citas",
        },
        doses: {
          first: "Primera dosis",
          second: "Segunda dosis solamente - {type}",
        },
        store: {
          miles: "millas",
          appointmentsAvailable: "Citas disponibles a partir de",
          krogerWarning:
            "Advertencia: Muchos usuarios informan problemas para reservar citas con {name} (debido a los requisitos de la segunda cita). Sin embargo, algunos usuarios aún han informado de éxito, y por eso todavía quiero compartir los datos que tengo de las farmacias. Estoy tratando de encontrar una mejor manera de detectar estos problemas, pero mientras tanto, ¡lamento la frustración!",
          educationStaff: "Personal educativo y proveedores de cuidado infantil únicamente",
          inPhiladelphia: "en Filadelfia",
          riteAid:
            'Citas de Rite Aid solo están <a href="https://www.riteaid.com/corporate/news/-/pressreleases/news-room/2021/rite-aid-extends-covid-19-vaccine-priority-scheduling-period-for-teachers-school-staff-and-childcare-providers" target="_blank" rel="noopener"> disponibles para maestros, personal escolar y proveedores de cuidado infantil</a> en el viernes el 19 de marzo, el sábado el 20 de marzo, el viernes el 26 de marzo y el sábado el 27 de marzo<span v-show="store.properties.state === \'PA\'"> en Filadelfia (fuera de Filadelfia, otros grupos aún pueden ser elegibles)</span>. Las citas de Rite Aid deben volver a abrirse a otros grupos elegibles en otros días.',
        },
        status: {
          title: "Estado de la herramienta",
          columnHeaders: ["Farmacia", "Escaneando", "Última comprobación"],
          scanningCount: "{count} ubicaciones",
        },
        api: {
          title: "Interfaz de programación de aplicaciones (API) muy preliminar | Observador de vacunas para COVID-19",
          description:
            "Los datos legibles por máquina detrás del Observador de vacunas para COVID-19. Bien preliminario.",
          blockText:
            "Aquí están todos los datos subyacentes en formato JSON utilizados para esta herramienta. Las cosas avanzan rápido, por lo que esto está sujeto a cambios. Entonces, aunque dudo en llamar a esto cualquier tipo de API estable, quería al menos compartir lo que tengo. Si usa estos datos, tenga en cuenta que las cosas pueden cambiar. No dudes en comunicarte con nosotros para hacerme saber que estás usando esto, para que pueda avisarte sobre los cambios importantes:",
          or: "o",
          changelog: {
            beforeLink: "Suscríbete a la",
            linkText: "API Changelog",
            afterLink:
              "conversación en GitHub para recibir anuncios sobre cambios o adiciones a la API.",
          },
        },
        contact: {
          github: "GitHub",
          twitterHandle: "@nickblah",
        },
        steps: [
          {
            header:
              "Paso 1: Revise la disponibilidad de su condado y {state}'s eligibilidad",
            colorado: `Visitar <a href="https://covid19.colorado.gov/for-coloradans/vaccine/where-can-i-get-vaccinated" class="text-white"><strong class="fw-bold">Colorado.gov</strong></a > para obtener información detallada sobre las opciones de vacunas de su condado y revisar si es elegible todavía.`,
            localProvider:
              "Es posible que pueda inscribirse para recibir vacunas con un proveedor de atención médica o puede haber otras opciones en su área, en cuyo caso es posible que no necesite esta herramienta.",
            eligibility:
              "Asegúrese de visitar el sitio web oficial de vacunación de su propio estado para obtener información detallada sobre las opciones de vacunas de su condado y revisar si es o no elegible todavía.",
          },
          {
            header:
              "Paso 2: Utilice esta herramienta para intentar encontrar una cita en la farmacia",
            text: [
              "Si decide que desea obtener una cita en una farmacia local (y actualmente es elegible para la vacuna), esta herramienta podría ayudarlo.",
              "En lugar de buscar en el sitio web de cada farmacia, escanearemos automáticamente los sitios web de las farmacias y le mostraremos las citas disponibles que podamos encontrar en una página.",
              "Todas las ubicaciones admitidas en {name} se escanean de forma regular y esta página se actualiza con las citas disponibles en el estado. Si no ve ubicaciones cercanas a usted en este momento, las citas pueden aparecer y desaparecer rápidamente, así que intente visitar la página en diferentes momentos durante el día.",
            ],
          },
        ],
        _state: {
          title: "Observador de vacunas para COVID-19 para {state}",
          description: `Una herramienta para ayudarlo a rastrear las vacantes de citas para la vacuna COVID-19 en farmacias de {state}. Actualizado cada minuto.`,
        },
        defaultVue: {
          forDevs: "Para desarrolladores:",
          api: "API muy preliminario",
          github: "GitHub",

          about: {
            header: "Acerca de",
            text: [
              "¡Encontrar vacunas parece difícil! Con suerte, las cosas se volverán más fáciles pronto, pero mientras tanto, tal vez esto pueda ayudar. Si encuentra esto útil, no dude en compartirlo. Ponte en contacto con cualquieras preguntas:",
              'Me gustaría agregar funcionalidad adicional, (escanear farmacias adicionales y enviar notificaciones por correo electrónico o mensajes de texto cuando se abren citas) si esto resulta útil y si el tiempo lo permite. Si eres un programador de computadoras y te gustaría contribuir, el proyecto es <a href="https://github.com/GUI/covid-vaccine-finder"> fuente abierta en GitHub</a > (aunque actualmente es muy desordenado e indocumentado).',
            ],
          },
        },
      },
    },
  },
};
