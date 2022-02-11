import { useEntries } from '../../Context/EntryContext';
import Entry from '../Entry/Entry';
import './EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="entrydiv">
      <ul className="listdiv">
        {entries.map((entry) => {
          return (
            <li key={`${entry.name}-${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
