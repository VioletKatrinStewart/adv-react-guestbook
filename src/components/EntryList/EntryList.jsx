import { useEntries } from '../../Context/EntryContext';
import Entry from '../Entry/Entry';
import './EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="entrydiv">
      <ul className="innerdiv">
        {entries.map((entry) => {
          return (
            <li className="listdiv" key={`${entry.name}-${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
