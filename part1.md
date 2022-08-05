|                 | append             | insert            |
|----------------:|--------------------|-------------------|
| extraLargeArray | 11.62ms            | 1.35s             |
| largeArray      | 682.3 microseconds | 11.21ms           |
| medium          | 226 microseconds   | 224 microseconds  |
| small           | 169 microseconds   | 54 microseconds   |
| tiny            | 147 microseconds   | 46.9 microseconds |

Append scales at a much faste rate than insert. The first 2 functions are almost identical results for both functions and insert actually has a faster time. However, we see that around the medium array the append times start to double while the insert times are much more. Append catches up to insert at the mediumArray but then skyrockets, showing that as more data is added into the insert function it will scale much slower than its append counterpart. The insert function is much slower because it requires an extra step. The append function multiplies every number by two and then easily slides it into the array. The append function multiplies every number, and then for every number after the first it must slide all the other numbers in the array before placing the new number in the first slot. The difference is trivial for small operations, but as this function scales it can take lots of extra time. 