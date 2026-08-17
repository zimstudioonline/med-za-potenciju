import type { Metadata } from "next";
import Link from "next/link";

import { LegalList, LegalMail, LegalPage, LegalSection } from "@/components/legal";

const UPDATED = "17.08.2026.";

const linkClass =
  "font-medium text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-400";

export const metadata: Metadata = {
  title: "Obaveštenje o partnerskoj saradnji",
  description:
    "MedZaPotenciju.com je saradnik kompanije Q4You i može ostvariti proviziju kada kupovina nastane putem naše preporuke. Ovde objašnjavamo kako to funkcioniše.",
  alternates: { canonical: "/partnerska-saradnja" },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Obaveštenje o partnerskoj saradnji"
      updated={UPDATED}
      intro={
        <>
          <p>
            Dobrodošli na <strong className="text-foreground">MedZaPotenciju.com</strong>. Želimo da
            budemo potpuno transparentni prema našim posetiocima i kupcima.
          </p>
          <p className="font-semibold text-foreground">
            MedZaPotenciju.com nije zvanični korporativni sajt kompanije Q4You.
          </p>
          <p>
            Internet stranicu koristimo kao informativni i promotivni kanal za predstavljanje
            određenih proizvoda i informacija povezanih sa Q4You ponudom.
          </p>
          <p>
            Autor i vlasnik ovog sajta je <strong className="text-foreground">saradnik kompanije
            Q4You</strong> i može ostvariti finansijsku korist, proviziju, popust ili drugu pogodnost
            kada korisnik izvrši kupovinu ili se registruje putem odgovarajuće partnerske preporuke,
            kada je takva mogućnost aktivna.
          </p>
        </>
      }
    >
      <LegalSection title="1. Naša saradnja sa Q4You">
        <p>
          Sajt MedZaPotenciju.com predstavlja proizvode i informacije povezane sa kompanijom{" "}
          <strong className="text-foreground">Q4You / Quality 4 You</strong>.
        </p>
        <p>
          Q4You na svom zvaničnom sajtu predstavlja proizvode iz oblasti zdravlja, lepote i
          domaćinstva, kao i mogućnost uključivanja u njihov poslovni sistem.
        </p>
        <p>
          Naša uloga je da kao saradnik promovišemo proizvode, pružamo informacije potencijalnim
          kupcima i zainteresovanim osobama i, kada je primenljivo, ostvarujemo korist kroz partnerski
          odnos sa Q4You.
        </p>
        <p className="font-semibold text-foreground">
          MedZaPotenciju.com nije vlasnik brenda Q4You i ne predstavlja zvanični korporativni sajt
          kompanije Q4You.
        </p>
        <p>
          Za zvanične informacije o kompaniji, proizvodima, poslovnom sistemu i uslovima saradnje
          korisnici mogu posetiti{" "}
          <a href="https://q4you.rs/" className={linkClass} rel="nofollow noopener" target="_blank">
            zvanični sajt Q4You
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Kako funkcioniše partnerska preporuka">
        <p>
          Na pojedinim stranicama MedZaPotenciju.com mogu se nalaziti linkovi, dugmad ili drugi načini
          povezivanja sa proizvodima i uslugama kompanije Q4You.
        </p>
        <p>
          Kada korisnik klikne na partnerski link i izvrši određenu radnju, kao što je kupovina
          proizvoda ili registracija, ta aktivnost može biti evidentirana kao partnerska preporuka.
        </p>
        <p>
          U zavisnosti od konkretnih uslova saradnje, autor sajta može ostvariti proviziju ili drugu
          finansijsku ili poslovnu korist.
        </p>
        <p className="font-semibold text-foreground">
          Korisniku se zbog toga ne mora povećati cena proizvoda.
        </p>
        <p>
          Cena proizvoda, uslovi kupovine, dostava, reklamacije i druga pitanja koja se odnose na samu
          kupovinu uređuju se prema uslovima prodavca i kompanije Q4You.
        </p>
      </LegalSection>

      <LegalSection title="3. Transparentnost prema korisnicima">
        <p>
          Želimo da bude jasno da postoji komercijalni interes kada preporučujemo određene proizvode.
        </p>
        <p>
          Kada preporučujemo proizvod, ne želimo da korisnik stekne utisak da je preporuka potpuno
          nezavisna od bilo kakvog poslovnog odnosa.
        </p>
        <p>
          Zbog toga jasno navodimo da smo <strong className="text-foreground">saradnik Q4You</strong> i
          da možemo ostvariti korist od određenih preporuka.
        </p>
        <p>Ovo obaveštenje postoji kako bi korisnik mogao da donese informisanu odluku.</p>
      </LegalSection>

      <LegalSection title="4. Naše preporuke">
        <p>
          Trudimo se da proizvode i informacije predstavljene na ovom sajtu prikazujemo jasno,
          odgovorno i bez obmanjujućih obećanja.
        </p>
        <p>
          Međutim, činjenica da možemo ostvariti proviziju ne znači da garantujemo da će određeni
          proizvod odgovarati svakom korisniku ili da će kod svakog korisnika proizvesti isti rezultat.
        </p>
        <p>Individualno iskustvo sa proizvodom može biti različito.</p>
        <p>
          Pre kupovine preporučujemo da korisnik pročita informacije o proizvodu, deklaraciju, način
          upotrebe i eventualna upozorenja.
        </p>
      </LegalSection>

      <LegalSection title="5. Nema garancije zarade">
        <p>
          Ukoliko na sajtu ili putem partnerske komunikacije govorimo o mogućnosti poslovne saradnje sa
          Q4You, takve informacije ne predstavljaju garanciju zarade.
        </p>
        <p>
          Visina eventualne zarade zavisi od brojnih faktora, uključujući lični angažman, prodajne
          rezultate, broj kupaca, poslovne aktivnosti, uslove programa i druge okolnosti.
        </p>
        <p>Ne tvrdimo da će svaki saradnik ostvariti određeni prihod.</p>
        <p>
          Svako ko razmatra poslovnu saradnju treba da samostalno prouči aktuelne uslove programa i
          proceni da li je takav model poslovanja odgovarajući za njega.
        </p>
      </LegalSection>

      <LegalSection title="6. Informacije o proizvodima">
        <p>
          Informacije o proizvodima objavljene na MedZaPotenciju.com namenjene su informisanju i ne
          predstavljaju garanciju određenog zdravstvenog rezultata.
        </p>
        <p>Posebno ne tvrdimo da će određeni proizvod:</p>
        <LegalList
          items={[
            "izlečiti bolest;",
            "sprečiti bolest;",
            "garantovati poboljšanje erekcije;",
            "garantovati povećanje libida;",
            "garantovati povećanje seksualne želje;",
            "garantovati određeni nivo energije ili vitalnosti;",
            "imati isti efekat kod svakog korisnika.",
          ]}
        />
        <p>Individualni rezultati mogu se razlikovati.</p>
        <p>
          Za više informacija pogledajte naše{" "}
          <Link href="/odricanje-od-odgovornosti" className={linkClass}>
            Odricanje od odgovornosti
          </Link>{" "}
          i{" "}
          <Link href="/politika-privatnosti" className={linkClass}>
            Politiku privatnosti
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Odnos prema Q4You">
        <p>
          MedZaPotenciju.com funkcioniše kao promotivni kanal kojim upravlja saradnik Q4You.
        </p>
        <p>To znači da:</p>
        <LegalList
          items={[
            "nismo vlasnik kompanije Q4You;",
            "nismo zvanični korporativni sajt Q4You;",
            "ne predstavljamo kompaniju kao njen zaposleni organ osim u okviru našeg statusa saradnika;",
            "ne možemo menjati zvanične cene, uslove poslovanja ili pravila kompanije;",
            "za zvanične informacije o kompaniji i njenim pravilima treba konsultovati zvanične Q4You kanale.",
          ]}
        />
        <p>
          Q4You na svom sajtu navodi kontakt i podatke distributivnog centra i kompanije{" "}
          <strong className="text-foreground">Quality 4 You doo</strong>.
        </p>
      </LegalSection>

      <LegalSection title="8. Kupovina proizvoda">
        <p>
          Kada korisnik odluči da kupi proizvod, uslovi kupovine zavise od konkretnog prodajnog kanala
          putem kojeg se porudžbina realizuje.
        </p>
        <p>
          MedZaPotenciju.com ne treba posmatrati kao zamenu za zvanične uslove prodaje Q4You.
        </p>
        <p>Za pitanja koja se odnose na:</p>
        <LegalList
          items={[
            "cenu;",
            "dostupnost proizvoda;",
            "način plaćanja;",
            "dostavu;",
            "reklamacije;",
            "povraćaj proizvoda;",
            "garancije;",
            "aktuelne uslove kupovine;",
          ]}
        />
        <p>korisnik treba da se obrati prodavcu odnosno nadležnom Q4You prodajnom kanalu.</p>
      </LegalSection>

      <LegalSection title="9. Partnerski linkovi">
        <p>
          Partnerski link može sadržati identifikator koji omogućava kompaniji ili partnerskom sistemu
          da prepozna da je korisnik došao putem naše preporuke.
        </p>
        <p>
          Takav identifikator može omogućiti evidentiranje preporuke i obračun eventualne provizije.
        </p>
        <p>
          Korisnik ne plaća dodatnu naknadu samo zato što je koristio partnerski link, osim ako
          drugačije nije navedeno u konkretnim uslovima ponude.
        </p>
      </LegalSection>

      <LegalSection title="10. Korišćenje informacija sa sajta">
        <p>
          Informacije na MedZaPotenciju.com pružaju se u dobroj nameri i sa ciljem da korisniku pomognu
          da se bolje informiše.
        </p>
        <p>Ipak, korisnik samostalno donosi konačnu odluku o kupovini proizvoda.</p>
        <p>Ne garantujemo da će proizvod odgovarati potrebama svakog korisnika.</p>
        <p>
          Ukoliko imate zdravstvene probleme, koristite lekove ili imate bilo kakve nedoumice u vezi sa
          korišćenjem proizvoda, preporučujemo da se prethodno konsultujete sa lekarom ili farmaceutom.
        </p>
      </LegalSection>

      <LegalSection title="11. Ažuriranje ovog obaveštenja">
        <p>Ovo obaveštenje o partnerskoj saradnji možemo ažurirati ukoliko se promene:</p>
        <LegalList
          items={[
            "naš partnerski odnos;",
            "način ostvarivanja provizije;",
            "poslovni model;",
            "način promocije proizvoda;",
            "uslovi saradnje sa Q4You;",
            "relevantni zakonski ili regulatorni zahtevi.",
          ]}
        />
        <p>Aktuelna verzija ovog dokumenta biće objavljena na ovoj stranici.</p>
      </LegalSection>

      <LegalSection title="12. Kontakt">
        <p>
          Ako imate pitanje u vezi sa našim partnerskim odnosom, načinom preporuke proizvoda ili
          sadržajem ovog obaveštenja, možete nas kontaktirati:
        </p>
        <p className="font-semibold text-foreground">MedZaPotenciju.com</p>
        <p>
          E-mail: <LegalMail />
        </p>
        <p>Internet stranica: https://medzapotenciju.com/</p>
      </LegalSection>

      <LegalSection title="13. Završna napomena">
        <p>
          Naš cilj je da korisnicima omogućimo transparentan pristup informacijama o proizvodima koje
          preporučujemo.
        </p>
        <p className="font-semibold text-foreground">
          Ako kupite proizvod putem naše preporuke, možemo ostvariti proviziju ili drugu korist.
        </p>
        <p>Ova činjenica ne predstavlja garanciju da će proizvod ostvariti određeni rezultat kod vas.</p>
        <p>
          Pre donošenja odluke o kupovini preporučujemo da pročitate sve dostupne informacije o
          proizvodu i, ukoliko imate zdravstvene nedoumice, konsultujete odgovarajućeg zdravstvenog
          radnika.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
