import PropTypes from "prop-types";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function Modals({size,title,children,showModal,setShowModal,upload}){

   return(
      <>
         <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
            <ModalHeader toggler={() => setShowModal(false)}>
               {title}
            </ModalHeader>
            <ModalBody>
               {children}
            </ModalBody>
            <ModalFooter>
               <Button 
                  color="red"
                  buttonType="link"
                  onClick={(e) => setShowModal(false)}
                  ripple="dark"
               >
                  Close
               </Button>

               <Button
                  color="green"
                  onClick={upload}
                  ripple="light"
               >
                  Save Changes
               </Button>
            </ModalFooter>
         </Modal>
      </>
   )
}

Modals.propTypes ={
   size: PropTypes.string,
   title: PropTypes.string,
   upload: PropTypes.func
}