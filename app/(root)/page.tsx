"use client";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs"

const SetupPage = () => {
    return (
        <div>
            <Modal title="Test" description="This is a test" isOpen onClose={() => {}}>
                Children
            </Modal>
            
        </div>
    )
}

export default SetupPage
  