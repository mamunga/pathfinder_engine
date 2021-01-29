<?php
$alignments_json = file_get_contents("data/alignments.json");
$alignments = json_decode($alignments_json, TRUE);
?>
<tr>
    <td>Alignment</td>
    <td>
        <select id="chacter-alignment">
            <?php foreach ($alignments as $alignment) : ?>
                <option><?php echo $alignment['name']; ?></option>
            <?php endforeach; ?>
        </select>
    </td>
</tr>