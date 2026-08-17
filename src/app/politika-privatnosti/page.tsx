import type { Metadata } from "next";

import {
  LegalList,
  LegalMail,
  LegalPage,
  LegalSection,
  LegalSubtitle,
} from "@/components/legal";

const UPDATED = "17.08.2026.";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Koje podatke prikupljamo, u koje svrhe ih koristimo, koliko dugo ih čuvamo i koja prava imate u vezi sa svojim podacima o ličnosti.",
  alternates: { canonical: "/politika-privatnosti" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Politika privatnosti"
      updated={UPDATED}
      intro={
        <>
          <p>
            Dobrodošli na internet stranicu{" "}
            <strong className="text-foreground">MedZaPotenciju.com</strong>.
          </p>
          <p>
            Zaštita vaše privatnosti i podataka o ličnosti nam je važna. Ovom Politikom privatnosti
            želimo da vas informišemo o tome koje podatke možemo prikupljati, u koje svrhe ih
            koristimo, na koji način ih čuvamo i koja prava imate u vezi sa svojim podacima.
          </p>
          <p>
            Korišćenjem internet stranice https://medzapotenciju.com/ prihvatate način obrade
            podataka opisan u ovoj Politici privatnosti.
          </p>
        </>
      }
    >
      <LegalSection title="1. Rukovalac podacima o ličnosti">
        <p>
          Rukovalac podacima o ličnosti koje prikupljamo i obrađujemo putem ove internet stranice je
          vlasnik internet stranice <strong className="text-foreground">MedZaPotenciju.com</strong>.
        </p>
        <p>
          Za sva pitanja koja se odnose na zaštitu podataka o ličnosti možete nas kontaktirati putem
          e-mail adrese: <LegalMail />
        </p>
        <p>
          Ukoliko je potrebno, podaci o pravnom licu ili preduzetniku koji upravlja internet
          prodavnicom mogu biti navedeni u odgovarajućim pravnim dokumentima i podacima za kontakt.
        </p>
      </LegalSection>

      <LegalSection title="2. Koje podatke možemo prikupljati">
        <p>
          U zavisnosti od načina na koji koristite našu internet stranicu, možemo prikupljati sledeće
          podatke:
        </p>
        <LegalList
          items={[
            "ime i prezime;",
            "adresu za dostavu;",
            "broj telefona;",
            "e-mail adresu;",
            "podatke koje navedete prilikom slanja upita;",
            "podatke koje unesete prilikom naručivanja proizvoda;",
            "podatke potrebne za obradu i isporuku porudžbine;",
            "podatke o komunikaciji sa nama;",
            "tehničke podatke o uređaju i internet pregledaču;",
            "IP adresu;",
            "podatke o načinu korišćenja internet stranice;",
            "podatke prikupljene putem kolačića (cookies), u skladu sa njihovom namenom.",
          ]}
        />
        <p>Ne prikupljamo više podataka nego što je potrebno za konkretnu svrhu obrade.</p>
      </LegalSection>

      <LegalSection title="3. Kako prikupljamo podatke">
        <p>Podatke o ličnosti možemo prikupljati kada:</p>
        <LegalList
          items={[
            "izvršite porudžbinu;",
            "popunite kontakt formu;",
            "pošaljete nam e-mail;",
            "kontaktirate nas telefonom;",
            "prijavite se na newsletter ili drugu vrstu elektronske komunikacije, ukoliko je dostupna;",
            "koristite našu internet stranicu;",
            "date saglasnost za korišćenje određenih kolačića;",
            "učestvujete u promotivnim aktivnostima ili akcijama.",
          ]}
        />
        <p>Podaci koje nam dostavljate treba da budu tačni i ažurni.</p>
      </LegalSection>

      <LegalSection title="4. Svrha obrade podataka">
        <p>Vaše podatke možemo koristiti u sledeće svrhe:</p>

        <LegalSubtitle>Obrada porudžbina</LegalSubtitle>
        <p>
          Podaci se koriste kako bismo mogli da primimo, obradimo i realizujemo vašu porudžbinu,
          uključujući komunikaciju sa vama u vezi sa porudžbinom i dostavom.
        </p>

        <LegalSubtitle>Kontakt sa korisnicima</LegalSubtitle>
        <p>
          Ukoliko nas kontaktirate putem e-maila, kontakt forme ili drugog dostupnog kanala, vaše
          podatke koristimo kako bismo odgovorili na vaš upit.
        </p>

        <LegalSubtitle>Dostava proizvoda</LegalSubtitle>
        <p>
          Podaci potrebni za isporuku mogu biti prosleđeni dostavnoj službi ili drugom pružaocu usluge
          koji učestvuje u realizaciji porudžbine.
        </p>

        <LegalSubtitle>Korisnička podrška</LegalSubtitle>
        <p>
          Podatke možemo koristiti radi odgovaranja na pitanja, rešavanja problema i komunikacije sa
          korisnicima.
        </p>

        <LegalSubtitle>Unapređenje internet stranice</LegalSubtitle>
        <p>
          Određeni tehnički i statistički podaci mogu se koristiti za analizu korišćenja sajta,
          poboljšanje njegovog rada i unapređenje korisničkog iskustva.
        </p>

        <LegalSubtitle>Marketing i newsletter</LegalSubtitle>
        <p>
          Ukoliko ste se dobrovoljno prijavili na newsletter ili dali odgovarajuću saglasnost, vaše
          podatke možemo koristiti za slanje informacija o proizvodima, ponudama, akcijama i drugim
          marketinškim sadržajima.
        </p>
        <p>Od marketinške komunikacije možete se odjaviti u bilo kom trenutku.</p>
      </LegalSection>

      <LegalSection title="5. Pravni osnov obrade">
        <p>
          Obrada podataka o ličnosti zasniva se, u zavisnosti od konkretne situacije, na jednom ili
          više pravnih osnova predviđenih važećim propisima, uključujući:
        </p>
        <LegalList
          items={[
            "izvršenje ugovora ili preduzimanje radnji na vaš zahtev pre zaključenja ugovora;",
            "vašu saglasnost;",
            "ispunjenje zakonskih obaveza;",
            "legitimni interes, kada je primenljivo i kada su ispunjeni zakonski uslovi.",
          ]}
        />
        <p>
          Zakon o zaštiti podataka o ličnosti Republike Srbije uređuje, između ostalog, načela
          obrade, prava lica na koje se podaci odnose i obaveze rukovalaca i obrađivača.
        </p>
      </LegalSection>

      <LegalSection title="6. Podaci prilikom kupovine">
        <p>
          Prilikom kupovine proizvoda možemo tražiti podatke koji su neophodni za realizaciju
          porudžbine, kao što su:
        </p>
        <LegalList
          items={[
            "ime i prezime;",
            "adresa za dostavu;",
            "grad i poštanski broj;",
            "broj telefona;",
            "e-mail adresa;",
            "podaci potrebni za izdavanje računa i druge zakonske obaveze.",
          ]}
        />
        <p>
          Ovi podaci koriste se prvenstveno za obradu porudžbine, komunikaciju sa kupcem i
          realizaciju isporuke.
        </p>
      </LegalSection>

      <LegalSection title="7. Plaćanje">
        <p>
          Ukoliko se plaćanje obavlja putem eksternog sistema za plaćanje, podaci o platnoj kartici i
          drugi osetljivi podaci o plaćanju mogu biti obrađivani direktno od strane pružaoca platne
          usluge.
        </p>
        <p className="font-semibold text-foreground">
          MedZaPotenciju.com ne treba da čuva podatke platnih kartica korisnika ukoliko se plaćanje
          obavlja putem eksternog sistema za plaćanje.
        </p>
        <p>
          Način obrade podataka od strane takvog pružaoca usluge uređuje se njegovim pravilima
          privatnosti i uslovima korišćenja.
        </p>
      </LegalSection>

      <LegalSection title="8. Dostavljanje podataka trećim licima">
        <p>
          Vaše podatke ne prodajemo, ne iznajmljujemo i ne ustupamo trećim licima u svrhe koje nisu
          navedene u ovoj Politici privatnosti, osim kada za to postoji odgovarajući pravni osnov.
        </p>
        <p>
          Podaci mogu biti dostupni određenim pružaocima usluga kada je to potrebno za funkcionisanje
          sajta i realizaciju usluga, na primer:
        </p>
        <LegalList
          items={[
            "dostavnim službama;",
            "pružaocima hosting usluga;",
            "pružaocima tehničke podrške;",
            "pružaocima platnih usluga;",
            "pružaocima usluga e-mail marketinga;",
            "analitičkim servisima;",
            "drugim obrađivačima podataka koji pružaju usluge neophodne za poslovanje sajta.",
          ]}
        />
        <p>
          Takvi pružaoci usluga mogu obrađivati podatke samo u meri potrebnoj za pružanje konkretne
          usluge i u skladu sa odgovarajućim obavezama zaštite podataka.
        </p>
      </LegalSection>

      <LegalSection title="9. Kolačići (cookies)">
        <p>
          Internet stranica <strong className="text-foreground">MedZaPotenciju.com</strong> može
          koristiti kolačiće (cookies).
        </p>
        <p>
          Kolačići su male tekstualne datoteke koje se čuvaju na vašem uređaju i mogu omogućiti
          pravilno funkcionisanje internet stranice, pamćenje određenih podešavanja, analizu poseta i,
          kada je primenljivo, prikaz relevantnog marketinškog sadržaja.
        </p>
        <p>Možemo koristiti:</p>

        <LegalSubtitle>Neophodne kolačiće</LegalSubtitle>
        <p>
          Ovi kolačići mogu biti potrebni za osnovno funkcionisanje internet stranice, uključujući
          proces kupovine i druge funkcionalnosti sajta.
        </p>

        <LegalSubtitle>Analitičke kolačiće</LegalSubtitle>
        <p>
          Mogu se koristiti za razumevanje načina na koji posetioci koriste sajt i za unapređenje
          njegovog sadržaja i funkcionalnosti.
        </p>

        <LegalSubtitle>Marketinške kolačiće</LegalSubtitle>
        <p>
          Ukoliko koristimo marketinške alate, oni mogu koristiti kolačiće za merenje učinka kampanja
          i prikazivanje relevantnog sadržaja.
        </p>
        <p>
          U zavisnosti od korišćenih tehnologija i podešavanja sajta, određeni kolačići mogu zahtevati
          vašu prethodnu saglasnost.
        </p>
      </LegalSection>

      <LegalSection title="10. Google Analytics i slični alati">
        <p>
          Ukoliko su na internet stranici aktivirani analitički alati, kao što je Google Analytics,
          oni mogu prikupljati određene tehničke i statističke informacije o korišćenju sajta.
        </p>
        <p>
          Takvi podaci mogu uključivati informacije o posećenim stranicama, vremenu provedenom na
          sajtu, vrsti uređaja, pregledaču i druge statističke podatke.
        </p>
        <p>
          Analitičke i druge tehnologije trećih strana treba koristiti u skladu sa njihovim aktuelnim
          pravilima privatnosti i odgovarajućim podešavanjima saglasnosti na sajtu.
        </p>
      </LegalSection>

      <LegalSection title="11. Meta Pixel i oglašavanje">
        <p>
          Ukoliko koristimo Meta Pixel ili druge slične tehnologije za oglašavanje i merenje rezultata
          kampanja, određeni podaci o korišćenju sajta mogu biti obrađivani u skladu sa podešavanjima
          tih servisa.
        </p>
        <p>Takve tehnologije koristimo radi:</p>
        <LegalList
          items={[
            "merenja uspešnosti reklamnih kampanja;",
            "razumevanja ponašanja posetilaca;",
            "optimizacije oglašavanja;",
            "kreiranja relevantnih reklamnih publika, kada je to dozvoljeno.",
          ]}
        />
        <p>
          Korisnik može imati mogućnost da upravlja određenim marketinškim kolačićima putem
          podešavanja privatnosti na sajtu i/ili podešavanja svog internet pregledača.
        </p>
      </LegalSection>

      <LegalSection title="12. Newsletter i e-mail marketing">
        <p>Ukoliko se prijavite na naš newsletter, možemo koristiti vašu e-mail adresu za slanje:</p>
        <LegalList
          items={[
            "informacija o proizvodima;",
            "posebnih ponuda;",
            "popusta;",
            "korisnih sadržaja;",
            "novih članaka na blogu;",
            "drugih marketinških poruka.",
          ]}
        />
        <p>
          Na dnu svake marketinške poruke, kada je primenljivo, biće dostupna mogućnost odjave sa
          mailing liste.
        </p>
        <p>Od newslettera se možete odjaviti u bilo kom trenutku.</p>
      </LegalSection>

      <LegalSection title="13. Osetljivi podaci">
        <p>
          Molimo vas da putem kontakt forme, e-maila ili drugih kanala ne dostavljate nepotrebne
          podatke o zdravstvenom stanju ili druge posebne vrste podataka o ličnosti.
        </p>
        <p>
          Sadržaj internet stranice ima informativni karakter i ne predstavlja zamenu za savet,
          pregled ili preporuku lekara.
        </p>
        <p>
          Ukoliko nam dobrovoljno pošaljete podatke koji nisu neophodni za rešavanje vašeg zahteva,
          možemo ih obraditi samo u meri koja je dozvoljena važećim propisima.
        </p>
      </LegalSection>

      <LegalSection title="14. Bezbednost podataka">
        <p>
          Preduzimamo odgovarajuće tehničke i organizacione mere radi zaštite podataka o ličnosti od:
        </p>
        <LegalList
          items={[
            "neovlašćenog pristupa;",
            "gubitka;",
            "uništenja;",
            "izmene;",
            "neovlašćenog otkrivanja;",
            "druge neovlašćene obrade.",
          ]}
        />
        <p>
          Ipak, nijedan sistem prenosa podataka putem interneta ili elektronskog čuvanja podataka ne
          može garantovati apsolutnu bezbednost.
        </p>
      </LegalSection>

      <LegalSection title="15. Period čuvanja podataka">
        <p>
          Podatke čuvamo onoliko dugo koliko je potrebno za ostvarivanje svrhe zbog koje su
          prikupljeni, odnosno u periodu koji zahtevaju važeći propisi.
        </p>
        <p>
          Podaci koji se odnose na porudžbine, račune i poslovnu dokumentaciju mogu biti čuvani tokom
          perioda koji je propisan poreskim, računovodstvenim i drugim relevantnim propisima.
        </p>
        <p>
          Podaci obrađeni na osnovu saglasnosti mogu se čuvati dok saglasnost ne bude povučena, osim
          ako postoji drugi pravni osnov za njihovu dalju obradu.
        </p>
      </LegalSection>

      <LegalSection title="16. Vaša prava">
        <p>U skladu sa važećim propisima o zaštiti podataka o ličnosti, možete imati pravo da:</p>
        <LegalList
          items={[
            "zatražite pristup svojim podacima;",
            "zatražite ispravku netačnih ili nepotpunih podataka;",
            "zatražite brisanje podataka kada su za to ispunjeni zakonski uslovi;",
            "zatražite ograničenje obrade;",
            "u određenim slučajevima ostvarite pravo na prenosivost podataka;",
            "uložite prigovor na određene vrste obrade;",
            "povučete saglasnost kada se obrada zasniva na saglasnosti;",
            "podnesete pritužbu nadležnom nadzornom organu.",
          ]}
        />
        <p>
          Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti Republike Srbije je
          nezavisan organ nadležan za nadzor nad primenom Zakona o zaštiti podataka o ličnosti.
        </p>
      </LegalSection>

      <LegalSection title="17. Kako možete ostvariti svoja prava">
        <p>
          Za pitanja, zahteve ili prigovore koji se odnose na obradu vaših podataka o ličnosti možete
          nam se obratiti putem e-mail adrese: <LegalMail />
        </p>
        <p>U zahtevu je poželjno navesti:</p>
        <LegalList
          items={[
            "ime i prezime;",
            "kontakt e-mail;",
            "opis zahteva;",
            "informacije koje mogu pomoći da identifikujemo podatke na koje se zahtev odnosi.",
          ]}
        />
        <p>
          Možemo zatražiti dodatne informacije radi provere identiteta podnosioca zahteva, kada je to
          potrebno radi zaštite podataka.
        </p>
      </LegalSection>

      <LegalSection title="18. Pritužba nadležnom organu">
        <p>
          Ukoliko smatrate da je obrada vaših podataka o ličnosti izvršena suprotno važećim propisima,
          imate pravo da se obratite nadležnom nadzornom organu.
        </p>
        <p>
          U Republici Srbiji nadzor nad primenom Zakona o zaštiti podataka o ličnosti vrši{" "}
          <strong className="text-foreground">
            Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti
          </strong>
          .
        </p>
      </LegalSection>

      <LegalSection title="19. Linkovi ka drugim internet stranicama">
        <p>Naša internet stranica može sadržati linkove ka drugim internet stranicama.</p>
        <p>
          Ne možemo garantovati način na koji treće strane obrađuju podatke o ličnosti. Pre korišćenja
          takvih internet stranica preporučujemo da pročitate njihove politike privatnosti.
        </p>
      </LegalSection>

      <LegalSection title="20. Izmene Politike privatnosti">
        <p>
          Ova Politika privatnosti može biti povremeno izmenjena ili dopunjena zbog promena u načinu
          rada internet stranice, korišćenim tehnologijama, poslovanju ili važećim propisima.
        </p>
        <p>Nova verzija Politike privatnosti biće objavljena na ovoj stranici.</p>
        <p>
          Preporučujemo da povremeno proverite ovu stranicu kako biste bili upoznati sa eventualnim
          izmenama.
        </p>
      </LegalSection>

      <LegalSection title="21. Kontakt">
        <p>
          Za sva pitanja u vezi sa ovom Politikom privatnosti, obradom podataka o ličnosti ili
          korišćenjem sajta, možete nas kontaktirati:
        </p>
        <p className="font-semibold text-foreground">MedZaPotenciju.com</p>
        <p>
          E-mail: <LegalMail />
        </p>
        <p>Internet stranica: https://medzapotenciju.com/</p>
      </LegalSection>
    </LegalPage>
  );
}
