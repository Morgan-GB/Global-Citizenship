import Content from "$components/Content";
import Header from "$components/Header";
import {
  VerticalColumn,
  VerticalColumnContainer,
} from "$components/VerticalColumns";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header id="hero" hero>
        <div className={styles.suptitle}>Lets talk about</div>
        <h1 className="withSuptitle">Europe&apos;s Refugee Crisis.</h1>
      </Header>
      <Content>
        <h1 id="what-is-a-refugee">Firstly, what is a refugee?</h1>
        <p>
          The terms &quot;refuge&quot; and &quot;asylum seeker&quot; tend to get
          mixed up a lot. If you&apos;re unaware of the difference, you can read
          about the definitions of these words below.
        </p>
      </Content>

      <VerticalColumnContainer>
        <VerticalColumn>
          <h2>Refugees</h2>
          <p>
            A refugee is a person who has fled their country due to serious risk
            of human rights violations or persecution. The risks of these people
            staying at their home country are so high that they felt the need to
            leave to seek safety, because their government cannot or will not
            protect them from these dangers.
          </p>
        </VerticalColumn>
        <VerticalColumn>
          <h2>Asylum Seekers</h2>
          <p>
            An asylum seeker is someone who is seeking asylum in another
            country. These people are very similar to refugees, however they
            have not recieved{" "}
            <Link href="https://www.gov.uk/claim-asylum#:~:text=You%20must%20apply%20for%20asylum,is%20eligible%20to%20claim%20asylum.">
              refugee status
            </Link>
            .
          </p>
          <p>
            Asylum seekers do <b>not</b> have the same rights as a citizen or a
            refugee. They cannot work and are instead eligible for benefits from
            the government.
          </p>
        </VerticalColumn>
      </VerticalColumnContainer>

      <Content>
        <p>
          Here, we will be discussing the issue of the European Refugee Crisis,
          and how it&apos;s an issue, how it affects the environment, and how
          you can help people fleeing their countries.
        </p>

        <h1 id="whats-the-issue">What&apos;s the issue?</h1>
        <p>
          When a country is in war, a lot of its population do not wish to
          continue to live there in conflict, as their lives may be at risk.
          This is why a lot of people choose to seek asylum and become refugees
          in other countries. This alone is not the issue. The issue arises with
          how a lot of these asylum seekers choose to get to Europe.
        </p>
        <p>
          People attempt to get to Europe primarily on small plastic boats. The
          recommended way to reach the UK is through safe, legal routes such as
          legal boats and aeroplanes. Sea conditions change constantly, what may
          be a calm sea one second may become a stormy, violent sea the next.
          This is how{" "}
          <Link href="https://news.sky.com/story/channel-migrants-uk-must-make-itself-less-attractive-to-those-crossing-french-interior-minister-says-12481675">
            27 people died
          </Link>{" "}
          in 2021 whilst attempting to cross the English Channel.{" "}
        </p>
        <p>
          The issue has gotten so out of hand that the French interior minister
          has said that the UK must{" "}
          <Link href="https://news.sky.com/story/channel-migrants-uk-must-make-itself-less-attractive-to-those-crossing-french-interior-minister-says-12481675">
            make itself &quot;less economically attractive&quot;
          </Link>
          , saying France will not be &quot;held hostage&quot; by British
          domestic politics.
        </p>
        <p>
          <b>This isn&apos;t the only issue.</b>
        </p>
        <p>
          When people are seeking refugee status, they&apos;re being treated as
          someone else&apos;s problem. Some governments may ignore their
          requests and deny perfectly valid ones.
        </p>
        <p>
          Not to mention, some people are fearful of being &quot;flooded&quot;
          with refugees. Some people think that refugees may ruin the economy,
          culture, etc., despite the fact that without the ability to seek
          refuge in other countries, they may die.
        </p>

        <h1>What can we do to help?</h1>
        <p>
          A lot of what needs to be done needs to happen at a higher level than
          most of us, at a governmental level. However, this doesn&apos;t mean
          that we can&apos;t raise awareness and help people in conflict escape
          their countries <b>legally</b>.
        </p>

        <h2>Campaign.</h2>
        <p>
          <Link href="refugee-action.org.uk">Refugee Action</Link> is
          campaigning to give the opportunity for{" "}
          <Link href="https://www.refugee-action.org.uk/let-refugees-learn/">
            more refugees to learn English
          </Link>
          , and to make changes to the law to{" "}
          <Link href="https://www.refugee-action.org.uk/campaigns/family_reunion/">
            reunite separated refugee families
          </Link>
          .
        </p>
        <h2>Welcome Refugees.</h2>
        <p></p>

        <h1>What can the &quot;higher ups&quot; do?</h1>
        <p>
          Most of us cannot make large-scale change that makes refugees
          travelling to Europe easier, as much as we may want to. &quot;higher
          ups&quot; in our government need to make these changes.
        </p>
      </Content>
    </>
  );
}
