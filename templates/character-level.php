<tr>
    <td>Level <?php echo $level; ?></td>
    <td>
        <select id="chacter-select-lvl<?php echo $level; ?>">
            <?php foreach ($classes as $class) : ?>
                <option><?php echo $class['name']; ?></option>
            <?php endforeach; ?>
        </select>
    </td>
</tr>