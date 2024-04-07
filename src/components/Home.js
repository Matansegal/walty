import LastSeraches from "./LastSeraches";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div>
      <div class="app-container _9f30a0">
        <div>
          <img
            src="https://walty.co.il/static/media/walty.903c62c6ccb5c432b71de3a8ff518af4.svg"
            width="220"
            height="80"
          />
          <h1 class="_20d666">Photos Engine</h1>
        </div>

        <SearchBar />
        <LastSeraches />
      </div>
    </div>
  );
};

export default Home;
