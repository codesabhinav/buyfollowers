<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class OrderEnum extends Enum
{
    const IN_PROGRESS = 0;
    const COMPLETE = 1;
    const CANCEL = 2;
    
}
