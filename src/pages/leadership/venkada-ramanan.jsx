import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import TeamDetailsVenkadaRamanan from "@/components/team/TeamDetails-venkada-ramanan";
import NavDataRook from "@/data/navDataRook.json"

const TeamDetails = () => {
    return (
        <div>
            <Head>
                <title>Team - Venkada Ramanan</title>
                <meta name="description" content="Team Details Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
            <RootLayout header="header1" footer="footer-usa" defaultMode="dark" customNavData={NavDataRook}>
                    <TeamDetailsVenkadaRamanan />
                    <DigitalAgencyCTA />
                </RootLayout>
            </main>
        </div>
    );
};

export default TeamDetails;
