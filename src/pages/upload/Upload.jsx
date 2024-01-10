import {EuiFilePicker, EuiCard, EuiFlexGroup, EuiFlexItem, EuiHorizontalRule} from "@elastic/eui";

import Header from "../../components/header/Header";


export const Background = () => {
    const breadcrumbs = [
        {
            text: "Dashboard",
            href: "",
        },
        {
            text: "Background",
            href: "/",
        },
    ];
    return (
        <div>
          <Header
            breadcrumps={breadcrumbs}
            title="Background"
            rightSideItems={[]}
            description={""}
          />
          <EuiHorizontalRule size="full" />
          <EuiFlexGroup gutterSize="l">
                <EuiFlexItem>
                    <EuiCard
                        style ={{
                            width: "300px",
                            marginLeft: "700px"
                        }}
                        textAlign="center"
                        image="https://source.unsplash.com/400x200/?Nature"
                        title="Current Background"
                        description="TTGO 77"
                        footer={
                            <EuiFlexGroup justifyContent="space-evenly" alignItems="center">
                                <EuiFilePicker
                                id={"1"}
                                multiple
                                initialPromptText="Select or drag and drop new background"
                                onChange={console.log("123")}
                                display={"large"}
                                aria-label="Use aria labels when no actual label is in use"
                                />
                            </EuiFlexGroup>
                        }
                    />
                </EuiFlexItem>
            </EuiFlexGroup>
        </div>
      );
}
export default Background