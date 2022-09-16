const faculty = require('../index');
var assert = require('assert');

describe('test faculty function', function () {
    describe('test all valid inputs', function () {
        var inputs = [0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49]
        var expected_outputs = [1,
        1,
        2,
        6,
        24,
        120,
        720,
        5040,
        40320,
        362880,
        3628800,
        39916800,
        479001600,
        6227020800,
        87178291200,
        1307674368000,
        20922789888000,
        355687428096000,
        6402373705728000,
        121645100408832000,
        2432902008176640000,
        51090942171709440000,
        1124000727777607680000,
        25852016738884976640000,
        620448401733239439360000,
        15511210043330985984000000,
        403291461126605635584000000,
        10888869450418352160768000000,
        304888344611713860501504000000,
        8841761993739701954543616000000,
        265252859812191058636308480000000,
        8222838654177922817725562880000000,
        263130836933693530167218012160000000,
        8683317618811886495518194401280000000,
        295232799039604140847618609643520000000,
        10333147966386144929666651337523200000000,
        371993326789901217467999448150835200000000,
        13763753091226345046315979581580902400000000,
        523022617466601111760007224100074291200000000,
        20397882081197443358640281739902897356800000000,
        815915283247897734345611269596115894272000000000,
        33452526613163807108170062053440751665152000000000,
        1405006117752879898543142606244511569936384000000000,
        60415263063373835637355132068513997507264512000000000,
        2658271574788448768043625811014615890319638528000000000,
        119622220865480194561963161495657715064383733760000000000,
        5502622159812088949850305428800254892961651752960000000000,
        258623241511168180642964355153611979969197632389120000000000,
        12413915592536072670862289047373375038521486354677760000000000,
        608281864034267560872252163321295376887552831379210240000000000]
        for (let i = 0; i < 25; i++) {
            it('test faculty of ' + inputs[i] + ' should be ' + expected_outputs[i], function () {
                assert.equal(faculty(inputs[i]), expected_outputs[i]);
            });
        }
    });
/*
    describe('test invalid inputs', function () {
        inputs = ["abc", true, -1, 9001]
        for (let i = 0; i < inputs.length; i++) {
            it('test faculty of ' + inputs[i] + ' should fail', function () {
                assert.fail(faculty(inputs[i]));
            });
        }
    });

*/
});