<?php
$classes_json = file_get_contents("data/classes.json");
$classes = json_decode($classes_json, TRUE);
?>
<table>
    <thead>
        <tr>
            <th colspan="100%"><select>
                <?php foreach($classes as $class): ?>
                    <option><?php echo $class['name']; ?></option>
                <?php endforeach; ?>
            </select><button>^</button></th>
        </tr>
        <tr>
            <?php for ($i=1; $i <= 20; $i++): ?>
                <th><?php echo $i; ?></th>
            <?php endfor; ?>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
            <td>Lvl1 Feats</td>
        </tr>
    </tbody>
</table>