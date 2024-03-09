import { Box, Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import { ToastContainer } from "react-toastify"
import DelegateVote from "./component/DelegateVote";
import useProposals from "./hooks/useProposals";
import HandleVote from "./component/HandleVote";

configureWeb3Modal();

function App() {
    const { loading, data: proposals } = useProposals();

    return (
        <Container>
            <Header />
            <main className="mt-6">
                <Box mb="4">
                    <DelegateVote />
                </Box>

        <HandleVote proposals={proposals} loading={loading} />
            </main>
            <ToastContainer
                theme="colored"
                // transition={Slide}
                hideProgressBar={true}
            />
        </Container>
    );
}

export default App;
