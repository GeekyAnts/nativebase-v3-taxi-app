# Taxi App

A cross platform UI template to build a Taxi Booking App that provides all the necessary screens along with NativeBase and React Navigation.

<p align="center">
    <img src="./assets/first.gif" width="200" alt="gif"/>
</p>


### Demo
This is an design app, so APIs are not connected. You can add dummy data while checking it out.
For instance, you can type any number on the OTP and mobile number field for going to next screen.

Demo Link: [taxi-app](https://madewithnativebase.com/projects/taxi-app)

### Contributors 

#### Code Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/GeekyAnts/nativebase-v3-taxi-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=GeekyAnts/nativebase-v3-taxi-app" />
</a>

#### Contribution guidelines:

Code-level contributions to Taxi app come in the form of pull requests. These are done by forking the repo and making changes locally. You can raise a PR against development branch. 

### Code Snippets

Snippet showing map on web
```jsx
export function WebMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if map script is already present in DOM
    if (!document.body.dataset.mapLoaded) {
      const mapScript = document.createElement("script");
      mapScript.src = MAP_SCRIPT_WITH_API_KEY;

      mapScript.onload = () => {
        // set dataset property on body to indicate map script has been loaded.
        document.body.dataset.mapLoaded = "true";
        setMapLoaded(true);
      };
      document.head.appendChild(mapScript);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      //@ts-ignore
      const map = new window.google.maps.Map(mapContainerRef.current, {
        zoom: 15,
        mapTypeId: "terrain",
        center: { lat: 12.9698, lng: 77.75 },
      });
    }
  }, [mapLoaded]);

  return (
    <>
      {mapLoaded ? (
        <VStack
          safeAreaBottom
          flex="1"
          space={{ base: "4", md: "0" }}
          rounded={{ md: "lg" }}
          borderWidth={{ base: "0", md: "1" }}
          _light={{
            bg: { md: "white", base: "primary.50" },
            borderColor: "coolGray.200",
          }}
          _dark={{
            bg: { base: "coolGray.700", md: "coolGray.700" },
            borderColor: "coolGray.700",
          }}
        >
          <View flex="1" ref={mapContainerRef} />
        </VStack>
      ) : (
        "Loading ..."
      )}
    </>
  );
}
```