import React from "react";
import Row from "../../components/Layout/Row";
import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader";
import PageContent from "../../components/Page/PageContent";
import LicenseTypeCard from "../../components/Licenses/LicenseTypeCard";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AvailableLicenseView = props => {
    const { licenseTypes, contests, showContestModal, handleOpenConstestModal, handleBuyLicense, handleCloseConstestModal, selectedType, handleSelectConstest } = props;
    const types = licenseTypes.map(t => {
        const handleOnClick = t.oneOff ? handleOpenConstestModal : handleBuyLicense;
        return <LicenseTypeCard type={t} handleBuyClick={handleOnClick}/>
    });
    return (
        <Page>
            <PageHeader>Available licenses</PageHeader>
            <PageContent>
                <Row>{types}</Row>
                <Modal isOpen={showContestModal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Buy an oneoff license for a contest</ModalHeader>
                    <ModalBody>
                        <div className=" row">
                            <label className="col-md-3 form-control-label" htmlFor="select">
                                Select contest
                            </label>
                            <div className="col-md-9">
                                <select id="select" name="select" className="form-control" onChange={handleSelectConstest}>
                                    <option value="0">Please select</option>
                                    {contests.map(c => (
                                        <option key={c.id} value={c.id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => handleBuyLicense(selectedType.typeId, selectedType.institutionId, selectedType.contestId)}>
                            Buy
                        </Button>{" "}
                        <Button color="secondary" onClick={handleCloseConstestModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </PageContent>
        </Page>
    );
};

export default AvailableLicenseView;
