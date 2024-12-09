import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import TeamDetailsSabariH from "@/components/team/TeamDetails-sabari-h";
import NavDataRook from "@/data/navDataRook.json"

const TeamDetails = () => {
    return (
        <div>
            <Head>
                <title>Team - Sabari H</title>
                <meta name="description" content="Team Details Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
            <RootLayout header="header1" footer="footer-usa" defaultMode="dark" customNavData={NavDataRook}>
                    <TeamDetailsSabariH />
                    <DigitalAgencyCTA />
                </RootLayout>
            </main>
        </div>
    );
};

export default TeamDetails;
