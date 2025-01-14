<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ProductEnum extends Enum
{
    const FREE = 1;
    const HIGH_QUALITY = 2;
    const ACTIVE = 3;

    const REFILL_YES = 1;
    const REFILL_NO = 0;

    const CANCELING_IS_AVAILABLE = 1;
    const CANCELING_NOT_AVAILABLE = 0;

    const CANCEL_YES = 1;
    const CANCEL_NO = 0;
}
