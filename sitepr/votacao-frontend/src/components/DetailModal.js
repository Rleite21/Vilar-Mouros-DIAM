import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import DetailData from "./DetailData";

function DetailModal({ question }) { // (1)
  const URL_OPTIONS = "http://localhost:8000/votacao/api/options/"; // (2)
  const [showModal, setShowModal] = useState(false); // (3)
  const [optionList, setOptionList] = useState([]); // (4)

  const getOptions = () => { // (5)
    axios.get(URL_OPTIONS + question.pk)
      .then(request => { setOptionList(request.data); });
  };

  const toggleModal = () => { // (6)
    if (!showModal) getOptions();
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Button onClick={toggleModal} color="warning"> {/* (7) */}
        Detalhe
      </Button>
      <Modal isOpen={showModal} toggle={toggleModal}> {/* (8) */}
        <ModalHeader toggle={toggleModal}>
          Detalhe da questão {question.pk}
        </ModalHeader>
        <ModalBody>
          <DetailData 
            options={optionList}
            question={question}
            toggle={toggleModal} /> {/* (9) */}
        </ModalBody>
      </Modal>
    </>
  );
}

export default DetailModal;