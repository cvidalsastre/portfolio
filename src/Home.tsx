import data from '../src/assets/data/home.json';
export const Home = () => {
    return (
        <div>
        <h1 className="">{data.intro_field}</h1>
     <ol>
          {Object.entries(data.dots).map(([key, value], index) => (
            <li key={key}>
              <strong>{index}.{key}:</strong> {value}
            </li>
          ))}
        </ol>
        </div>
    )
    }