import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import TeamDetailsPranshuJha from "@/components/team/TeamDetails-pranshu-jha";
import NavDataRook from "@/data/navDataRook.json"

const TeamDetails = () => {
    return (
        <div>
            <Head>
                <title>Team - Pranshu Jha</title>
                <meta name="description" content="Team Details Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
            <RootLayout header="header1" footer="footer-usa" defaultMode="dark" customNavData={NavDataRook}>
                    <TeamDetailsPranshuJha />
                    <DigitalAgencyCTA />
                </RootLayout>
            </main>
        </div>
    );
};

export default TeamDetails;
