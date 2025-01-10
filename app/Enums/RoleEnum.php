<?php

declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static SUPER_ADMIN()
 */
final class RoleEnum extends Enum
{
    const SUPER_ADMIN = 1;
    const USER = 2;

}
