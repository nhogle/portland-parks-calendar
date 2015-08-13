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

Navigate to http://localhost:8001/parks/

## Implementation Details 

This tool is implemented as a proxy server based on
[Prosthetic](https://github.com/stamen/prosthetic/), which injects code into
Portland Parks websites so that an interactive calender is shown in addition to
the event listing.

If interested, this can make this into a GreaseMonkey script or something, for
easier use without having to run a proxy server.
