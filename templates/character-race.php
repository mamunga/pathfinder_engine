<?php 
$races_json = file_get_contents("data/races.json");
$races = json_decode($races_json, TRUE);
?>
<tr>
    <td>Race</td>
    <td>
        <select id="chacter-race">
            <?php foreach ($races as $race) : ?>
                <option><?php echo $race['name']; ?></option>
            <?php endforeach; ?>
        </select>
    </td>
</tr>