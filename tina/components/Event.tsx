import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Pillbox from '@tina/components/Pillbox.tsx'

type Props = {
  event: {
    title: string,
    institution: string,
    type: string,
    date: string,
    time?: string,
    location: string,
    description: string,
  }
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
  Input date of the form YYYY-MM-DD
  Output month as e.g. "Sep" or "Oct"
*/
function month(inputDate) {
  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  return month;
}

/**
  Input date of the form YYYY-MM-DD
  Output day as e.g. "9" or "12"
*/
function day(inputDate) {
  const date = new Date(inputDate);
  return date.getDate();
}

function year(inputDate) {
  const date = new Date(inputDate);
  return date.getFullYear();
}

export default function Event({event}: Props) {

  return (
    <div className="flex gap-x-4">

      <div className="text-center">
        <p className="text-xl text-gray-800">{month(event.date)}</p>
        <p className="-mt-1 text-3xl font-medium text-gray-700">{day(event.date)}</p>
        <p className="-mt-0.5 font-medium text-gray-700">{year(event.date)}</p>
      </div>

      <div>
        <div className="prose font-semibold text-gray-800">
          <TinaMarkdown content={event.title} />
        </div>
        <p className="text-gray-600 text-sm ml-px">{event.institution}</p>
        <div className="flex flex-col gap-x-2 gap-y-1 my-1">
          {event.type && <Pillbox>{event.type}</Pillbox>}
        </div>

        <div className="mt-2.5 text-sm max-w-2xl myprose">
          <TinaMarkdown content={event.description} />
        </div>

        {event.location && 
          <div className="mt-2.5 text-sm text-gray-600">
            <span className="font-semibold">Location:</span> {event.location}
          </div>
        }

      </div>

    </div>
  );

}
