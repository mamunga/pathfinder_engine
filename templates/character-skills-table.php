<?php
$skills_json = file_get_contents("data/skills.json");
$skills = json_decode($skills_json, TRUE);
?>

<table>
    <thead>
        <tr>
            <th>Allocate skill points</th>
        </tr>
        <tr><th>SKILL GÖMB</th></tr>
        <tr>
            <th><h3>Skills</h3></th>
        </tr>
        <tr>
            <th></th>
            <th>Class Skill</th>
            <th>Rank</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($skills as $skill) : ?>
            <tr>
                <td><?php echo $skill['name']; ?></td>
                <td>+</td>
                <td>
                    <div class="number-container">
                        <button></button>
                        <div>0</div>
                        <button></button>
                    </div>
                </td>
                <td>0</td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>