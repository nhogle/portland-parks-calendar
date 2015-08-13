# Portland Parks Calendar

This tool displays Portland Parks' Summer events on a more user-friendly,
interactive event calendar format.  This was motivated by frustration with
Portland Parks' existing website, which has a listing of events by park and by
day of week, which is difficult to follow.


## Usage
```console
git clone https://github.com/nhogle/portland-parks-calendar.git 
cd portland-parks-calendar
npm start
```

- Navigate to [http://localhost:8001/parks/](http://localhost:8001/parks/)
- Click on `Summer Free For All - Movies, Concerts & Playgrounds in the Park`
- Click on `Concerts in the Park` or `Movies in the Park`
- Events will now be displayed in a more user-friendly calendar on the top of the page.

## Implementation Details 

This tool is implemented as a proxy server based on
[Prosthetic](https://github.com/stamen/prosthetic/), which allows us to 
easily inject code into websites.  The proxy is hard-coded to point to 
[PortlandOregon.gov](http://portlandoregon.gov), and injects HTML, JavaScript 
and CSS so that an interactive calender is shown in addition to the event 
listing.

If interested, this can be made into a GreaseMonkey script or something, for
easier use without having to run a proxy server.
