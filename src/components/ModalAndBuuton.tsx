import { Fragment } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
import useBudget from '../hooks/useBudget'
import FormBill from './FormBill';

export default function ModalAndButton() {

  const { state, dispatch } = useBudget();

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center mx-2">
        <button
          type="button"
          onClick={() => dispatch({type: "open-modal"})}

        >
          <PlusCircleIcon className='w-12 md:w-16 h-16 text-indigo-700 hover:text-indigo-500 active:text-indigo-700 rounded-full cursor-pointer' />
        </button>
      </div>

      <Transition appear show={state.modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch({type: "close-modal"})}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-50"
            enterTo="opacity-50"
            leave="ease-in duration-200"
            leaveFrom="opacity-50"
            leaveTo="opacity-50"
          >
            <div className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                  <FormBill/>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}