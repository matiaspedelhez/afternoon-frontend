import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import classNames from "classnames";

interface PaginationButtonsProps {
  totalProducts: number;
  selectedPage: any;
  totalDisplayed: number;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  totalProducts,
  selectedPage,
  totalDisplayed,
}) => {
  const router = useRouter();

  const singleButton = (content: number) => {
    return Number.isNaN(content) ? (
      <></>
    ) : (
      <a
        key={`${content}`}
        className={classNames(
          "select-none cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium",
          {
            'z-10 bg-gray-50 border-gray-700 text-gray-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
              content == selectedPage,
          }
        )}
        onClick={() => router.push(`/store/${content}`)}
      >
        {content}
      </a>
    );
  };

  const renderButtons = () => {
    // render buttons on their correct position
    const pageQuantity: number = Math.ceil(totalProducts / totalDisplayed);
    let pages: number[] = new Array();

    if (totalProducts < totalDisplayed * 5) {
      for (let i = 1; pages.length < totalProducts / totalDisplayed; i++) {
        pages.push(i);
      }
    } else {
      if (selectedPage <= 2) {
        for (let i = 1; pages.length < 5; i++) {
          pages.push(i);
        }
      } else if (selectedPage >= pageQuantity - 2) {
        for (let i = 6; pages.length < 5; i++) {
          pages.push(i);
        }
      } else {
        for (let i = selectedPage - 2; pages.length < 5; i++) {
          pages.push(i);
        }
      }
    }

    return pages.map((e) => singleButton(e));
  };

  return (
    <div className="max-w-2xl mx-auto py-2 pt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Anterior
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Siguiente
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando{" "}
            <span className="font-medium">
              {selectedPage === "1" ? "1" : (selectedPage - 1) * totalDisplayed}
            </span>{" "}
            de{" "}
            {(selectedPage - 1) * totalDisplayed + totalDisplayed >
            totalProducts
              ? totalProducts
              : (selectedPage - 1) * totalDisplayed + totalDisplayed}
            <span className="font-medium"></span> of{" "}
            <span className="font-medium">{totalProducts}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {renderButtons()}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Siguiente</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationButtons;
