import type { Metadata } from "next";
import Link from "next/link";

import { CookieConsentReopen } from "@/components/cookie-consent";
import { LegalList, LegalMail, LegalPage, LegalSection, LegalSubtitle } from "@/components/legal";

const UPDATED = "17.08.2026.";

const linkClass =
  "font-medium text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-400";

export const metadata: Metadata = {
  title: "Podešavanja kolačića",
  description:
    "Koje vrste kolačića možemo koristiti, čemu služe i kako da njima upravljate putem podešavanja svog internet pregledača.",
  alternates: { canonical: "/podesavanja-kolacica" },
};

export default function CookieSettingsPage() {
  return (
    <LegalPage
      title="Podešavanja kolačića"
      updated={UPDATED}
      intro={
        <>
          <p>
            Na internet stranici <strong className="text-foreground">MedZaPotenciju.com</strong> možemo
            koristiti kolačiće (cookies) i slične tehnologije kako bismo omogućili pravilno
            funkcionisanje sajta, poboljšali korisničko iskustvo, analizirali korišćenje sajta i, kada
            je primenljivo, merili uspešnost naših marketinških aktivnosti.
          </p>
          <p>
            Na ovoj stranici možete saznati više o vrstama kolačića koje možemo koristiti i o
            mogućnostima upravljanja vašim podešavanjima.
          </p>
          <p>
            Za više informacija pogledajte našu{" "}
            <Link href="/politika-privatnosti" className={linkClass}>
              Politiku privatnosti
            </Link>
            .
          </p>
        </>
      }
    >
      <LegalSection title="1. Šta su kolačići?">
        <p>
          Kolačići su male tekstualne datoteke koje internet stranice mogu sačuvati na vašem računaru,
          telefonu, tabletu ili drugom uređaju.
        </p>
        <p>
          Oni omogućavaju sajtu da zapamti određene informacije i prepozna vaš uređaj prilikom naredne
          posete.
        </p>
        <p>
          Kolačići mogu biti neophodni za funkcionisanje sajta ili se mogu koristiti za dodatne
          funkcionalnosti, analitiku i marketing.
        </p>
      </LegalSection>

      <LegalSection title="2. Kategorije kolačića">
        <LegalSubtitle>Neophodni kolačići — uvek aktivni</LegalSubtitle>
        <p>Ovi kolačići su potrebni za osnovno funkcionisanje MedZaPotenciju.com. Mogu biti potrebni za:</p>
        <LegalList
          items={[
            "funkcionisanje internet stranice;",
            "bezbednost sajta;",
            "navigaciju;",
            "funkcionisanje korpe;",
            "proces poručivanja;",
            "pamćenje određenih tehničkih podešavanja;",
            "sprečavanje zloupotreba.",
          ]}
        />
        <p>
          Pošto su ovi kolačići potrebni za pružanje osnovnih funkcionalnosti sajta, njihovo potpuno
          isključivanje možda neće biti moguće putem sistema za upravljanje saglasnostima.
        </p>

        <LegalSubtitle>Funkcionalni kolačići — opcioni</LegalSubtitle>
        <p>
          Funkcionalni kolačići omogućavaju sajtu da zapamti određene izbore i podešavanja korisnika.
          Mogu se koristiti za:
        </p>
        <LegalList
          items={[
            "pamćenje korisničkih podešavanja;",
            "poboljšanje korisničkog iskustva;",
            "omogućavanje dodatnih funkcionalnosti;",
            "pravilno prikazivanje određenih elemenata sajta.",
          ]}
        />
        <p>
          Ako odbijete ove kolačiće, osnovne funkcije sajta mogu i dalje raditi, ali određene dodatne
          funkcionalnosti možda neće biti dostupne.
        </p>

        <LegalSubtitle>Analitički kolačići — opcioni</LegalSubtitle>
        <p>
          Analitički kolačići koriste se za razumevanje načina na koji posetioci koriste
          MedZaPotenciju.com. Mogu nam pomoći da saznamo:
        </p>
        <LegalList
          items={[
            "koliko posetilaca posećuje sajt;",
            "koje stranice su najposećenije;",
            "kako korisnici dolaze do sajta;",
            "koliko dugo se korisnici zadržavaju na određenim stranicama;",
            "koje sadržaje korisnici najviše koriste;",
            "da li određene funkcionalnosti rade kako treba.",
          ]}
        />
        <p>Ove informacije koristimo za unapređenje sajta i korisničkog iskustva.</p>
        <p>
          Analitički kolačići neće biti aktivirani kada je za njih potrebna prethodna saglasnost
          korisnika, osim ako korisnik takvu saglasnost ne da.
        </p>

        <LegalSubtitle>Marketinški kolačići — opcioni</LegalSubtitle>
        <p>Marketinški kolačići mogu se koristiti za:</p>
        <LegalList
          items={[
            "merenje uspešnosti reklamnih kampanja;",
            "praćenje konverzija;",
            "optimizaciju oglašavanja;",
            "kreiranje reklamnih publika;",
            "prikazivanje relevantnijeg sadržaja;",
            "merenje interakcije korisnika sa reklamama.",
          ]}
        />
        <p>
          U zavisnosti od korišćenih tehnologija, ovi kolačići mogu biti postavljeni od strane
          MedZaPotenciju.com ili trećih strana koje pružaju marketinške usluge.
        </p>
        <p>Marketinški kolačići koriste se samo u skladu sa odgovarajućim podešavanjima saglasnosti.</p>
      </LegalSection>

      <LegalSection title="3. Trenutno stanje na sajtu">
        <p>
          U ovom trenutku MedZaPotenciju.com ne koristi analitičke ni marketinške kolačiće — na sajtu
          nisu aktivirani Google Analytics, Meta Pixel niti druge slične tehnologije trećih strana.
        </p>
        <p>
          Podaci koje sajt čuva na vašem uređaju odnose se na osnovne funkcionalnosti, pre svega na
          sadržaj korpe, kako biste izabrane proizvode zatekli i nakon osvežavanja stranice.
        </p>
        <p>
          Ukoliko u budućnosti uvedemo analitičke ili marketinške tehnologije, ova stranica biće
          ažurirana, a saglasnost tražena na način predviđen propisima.
        </p>
      </LegalSection>

      <LegalSection title="4. Kako da promenite podešavanja">
        <p>
          Prilikom prve posete prikazuje se traka na kojoj birate između opcija „Prihvati sve” i „Samo
          neophodni”. Taj izbor pamtimo na vašem uređaju i ne pitamo vas ponovo pri svakoj poseti.
        </p>
        <p>Svoj izbor možete promeniti u bilo kom trenutku:</p>
        <div className="pt-2">
          <CookieConsentReopen />
        </div>
        <p>
          Promena podešavanja ne utiče na zakonitost obrade koja je izvršena pre promene vašeg izbora.
        </p>
        <p>
          Kolačićima i podacima koje sajtovi čuvaju na vašem uređaju možete upravljati i putem
          podešavanja svog internet pregledača.
        </p>
        <p>Većina internet pregledača omogućava vam da:</p>
        <LegalList
          items={[
            "pregledate kolačiće;",
            "izbrišete postojeće kolačiće;",
            "blokirate kolačiće;",
            "blokirate kolačiće trećih strana;",
            "podesite upozorenje pre čuvanja kolačića.",
          ]}
        />
        <p>
          Imajte na umu da blokiranje svih kolačića može uticati na pravilno funkcionisanje određenih
          delova sajta, uključujući korpu i proces poručivanja.
        </p>
      </LegalSection>

      <LegalSection title="5. Kolačići trećih strana">
        <p>Određene funkcionalnosti MedZaPotenciju.com mogu koristiti servise trećih strana.</p>
        <p>U zavisnosti od trenutne konfiguracije sajta, to mogu biti:</p>
        <LegalList
          items={[
            "analitički servisi;",
            "reklamne platforme;",
            "društvene mreže;",
            "sistemi za online plaćanje;",
            "servisi za e-mail marketing;",
            "drugi tehnički pružaoci usluga.",
          ]}
        />
        <p>
          Takve kompanije mogu koristiti sopstvene kolačiće u skladu sa svojim pravilima i politikama
          privatnosti.
        </p>
      </LegalSection>

      <LegalSection title="6. Google Analytics">
        <p>
          Ukoliko budemo koristili Google Analytics ili sličan analitički servis, određeni kolačići
          mogu biti korišćeni radi analize posećenosti i ponašanja korisnika.
        </p>
        <p>
          Takvi kolačići spadaju u kategoriju analitičkih kolačića i, kada je potrebna prethodna
          saglasnost, aktiviraju se tek nakon odgovarajućeg izbora korisnika.
        </p>
      </LegalSection>

      <LegalSection title="7. Meta i druge oglasne platforme">
        <p>
          Ukoliko budemo koristili Meta Pixel ili druge slične tehnologije, određeni kolačići mogu biti
          korišćeni za merenje i optimizaciju reklamnih kampanja.
        </p>
        <p>Takve tehnologije mogu omogućiti:</p>
        <LegalList
          items={[
            "merenje konverzija;",
            "analizu ponašanja posetilaca;",
            "kreiranje reklamnih publika;",
            "optimizaciju oglasa;",
            "merenje učinka kampanja.",
          ]}
        />
        <p>Opcione marketinške tehnologije koriste se u skladu sa podešavanjima saglasnosti korisnika.</p>
      </LegalSection>

      <LegalSection title="8. Čuvanje vašeg izbora">
        <p>
          Vaš izbor pamtimo lokalno na vašem uređaju, kako vas ne bismo pitali isto pri svakoj poseti.
          Taj zapis sadrži samo izabranu opciju, verziju saglasnosti i datum, i ne šalje se nikome.
        </p>
        <p>
          Na taj način nećemo morati da vas prilikom svake posete ponovo pitamo za iste postavke, u
          meri u kojoj to omogućava korišćeni sistem.
        </p>
        <p>
          Period čuvanja izbora zavisi od tehničkog sistema za upravljanje saglasnostima koji je
          aktivan na sajtu.
        </p>
      </LegalSection>

      <LegalSection title="9. Vaša privatnost">
        <p>Vaša podešavanja kolačića predstavljaju deo našeg pristupa zaštiti privatnosti.</p>
        <p>
          Detaljnije informacije o obradi podataka o ličnosti možete pronaći u našoj{" "}
          <Link href="/politika-privatnosti" className={linkClass}>
            Politici privatnosti
          </Link>
          , gde je kolačićima posvećeno posebno poglavlje.
        </p>
      </LegalSection>

      <LegalSection title="10. Promene podešavanja kolačića">
        <p>
          Možemo promeniti korišćene kolačiće ili tehnologije koje se koriste na MedZaPotenciju.com.
        </p>
        <p>
          Ukoliko dođe do značajnih promena koje utiču na način obrade podataka ili na izbor korisnika,
          odgovarajuće informacije biće ažurirane.
        </p>
        <p>
          Ova stranica može biti izmenjena bez prethodne najave kada je to potrebno radi tehničkih,
          poslovnih ili regulatornih razloga.
        </p>
      </LegalSection>

      <LegalSection title="11. Kontakt">
        <p>
          Za sva pitanja u vezi sa kolačićima, privatnošću ili načinom na koji koristimo vaše podatke
          možete nas kontaktirati:
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
