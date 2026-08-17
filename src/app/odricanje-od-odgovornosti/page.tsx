import type { Metadata } from "next";

import { LegalList, LegalMail, LegalPage, LegalSection } from "@/components/legal";

const UPDATED = "17.08.2026.";

export const metadata: Metadata = {
  title: "Odricanje od odgovornosti",
  description:
    "Sadržaj sajta ima informativni i edukativni karakter i ne predstavlja medicinski savet, dijagnozu ni zamenu za pregled kod lekara.",
  alternates: { canonical: "/odricanje-od-odgovornosti" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Odricanje od odgovornosti"
      updated={UPDATED}
      intro={
        <>
          <p>
            Dobrodošli na internet stranicu{" "}
            <strong className="text-foreground">MedZaPotenciju.com</strong>.
          </p>
          <p>
            Informacije objavljene na ovoj internet stranici namenjene su prvenstveno informisanju i
            edukaciji korisnika o temama koje se odnose na muško zdravlje, seksualno zdravlje, libido,
            potenciju, životne navike, ishranu i proizvode koji se predstavljaju na sajtu.
          </p>
          <p>
            Korišćenjem internet stranice https://medzapotenciju.com/ prihvatate uslove i ograničenja
            navedena u ovom Odricanju od odgovornosti.
          </p>
        </>
      }
    >
      <LegalSection title="1. Informacije na sajtu nisu medicinski savet">
        <p>
          Sadržaj objavljen na MedZaPotenciju.com ne predstavlja medicinski savet, dijagnozu, terapiju
          niti zamenu za pregled i savet kvalifikovanog zdravstvenog radnika.
        </p>
        <p>
          Informacije na sajtu ne treba koristiti za samostalno postavljanje dijagnoze ili donošenje
          odluka o lečenju zdravstvenih problema.
        </p>
        <p>
          Ukoliko imate zdravstvene tegobe, simptome ili pitanja koja se odnose na vaše zdravlje,
          preporučujemo da se obratite lekaru ili drugom odgovarajuće kvalifikovanom zdravstvenom
          radniku.
        </p>
      </LegalSection>

      <LegalSection title="2. Muško i seksualno zdravlje">
        <p>Teme koje obrađujemo mogu uključivati:</p>
        <LegalList
          items={[
            "potenciju;",
            "erekciju;",
            "libido;",
            "seksualnu želju;",
            "mušku vitalnost;",
            "stres i seksualno zdravlje;",
            "san i seksualno zdravlje;",
            "fizičku aktivnost;",
            "ishranu;",
            "vitamine i minerale;",
            "životne navike;",
            "druge teme povezane sa muškim zdravljem.",
          ]}
        />
        <p>Informacije objavljene u okviru ovih tema imaju edukativni karakter.</p>
        <p>
          Problemi sa erekcijom, smanjen libido ili druge promene seksualnog zdravlja mogu imati
          različite uzroke i u određenim slučajevima mogu biti povezani sa zdravstvenim stanjima koja
          zahtevaju stručnu procenu.
        </p>
        <p>Zbog toga sadržaj na sajtu ne treba koristiti kao zamenu za medicinski pregled.</p>
      </LegalSection>

      <LegalSection title="3. Informacije o proizvodima">
        <p>
          MedZaPotenciju.com može sadržati informacije o proizvodima koji su namenjeni podršci muškoj
          vitalnosti, energiji i seksualnom zdravlju.
        </p>
        <p>
          Informacije o proizvodima, uključujući opis sastava, način upotrebe, preporuke i druge
          karakteristike, ne predstavljaju garanciju određenog rezultata kod svakog korisnika.
        </p>
        <p>Individualno iskustvo sa proizvodom može se razlikovati od osobe do osobe.</p>
        <p>
          Rezultati mogu zavisiti od različitih faktora, uključujući životne navike, ishranu, fizičku
          aktivnost, godine, zdravstveno stanje i druge individualne okolnosti.
        </p>
      </LegalSection>

      <LegalSection title="4. Nema garancije rezultata">
        <p>
          Ne garantujemo da će korišćenje bilo kog proizvoda predstavljenog na sajtu dovesti do
          određenog rezultata.
        </p>
        <p>Ne treba smatrati da bilo koja izjava na sajtu predstavlja obećanje:</p>
        <LegalList
          items={[
            "izlečenja bolesti;",
            "sprečavanja bolesti;",
            "trajnog poboljšanja zdravstvenog stanja;",
            "povećanja seksualne sposobnosti kod svih korisnika;",
            "povećanja libida kod svih korisnika;",
            "poboljšanja erekcije kod svih korisnika;",
            "postizanja konkretnog fizičkog ili zdravstvenog rezultata.",
          ]}
        />
        <p>
          Svrha informacija o proizvodima jeste da korisniku pruži informacije potrebne za donošenje
          informisane odluke o kupovini.
        </p>
      </LegalSection>

      <LegalSection title="5. Rezultati i iskustva korisnika">
        <p>
          Ukoliko na sajtu objavimo iskustva, komentare ili izjave korisnika, takav sadržaj predstavlja
          individualno iskustvo određene osobe.
        </p>
        <p>Iskustvo jednog korisnika ne znači da će drugi korisnik ostvariti isti rezultat.</p>
        <p>Sva iskustva treba posmatrati u kontekstu individualnih okolnosti korisnika.</p>
      </LegalSection>

      <LegalSection title="6. Sastav i informacije o proizvodima">
        <p>
          Informacije o sastavu, načinu upotrebe, preporučenoj količini, upozorenjima i drugim
          karakteristikama proizvoda prikazane na sajtu mogu biti podložne promenama.
        </p>
        <p>
          Pre upotrebe proizvoda preporučujemo da korisnik pažljivo pročita deklaraciju, uputstvo i
          upozorenja navedena na samom proizvodu.
        </p>
        <p>
          U slučaju neslaganja između informacija na internet stranici i informacija na aktuelnoj
          deklaraciji proizvoda, prednost imaju podaci navedeni na važećoj deklaraciji proizvoda.
        </p>
      </LegalSection>

      <LegalSection title="7. Konsultacija sa lekarom">
        <p>Ukoliko:</p>
        <LegalList
          items={[
            "imate postojeće zdravstveno stanje;",
            "koristite lekove;",
            "imate hronične zdravstvene tegobe;",
            "imate alergije ili intolerancije;",
            "ste pod medicinskim nadzorom;",
            "planirate da koristite proizvod kao dodatak postojećoj terapiji;",
          ]}
        />
        <p>pre upotrebe proizvoda preporučujemo konsultaciju sa lekarom ili farmaceutom.</p>
        <p>
          Posebno je važno potražiti stručni savet ukoliko imate novonastale, izražene ili dugotrajne
          probleme sa erekcijom, libidom ili drugim aspektima seksualnog zdravlja.
        </p>
      </LegalSection>

      <LegalSection title="8. Hitna zdravstvena stanja">
        <p>
          MedZaPotenciju.com nije zdravstvena ustanova i ne pruža hitnu medicinsku pomoć.
        </p>
        <p>
          U slučaju ozbiljnih, iznenadnih ili hitnih zdravstvenih simptoma potrebno je odmah
          kontaktirati odgovarajuću zdravstvenu službu ili otići u najbližu zdravstvenu ustanovu.
        </p>
        <p>
          Ne treba odlagati traženje stručne medicinske pomoći zbog informacija pronađenih na ovoj
          internet stranici.
        </p>
      </LegalSection>

      <LegalSection title="9. Tačnost informacija">
        <p>
          Trudimo se da informacije objavljene na MedZaPotenciju.com budu tačne, korisne i ažurne.
        </p>
        <p>
          Međutim, ne možemo garantovati da su sve informacije u svakom trenutku potpune, ažurne ili
          bez grešaka.
        </p>
        <p>Informacije se mogu menjati bez prethodne najave.</p>
        <p>Zadržavamo pravo da izmenimo, dopunimo ili uklonimo sadržaj sa internet stranice.</p>
      </LegalSection>

      <LegalSection title="10. Blog i edukativni sadržaj">
        <p>Blog sadržaj na MedZaPotenciju.com namenjen je edukaciji i informisanju.</p>
        <p>Članci mogu obrađivati teme iz oblasti:</p>
        <LegalList
          items={[
            "muškog zdravlja;",
            "potencije;",
            "erekcije;",
            "libida;",
            "ishrane;",
            "vitamina i minerala;",
            "fizičke aktivnosti;",
            "sna;",
            "stresa;",
            "životnih navika.",
          ]}
        />
        <p>Informacije navedene u blog člancima ne predstavljaju individualnu medicinsku preporuku.</p>
        <p>
          Čitalac samostalno odlučuje da li će određene informacije primeniti, a za zdravstvene odluke
          preporučujemo konsultaciju sa kvalifikovanim zdravstvenim radnikom.
        </p>
      </LegalSection>

      <LegalSection title="11. Spoljni linkovi">
        <p>MedZaPotenciju.com može sadržati linkove ka internet stranicama trećih lica.</p>
        <p>
          Takvi linkovi mogu biti navedeni kao dodatni izvor informacija ili zbog drugih korisnih
          funkcionalnosti.
        </p>
        <p>
          Ne kontrolišemo sadržaj, dostupnost, tačnost ili politiku privatnosti internet stranica
          trećih lica.
        </p>
        <p>Poseta takvim internet stranicama vrši se na sopstvenu odgovornost korisnika.</p>
      </LegalSection>

      <LegalSection title="12. Oglašavanje i partnerski sadržaj">
        <p>Na sajtu se mogu pojaviti reklamni, promotivni ili partnerski sadržaji.</p>
        <p>
          Ukoliko određeni sadržaj predstavlja plaćenu promociju, oglas ili partnerski sadržaj,
          nastojimo da ga predstavimo na način koji omogućava korisniku da ga razlikuje od redakcijskog
          ili edukativnog sadržaja.
        </p>
        <p>
          Prisustvo oglasa ili promotivnog sadržaja na sajtu ne predstavlja automatsku preporuku da je
          određeni proizvod ili usluga odgovarajuća za svakog korisnika.
        </p>
      </LegalSection>

      <LegalSection title="13. Odgovornost korisnika">
        <p>
          Korisnik je odgovoran za odluke koje donosi na osnovu informacija dostupnih na
          MedZaPotenciju.com.
        </p>
        <p>Korisnik ne treba da koristi sadržaj sajta kao zamenu za:</p>
        <LegalList
          items={[
            "pregled lekara;",
            "dijagnozu;",
            "terapiju;",
            "stručni medicinski savet;",
            "savet farmaceuta.",
          ]}
        />
      </LegalSection>

      <LegalSection title="14. Ograničenje odgovornosti">
        <p>
          U meri dozvoljenoj važećim propisima, MedZaPotenciju.com ne odgovara za odluke koje korisnik
          donese isključivo na osnovu informacija objavljenih na sajtu, niti za posledice nepravilne
          interpretacije ili nepravilne primene takvih informacija.
        </p>
        <p>
          Ovo ograničenje ne isključuje niti ograničava odgovornost koja se prema važećim propisima ne
          može isključiti ili ograničiti.
        </p>
      </LegalSection>

      <LegalSection title="15. Promene ovog Odricanja od odgovornosti">
        <p>Ovo Odricanje od odgovornosti može biti izmenjeno ili dopunjeno u skladu sa promenama:</p>
        <LegalList
          items={[
            "sadržaja internet stranice;",
            "ponude proizvoda;",
            "načina poslovanja;",
            "korišćenih tehnologija;",
            "relevantnih propisa.",
          ]}
        />
        <p>Ažurirana verzija biće objavljena na ovoj stranici.</p>
        <p>Datum poslednjeg ažuriranja nalazi se na početku dokumenta.</p>
      </LegalSection>

      <LegalSection title="16. Kontakt">
        <p>
          Za pitanja u vezi sa sadržajem sajta, proizvodima ili ovim Odricanjem od odgovornosti možete
          nas kontaktirati:
        </p>
        <p className="font-semibold text-foreground">MedZaPotenciju.com</p>
        <p>
          E-mail: <LegalMail />
        </p>
        <p>Internet stranica: https://medzapotenciju.com/</p>
      </LegalSection>

      <LegalSection title="17. Završna napomena">
        <p>
          MedZaPotenciju.com nastoji da korisnicima pruži korisne, jasne i odgovorne informacije o
          muškom zdravlju i proizvodima koji se nude putem internet stranice.
        </p>
        <p>Ipak, informacije dostupne na sajtu ne mogu zameniti individualni savet zdravstvenog radnika.</p>
        <p className="font-semibold text-foreground">
          Informišite se. Pročitajte deklaraciju proizvoda. Ako imate zdravstvene nedoumice,
          konsultujte lekara ili farmaceuta.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
