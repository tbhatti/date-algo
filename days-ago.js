function timeAgo(date) {
            const SECOND   = 1;
            const MINUTE   = 60;
            const HOUR     = 3600;
            const DAY      = 86400;
            const MONTH    = 2629746;
            const YEAR     = 31556952;
            const DECADE   = 315569520;

                              
                var now = new Date();
                var diff = Math.round(( now - date ) / 1000);

                var unit = '';
                var num = 0;
                var plural = false;

                switch(true){
                    case diff <= 0:
                        return 'just now';
                    break;

                    case diff < MINUTE:
                        num = Math.round(diff / SECOND);
                        unit = 'sec';
                        plural = num > 1;
                    break;

                    case diff < HOUR:
                        num = Math.round(diff / MINUTE);
                        unit = 'min';
                        plural = num > 1;
                    break;

                    case diff < DAY:
                        num = Math.round(diff / HOUR);
                        unit = 'hour';
                        plural = num > 1;
                    break;

                    case diff < MONTH:
                        num = Math.round(diff / DAY);
                        unit = 'day';
                        plural = num > 1;
                    break;

                    case diff < YEAR:
                        num = Math.round(diff / MONTH);
                        unit = 'month';
                        plural = num > 1;
                    break;

                    case diff < DECADE:
                        num = Math.round(diff / YEAR);
                        unit = 'year';
                        plural = num > 1;
                    break;

                    default:
                        num = Math.round(diff / YEAR);
                        unit = 'year';
                        plural = num > 1;
                }

                var str = '';
                if(num){
                    str += `${num} `;
                }

                str += `${unit}`;

                if(plural){
                    str += 's';
                }

                str += ' ago';

                return str;
            
        }

        console.log(timeAgo(new Date()));
        console.log(timeAgo(new Date('Jun 27 2020 10:12:19')));
        console.log(timeAgo(new Date('Jun 27 2020 00:12:19')));
        console.log(timeAgo(new Date('May 28 2020 13:12:19')));
        console.log(timeAgo(new Date('May 28 2017 13:12:19')));
        console.log(timeAgo(new Date('May 28 2000 13:12:19')));
        console.log(timeAgo(new Date('Sep 10 1994 13:12:19')));